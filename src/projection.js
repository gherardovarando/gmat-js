const scalar = require("./scalar.js")
const prod = require("./prod.js") 
module.exports = function(t, i, j){
 return prod(t, i, scalar(t,i,j));   
}
