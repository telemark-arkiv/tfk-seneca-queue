'use strict'

const envs = process.env
const addDocument = require('./add-document')
const getNextDocument = require('./get-next-document')
const deleteDocument = require('./delete-document')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:queue, cmd:add', addDocument)
  seneca.add('role:queue, cmd:next', getNextDocument)
  seneca.add('role:queue, cmd:delete', deleteDocument)

  return {
    name: envs.TFK_SENECA_QUEUE_TAG || 'tfk-seneca-queue'
  }
}
