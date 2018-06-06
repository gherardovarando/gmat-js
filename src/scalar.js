const sum = require("./sum.js")

module.exports = function(o){
    let i = o.i;
    let j=o.j;
    let p=o.p;
    let res = 0;
    for (let t = 0; t < p ; t++){
      res = res + o.x[p*i + t]*o.x[p*j + t];
    }
    return res;
}
