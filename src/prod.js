module.exports = function(t, i, a) {
  return t.x[t.ix[i]].map((x) => {
   return x * a
  })
}
