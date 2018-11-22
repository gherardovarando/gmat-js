const Graph  = require("simple.graphs.js");
const gs = require("./gramschmidt.js");
const range = require("./range.js");

/* Partial orthogonalizer based on Gram-Schmidt
 *
 */
module.exports = function(o){
    const p =  o.g.nodes().length;
    const degrees = o.g.degree();
    var order = range(0,p).sort((i,j) =>{ return (degrees[i]-degrees[j])});
    let n_zeros = 0;
    let zeros = [];
    let oldix = [];
    for (let i = 0; i < p ; i++){
        if (degrees[order[i]] ==  0){
            n_zeros = i + 1;
            zeros.push(order[i]);
        }
    }
    if (n_zeros > 0){ // orthogonalize the block of disconnected nodes
        gs({
            x: o.x,
            p: p,
            ix: zeros,
            k: 0
        });
    }
    const tmp = o.x.map( (xx) =>{ return xx }); // clone x
    //console.log("zeros : " + n_zeros);
    for (let i = n_zeros; i < p ; i++) {
        let ix = zeros.slice();
        let st = n_zeros;
        let done = false;
        for (let j = n_zeros; j < i; j++){
            if (!o.g.hasEdge(order[i], order[j])){
                ix.push(order[j]);
                if (ix[ix.length -1] == oldix[ix.length - 1] && !done ){
                    st = st + 1;
                }else{
                  done = true;
                  for (let t = 0; t < p; t++) {
                    tmp[p * order[j] + t] = o.x[p * order[j] + t];
                  }
                }
            }
        }
        ix.push(order[i]);
        gs({
            x: tmp,
            p: p,
            ix: ix,
            k: st
        });
        oldix = ix.slice();
        for (let t = 0; t < p; t++) {
          o.x[p * order[i] + t] = tmp[p * order[i] + t];
        }
        //console.log("gain" + (st-n_zeros));
        //console.log(i);
    }
}
