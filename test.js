const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");


let t = Date.now();
let p  = 3000
let g = Graph.random(p , 0.5);
let M = [];
for (let i=0; i < p; i++){
    M[i]=[];
    for (let j=0; j < p; j++){
        M[i][j] = Math.random();

    }
}
console.log("random matrix generated");

orth(M,g);
t = Date.now() -t 
console.log("elcapsed time : " + t );




console.log("scalar product : " + scalar(M[0],M[1]))

