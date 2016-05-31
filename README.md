# tfk-seneca-queue
Our queue service

```curl -d '{"role": "queue", "cmd":"add", "data":{"digg`":"datatest"}}' -v http://localhost:8000/act```

```curl -d '{"role": "queue", "cmd":"next"}' -v http://localhost:8000/act```

```curl -d '{"role": "queue", "cmd":"delete", "queueId":"1234"}' -v http://localhost:8000/act```