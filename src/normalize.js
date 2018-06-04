module.exports = function(t, i){
    let norm = t.x[t.ix[i]].reduce((a, v) => a + v*v, 0);
    t.x[t.ix[i]].map((v, j) =>  {
        t.x[t.ix[i]][j]= v/ Math.sqrt(norm); 
    }
    )
}
