const scalar = require("./scalar.js")
const prod = require("./prod.js") 
module.exports = function(u,v){
 return prod(v , scalar(u,v));   
}
