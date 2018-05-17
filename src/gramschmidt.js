const proj = require("./projection.js")
const vdiff = require("./vdiff.js")
module.exports = function(x, k, n){
    if (k == undefined){ 
        k = 1;
    }
    if (k < 1){ 
        k = 1;
    }
    if (!x.length || x.length < 2 ){
        return x 
    }
    if (n == undefined){
        n = x.length;
    }
    if (n > x.length){
        n = x.length;
    }
    for (i = k; i < n ; i++) {
        for (j = 0; j < i; j++) {
            x[i] = vdiff( x[i],  proj(x[i], x[j]))
        }
    }

    return x

}
