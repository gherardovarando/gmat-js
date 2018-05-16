const proj = require("./src/projection.js")
const prod = require("./src/prod.js") 
const gs = require("./src/gramschmidt.js")
const a = [1,2,3]

const b = [4,6,4]

const c = [5,3,2]

console.log("a : "+ a)
console.log("b : "+ b)
console.log("c : "+ c)

console.log("a*2 : " + prod(a,-2))

console.log("a * b : " + prod(a,b))

console.log("projection a into c : " + proj(a,c))

console.log("-----------------")

const span = [a,b,c]

console.log("gram-schmidt of [a,b,c] : " + gs(span).map((v) =>{ return "\n" + v} ))


