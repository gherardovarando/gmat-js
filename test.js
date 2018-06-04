const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


let t = Date.now();
let p = 100 
let g = Graph.random(p ,0.05);
let M = [];
for (let i=0; i < p; i++){
    M[i]=[];
    for (let j=0; j < p; j++){
        M[i][j] = Math.random();

    }
}
console.log("random matrix generated");
//console.log(M);
debugger;
M = orth(M,g);
t = Date.now() -t 
console.log("elcapsed time : " + t );
//console.log(M)



console.log("scalar product : " + scalar(M[0],M[1]))

