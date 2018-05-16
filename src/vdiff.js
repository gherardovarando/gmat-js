module.exports = function(u,v) {
    return u.map( (x,i) => {
      return (x - v[i])
    })

}
