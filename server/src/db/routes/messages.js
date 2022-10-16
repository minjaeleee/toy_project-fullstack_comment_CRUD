import { v4 } from "uuid"
import { readDB, writeDB } from "../../dbController.js"

// @req, res 객체 참고 https://luckyyowu.tistory.com/346

const messagesRoute = [
  {
    //GET messages
    method: 'get',
    route: '/messages',
    handler: (req, res) => {
      const msgs = readDB('messages')
      res.send(msgs)
    }
  },
  { // GET messages
    method: 'get',
    route: '/messages/:id',
    handler: (({ params: { id }, res }) => {
      try {
        const msgs = readDB('messages')
        const msg = msgs.find(m => m.id === id)
        if (!msg) throw Error('not found')
        res.send(msg)
      } catch (err) {
        res.status(404).send({ error: err })
      }
    })

  },
  {
    //CREATE messages
    method: 'post',
    route: '/messages',
    handler: ({ body }, res) => {
      const msgs = readDB('messages')
      const newMsg = {
        id: v4(),
        text: body.text,
        userId: body.userId,
        timestamp: Date.now()
      }
      msgs.reverse().push(newMsg)
      writeDB('messages', msgs)
      res.send(newMsg)
    }
  },
  {
    //UPDATE message
    method: 'put',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = readDB('messages')
        const targetIndex = msgs.findIndex(msg => msg.id === id)
        if (targetIndex < 0) throw 'no Messages';
        if (msgs[targetIndex].userId !== body.userId) throw 'no Users'
        const newMsgs = { ...msgs[targetIndex], text: body.text }
        msgs.splice(targetIndex, 1, newMsgs)
        writeDB('messages', msgs)
        res.send(newMsgs)
      } catch (err) {
        res.status(500).send({ error: err })
      }
    }
  },
  {
    //DELETE messages
    method: 'delete',
    route: '/messages/:id',
    handler: ({
      body,
      params: { id },
      // client req: params = server req: query
      query: { userId }
    }, res) => {
      try {
        const msgs = readDB('messages')
        const targetIndex = msgs.findIndex(msg => msg.id === id)
        if (targetIndex < 0) throw 'no Messages';
        if (msgs[targetIndex].userId !== userId) throw 'no Users'
        msgs.splice(targetIndex, 1)
        writeDB('messages', msgs)
        res.send(id)
      } catch (err) {
        res.status(500).send({ error: err })
      }

    }
  },
]

export default messagesRoute