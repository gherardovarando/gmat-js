const proj = require("./projection.js");
const vdiff = require("./vdiff.js");
const scalar = require("./scalar.js");
const normalize = require("./normalize.js");
let temp = 0;
module.exports = function(t, k){
    if (!t.x.length || !t.ix.length || t.ix.length < 2 || t.x.length < 2 ){
        return  
    }
    if (!k){
        k = 0
    }
    for (let i = k; i < t.ix.length ; i++) {
        for (let j = 0; j < i; j++) {
            t.x[t.ix[i]] = vdiff(t.x[t.ix[i]], proj(t, i, j));
        }
         normalize(t, i);
    }
}
