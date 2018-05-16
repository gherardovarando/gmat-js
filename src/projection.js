const scalar = require("./scalar.js")
const prod = require("./prod.js") 
module.exports = function(u,v){
 return prod(prod(v , scalar(u,v)) , 1 / scalar(v , v))   
}
