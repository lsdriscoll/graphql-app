import {createLogger, stdSerializers} from 'bunyan'
import {default as startServer} from './lib/server'

const log = createLogger({
  name: 'Le App',
  serializers: {
    err: stdSerializers.err
  }
})

startServer(() => {
  log.info(`WE ARE RUN`)
})
