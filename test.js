const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


let p = 100
console.log("dimension =  "+ p);
let t = Date.now();
let g = Graph.random(p,0.5);
console.log("random graph generated in "+ (Date.now() - t)+ " ms");
let M = [];
for (let i=0; i < p; i++){
    M[i]=[];
    for (let j=0; j < p; j++){
        M[i][j] = Math.random();
    }
}
console.log("random matrix generated (elapsed time: "+ 
    (Date.now() - t)+ " ms)");
console.log("now performing orthogonalizations...");
//console.log(M);
M = orth(M,g);
t = Date.now() -t 
console.log("elcapsed time : " + t );
//console.log(M)



console.log("scalar product : " + scalar(M[0],M[1]))

