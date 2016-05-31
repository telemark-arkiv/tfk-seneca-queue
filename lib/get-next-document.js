'use strict'

const mongojs = require('mongojs')
const envs = process.env
const dbQueue = mongojs(envs.TFK_SENECA_QUEUE_MONGODB_URI || 'localhost/queue')
const queue = dbQueue.collection('queue')

module.exports = function getNextDocument (args, callback) {
  const seneca = this

  queue.find({}).sort({timeStamp: 1}).limit(1, function (error, document) {
    if (error) {
      callback(error, null)
    } else {
      seneca.act({role: 'info', cmd: 'queue', msg: 'next', data: document})
      callback(null, document)
    }
  })
}
