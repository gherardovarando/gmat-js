module.exports = function(u,v) {
  if (!u.length) u = [u] 
  if (!v.length){
   v = Array(u.length).fill(v) 
  }
  return u.map((x,i) => {
   return x * v[i] 
  })
}
