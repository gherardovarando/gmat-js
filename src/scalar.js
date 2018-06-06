const sum = require("./sum.js")
const prod = require("./prod.js")

module.exports = function(u,v){
    return sum( u.map((x,i) => {
        return x*v[i]
    }));
}
