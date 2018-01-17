/**
 * Example demonstrating argument types as well as a function
 * return type
 */

const add = (a: number, b: number): number => {
  return a + b
}

console.log('Add', add(1,1))

const addArray = (a: Array<number>): number => {
  return a.reduce((acc, n) => acc + n, 0)
}

console.log('AddArray', addArray([ 1, 2, 3 ]))