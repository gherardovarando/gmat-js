const Graph  = require("simple.graphs.js");
const gs = require("./gramschmidt.js");
const range = require("./range.js");

/* Partial orthogonalizer based on Gram-Schmidt
 * 
 */
module.exports = function(x, g){ 
    let p =  g.nodes().length;
    let degrees = g.degree();
    let order = range(0,p).sort((i,j) =>{ return (degrees[i]-degrees[j])});
    let n_zeros = 0;
    let zeros = [];
    let oldix = [];
    for (let i = 0; i < p ; i++){
        if (degrees[order[i]] ==  0){ 
            n_zeros = i + 1;
            zeros.push(order[i]);
        }
    }
    if (n_zeros > 0){
        gs(x, zeros, 0);
    }
    //console.log("zeros : " + n_zeros);
    for (let i = n_zeros; i < p ; i++) {
        let ix = zeros.slice();
        let st = n_zeros;
        for (let j = n_zeros; j < i; j++){
            if (!g.hasEdge(order[i], order[j])){
                ix.push(order[j]);
                if (ix[ix.length -1] == oldix[ix.length - 1] ){
                   st = st + 1; 
                }
            }
        }
        ix.push(order[i]); 
        gs(x, ix, st);
        oldix = ix.slice();
        //console.log("gain" + (st-n_zeros));
    }
    return(x)
}

