module.exports = function(from, to){
 return ([...Array(to).keys()]).splice(from,to);
}
