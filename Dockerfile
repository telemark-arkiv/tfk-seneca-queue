###########################################################
#
# Dockerfile for tfk-seneca-queue
#
###########################################################

# Setting the base to nodejs 4.6.0
FROM mhart/alpine-node:4.6.0

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SENECA_QUEUE_TAG tfk-seneca-queue
ENV TFK_SENECA_QUEUE_URL https://queue.no
ENV TFK_SENECA_QUEUE_HOST localhost
ENV TFK_SENECA_QUEUE_PORT 8000
ENV TFK_SENECA_QUEUE_MONGODB_URI mongodb://localhost/queue

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]