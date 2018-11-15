const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


let t = Date.now();
let p = 4
let g = Graph.random(p ,0.5);
let M = new Float64Array( new ArrayBuffer(p*p*8));
//console.log(M.length);
for (let i=0; i < p*p; i++){
        M[i] = Math.random();
    }
console.log("random matrix generated");

orth({
 x : M,
 g: g
});
t = Date.now() -t
console.log("elcapsed time : " + t );

for (let i = 0; i < p; i++) {
  console.log("row " + i );
  for (let j = 0; j < p; j++) {
    console.log(scalar({
     x: M,
     p: p,
     i: i,
     j: j
   }));
  }
}

console.log(g)

const {al} = require("./gmat.js");
const pp = 10;
const x = new Float64Array( new ArrayBuffer(pp*pp*8)); //matrix p x p in array
for (let i=0; i < pp*pp; i++){
        x[i] = Math.random();
    }

al.normalize_r({
  x: x, //pass the array as reference
  p: pp, //pass the dimension
  i: 1  //pass the row index
});

console.log(' squared norm of normalized vector ' +  (al.scalar_r({
    x: x,
    p: pp,
    i: 1,
    j: 1
  }) ) );
