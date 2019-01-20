const compose = require('./index')

function sleep (duration) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), duration)
  })
}

const middleware = []

middleware.push(
  async function (ctx, next) {
    const startTime = new Date().getTime()
    console.log(`startTime: ${startTime}`)
    await next()
    const endTime = new Date().getTime()
    console.log(`used time duration: ${endTime - startTime}`)
    return ctx
  }
)

middleware.push(
  async function (ctx, next) {
    console.log(`second middleware start`)
    await next()
    console.log(`second middleware end`)
  }
)

middleware.push(
  async function (ctx, next) {
    console.log(`third middleware start`)
    await sleep(2000)
    // await next()
    console.log(`third middleware end`)
  }
)

const run = compose(middleware)

run()
