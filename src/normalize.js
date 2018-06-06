const scalar = require("./scalar.js");
const prod = require("./prod.js");
module.exports = function(o){
    let i = o.i;
    let p=o.p;
    let norm =  Math.sqrt(scalar({
     x: o.x,
     i: o.i,
     p: o.p,
     j: o.i
    }));
    for (let t=0; t < p; t ++){
        o.x[p*i + t] = o.x[p*i + t]/norm;
    }
}
