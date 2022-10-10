import { readDB } from "../../dbController.js"

const usersRoute = [
  {
    method: 'get',
    route: '/users',
    handler: (req, res) => {
      const users = readDB('users')
      res.send(users)
    }
  },
  {
    method: 'get',
    route: '/users/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const users = readDB('users')
        const user = users[id]
        if (!user) throw Error('no Users')
        res.send(user)
      } catch (err) {
        res.status(500).send({ error: err })
      }
    }
  }
]

export default usersRoute