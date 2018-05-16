const proj = require("./projection.js")
const vdiff = require("./vdiff.js")
module.exports = function(x, k){
    if (k == undefined){ 
        k = 1
    }
    if (k < 1){ 
        k = 1
    }
    if (!x.length || x.length < 2 ){
        return x 
    }
    for (i = k; i < x.length ; i++) {
        for (j = 0; j < i; j++) {
            x[i] = vdiff( x[i],  proj(x[i], x[j]))
        }
    }

    return x

}
