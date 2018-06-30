// async/await 测试

async function fn(params) {
  return 1
}

function fn2() {
  return new Promise(resolve => resolve(1))
}
console.log(fn() instanceof Promise)
console.log(fn2() instanceof Promise)

function fn3() {
  return [1, 2, 3].map(async item => item * item)
}

async function fn4() {
  let p = await Promise.all(fn3())
  console.log(p)
  return p
}
fn4()

async function fn5() {
  // console.log([1, 2, 3].reduce(async (total, item) => total + item, 0))
  let res = await [1, 2, 3].reduce(async (total, item) => await total + item, 0)
  console.log(res)
}
// fn4().then(result => console.log(result))
// console.log(fn4())

fn5();

// [1, 2, 3].forEach(function (item) { console.log(item) })
[1, 2, 3].forEach(async (item) => console.log(item * 2))