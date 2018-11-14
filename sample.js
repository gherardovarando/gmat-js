#!/usr/bin/env node
const args = process.argv.slice(2);
const orth = require("./src/orthogonalizer.js");
const fs = require("fs")
const Graph = require("simple.graphs.js");
const scalar = require("./src/scalar.js");


p = args[0]
d = args[1]
file = args[2]

const M = new Float64Array(new ArrayBuffer(p * p * 8));

for (let i = 0; i < p * p; i++) {
  M[i] = Math.random();
}
const g = Graph.random(p, d);
orth({
  x: M,
  g: g
});
for (let i = 0; i < p; i++) {
  for (let j = 0; j < p; j++) {
    console.log(scalar({
     x: M,
     p: p,
     i: i,
     j: j
   }));
  }
}
