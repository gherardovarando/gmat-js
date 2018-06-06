const scalar = require("./scalar.js");
const normalize = require("./normalize.js");
module.exports = function(o){
    let temp = 0;
    if (!o.x.length || !o.ix.length || o.ix.length < 2 || o.x.length < 2 ){
        return  
    }
    if (!o.k){
        o.k = 0;
    }
    let p = o.p;
    for (let i = o.k; i < o.ix.length ; i++) {
        for (let j = 0; j < i; j++) {
            temp = scalar({
                x: o.x,
                i: o.ix[i],
                j: o.ix[j],
                p: p
            });
            for (let t = 0; t<p ; t++){
                o.x[p*o.ix[i]+t] = o.x[p*o.ix[i]+t] - temp * o.x[p*o.ix[j]+t];
            }
        }
        normalize({
            x : o.x,
            p : o.p,
            i : o.ix[i]
        });
    }
}
