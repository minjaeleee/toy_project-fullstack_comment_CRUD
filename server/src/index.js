import express from 'express'
import cors from 'cors'
import messagesRoute from './db/routes/messages.js'
import usersRoute from './db/routes/users.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

/**
 app[method](route, callback)

  ex.)
  app.get('/', (req, res) => {
    res.send('ok')
  })
*/

const routes = [...messagesRoute, ...usersRoute]

routes.forEach(({ method, route, handler }) => {
  app[method](route, handler)
})

app.listen(8000, () => {
  console.log('server listening on 8000...')
})