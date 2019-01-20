/**
 * koa2 中间件实现原理简易版
 * @param {*} middleware 
 */
function compose (middleware = []) {
  return function (ctx, next) {
    let index = -1
    function dispatch (i) {
      index = i
      const fn = i === middleware.length ? next : middleware[i]
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
      } catch (error) {
        Promise.reject(error)
      }
    }
    return dispatch(0)
  }
}

module.exports = compose