import * as express from 'express'

const app = express()

const logger = () => {
  return (req: express.Request, res: express.Request, next: express.NextFunction) => {
    const now = new Date()
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    console.log(`${now} - ${ip}, ${req.originalUrl}`)
    next()
  }
}

app.use(logger())

app.get('/ping', (req: express.Request, res: express.Request) => {
  res.status(200).send('pong')
})

app.listen(8080, () => {
  console.log('Service running')
})

