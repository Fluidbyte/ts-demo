/**
 * Example of an interface creating a reusable custom type
 */

interface LogData {
  timestamp: Date,
  message: string
}

const log = (data: LogData): void => {
  console.log(`${data.timestamp}: ${data.message}`)
}

log({
  timestamp: (new Date()),
  message: 'something happened'
})