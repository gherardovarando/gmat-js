module.exports = function(x){
    let norm = x.reduce((a, v) => a + v*v, 0);
    return x.map((v) =>  {
        return v/ Math.sqrt(norm); 
    }
    );
}
