interface Numbers {
  a: number,
  b: string
}

const add = (opts: Numbers): number => {
  return opts.a + opts.b
}

console.log(add({ a: 2, b: 4 }))