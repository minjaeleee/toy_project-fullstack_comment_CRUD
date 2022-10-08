import { useState } from "react"
import MsgInput from "./MsgInput"
import MsgItem from "./MsgItem"

const userIds = ['roy', 'jay']
const getRandomUserId = () => userIds[Math.round(Math.random())]

const ogMsgs = Array(50).fill().map((_, i) => ({
  id: i + 1,
  // userId: getRandomUserId(),
  userId: 'philip',
  // timestamp: 1234567890123 + i * 1000 * 60,
  timestamp: '2022-10-4',
  text: `${i + 1} mock text`
}))

// MsgInput => Create
const MsgList = () => {
  const [msgs, setMsgs] = useState(ogMsgs)
  const [editingID, setEditingID] = useState(null)

  const onCreate = text => {
    const newMsg = {
      id: msgs.length,
      // userId: getRandomUserId(),
      userId: 'philip',
      // timestamp: Date.now(),
      timestamp: '2022-10-4',
      text: `${msgs.length} ${text}`
    }
    setMsgs(msgs => ([...msgs, newMsg]))
  }

  const onUpdate = (text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id)
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1, {
        ...msgs[targetIndex],
        text
      })
      return newMsgs
    })
    doneEditing()
  }

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id)
      if (targetIndex < 0) return msgs
      const newMsgs = [...msgs]
      newMsgs.splice(targetIndex, 1)
      return newMsgs
    })
  }

  const doneEditing = () => setEditingID(null)

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {
          msgs.map(x => <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={onDelete}
            // props 전달 시 바로 함수 실행
            startEdit={() => setEditingID(x.id)}
            isEditing={editingID === x.id}
          />)
        }
      </ul>
    </>
  )
}

export default MsgList