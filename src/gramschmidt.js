const proj = require("./projection.js");
const vdiff = require("./vdiff.js");
const scalar = require("./scalar.js");
const normalize = require("./normalize.js");
let temp = 0;
module.exports = function(x, ix, k){
    if (!x.length || !ix.length || ix.length < 2 || x.length < 2 ){
        return x 
    }
    if (!k){
        k = 0
    }
    for (let i = k; i < ix.length ; i++) {
        for (let j = 0; j < i; j++) {
            x[ix[i]] = vdiff(x[ix[i]], proj(x[ix[i]], x[ix[j]]));
        }
        x[ix[i]] = normalize(x[ix[i]]);
    }
    return x;
}
