# tfk-seneca-queue

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-seneca-queue.svg)](https://greenkeeper.io/)

Our queue service

## Messages handled
### ```role: queue, cmd: add```
Adds data to the queue
```javascript
Seneca.act('role: queue, cmd: add', {key: 'test', value: 2}, (error, data) => {})
```

### ```role: queue, cmd: next```
Get next data in queue
```javascript
Seneca.act('role: queue, cmd: next', (error, data) => {})
```

### ```role: queue, cmd: delete```
Deletes data from queue
```javascript
Seneca.act('role: queue, cmd: delete', {queueId: '1234'}, (error, data) => {})
```

## Messages emitted
### ```role: info, info: queue, msg: add```
Message emitted on data added to queue.
Contains the document added in ```data```

### ```role: info, info: queue, msg: delete```
Message emitted on data deleted from queue.
Contains the document deleted in ```data```


```curl -d '{"role": "queue", "cmd":"add", "data":{"digg`":"datatest"}}' -v http://localhost:8000/act```

```curl -d '{"role": "queue", "cmd":"next"}' -v http://localhost:8000/act```

```curl -d '{"role": "queue", "cmd":"delete", "queueId":"1234"}' -v http://localhost:8000/act```