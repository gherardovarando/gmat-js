const Graph  = require("simple.graphs.js");
const gs = require("./gramschmidt.js");
const range = require("./range.js");

/* Partial orthogonalizer based on Gram-Schmidt
 * 
 */
module.exports = function(x, g){
    let  p =  g.nodes().length;
   // let degrees = g.degree();
   // let order = range(0,p).sort((i,j) =>{ return (degrees[i]-degrees[j])});
   // let n_zeros = 0;
   // let zeros = [];
    let out=[];
   // for (let i = 0; i < p ; i++){
   //     if (degrees[order[i]] ==  0){ 
   //         n_zeros = i + 1;
   //         zeros.push(x[order[i]]);
   //     }
   // }
   // if (n_zeros > 0){
    //   gs(zeros, 0);
    //   for (let i=0; i<n_zeros;i++){
    //       out[order[i]] = zeros[i];
    //   }
   // }
    out.push(x[1].slice(0,x[1].length));
    for (let i=1; i < p ; i++) {
        let temp = []; 
        for (let j = 0; j < i; j++){
            if (!g.hasEdge(i, j)){
                temp.push(out[j].slice(0,out[j].length));   
            }
        }
        temp.push(x[i]); //shallow copy
        out[i]=gs(temp)[temp.length - 1];
    }
    return(out)
}

