const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


let t = Date.now();
let p = 200 
let g = Graph.random(p ,0.05);
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

console.log(scalar({
 x: M,
 p: p,
 i: 0, 
 j:1
}));



