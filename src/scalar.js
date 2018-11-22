const sum = require("./sum.js")

module.exports = function(o){
    const i = o.i;
    const j=o.j;
    const p=o.p;
    let res = 0;
    for (let t = 0; t < p ; t++){
      res = res + o.x[p*i + t]*o.x[p*j + t];
    }
    return res;
}
