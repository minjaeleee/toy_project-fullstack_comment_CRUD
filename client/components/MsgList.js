import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import fetcher from "../fetcher"
import useInfiniteScroll from "./hooks/useInfiniteScroll"
import MsgInput from "./MsgInput"
import MsgItem from "./MsgItem"

const userIds = ['philip', 'jay', 'minjae']
const getRandomUserId = () => userIds[Math.round(Math.random())]

// MsgInput => Create
const MsgList = () => {
  const [msgs, setMsgs] = useState(null)
  const [editingID, setEditingID] = useState(null)
  const [hasNext, setHasNext] = useState(true)
  const { query: { userId = '' } } = useRouter()
  const fetchMoreEl = useRef(null)
  const intersecting = useInfiniteScroll(fetchMoreEl)
  // console.log("intersecting", intersecting)

  const onCreate = async text => {
    const newMsg = await fetcher('post', '/messages', { text, userId })
    if (!newMsg) throw Error('something is wrong')
    setMsgs(msgs => ([...msgs, newMsg]))
  }

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id)
      if (!newMsg) throw Error('something is wrong')
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1, newMsg)
      return newMsgs
    })
    doneEditing()
  }

  const onDelete = async id => {
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } })
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1)

      return newMsgs
    })
  }

  const doneEditing = () => setEditingID(null)

  const getMessages = async () => {
    const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs ? msgs[msgs.length - 1].id : '' } })
    if (newMsgs.length === 0) setHasNext(false)
    setMsgs(msgs => {
      if (msgs) {
        return [...msgs, ...newMsgs]
      } else {
        return newMsgs
      }
    })
  }

  useEffect(() => {
    if (intersecting && hasNext) {
      getMessages()
    }
  }, [intersecting])


  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {
          msgs?.map(x => <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={onDelete}
            // props 전달 시 바로 함수 실행
            startEdit={() => setEditingID(x.id)}
            isEditing={editingID === x.id}
            myId={userId}
          />)
        }
      </ul>
      <div ref={fetchMoreEl} style={{ height: "200px" }} />
    </>
  )
}

export default MsgList