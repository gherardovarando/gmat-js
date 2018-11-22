const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


let t = Date.now();
let p = 10
let g = Graph.random(p, 0.5);
let M = new Float64Array(new ArrayBuffer(p * p * 8));
//console.log(M.length);
for (let i = 0; i < p * p; i++) {
  M[i] = Math.random();
}
console.log("random matrix generated");

orth({
  x: M,
  g: g
});
t = Date.now() - t
console.log("elcapsed time : " + t);
let str;
for (let i = 0; i < p; i++) {
  console.log("row " + i);
  for (let j = 0; j < p; j++) {
    if (g.hasEdge(i, j)) str = "edg "
    else str = ""
    console.log(str + scalar({
      x: M,
      p: p,
      i: i,
      j: j
    }));
  }
}

console.log(g)
