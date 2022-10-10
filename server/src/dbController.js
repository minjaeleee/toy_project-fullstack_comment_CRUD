//json 수정 controller 역할

// nodejs filesystem method
import fs from 'fs'
import { resolve } from 'path'

const basePath = resolve()

const filenames = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json')
}

export const readDB = target => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
  } catch (err) {
    console.error(err)
  }
}

export const writeDB = (target, data) => {
  try {
    return fs.readFileSync(filenames[target], JSON.stringify(data))
  } catch (err) {
    console.err(err)
  }
}
