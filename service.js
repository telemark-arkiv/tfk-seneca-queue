'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Queue = require('./lib/queue')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_QUEUE_TAG || 'tfk-seneca-queue'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:queue, cmd:add', model: 'consume'},
      {pin: 'role:queue, cmd:next', model: 'consume'},
      {pin: 'role:queue, cmd:delete', model: 'consume'}
    ]
  },
  queue: {
    url: envs.TFK_SENECA_QUEUE_URL || 'https://queue.no'
  },
  isolated: {
    host: envs.TFK_SENECA_QUEUE_HOST || 'localhost',
    port: envs.TFK_SENECA_QUEUE_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_QUEUE_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Queue, options.queue)
