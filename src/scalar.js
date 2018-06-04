const sum = require("./sum.js")
const prod = require("./prod.js")

module.exports = function(t, i, j){
 return sum( t.x[t.ix[i]].map((v, h)=> { return v * t.x[t.ix[j]][h] }))
}
