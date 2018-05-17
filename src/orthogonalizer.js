const Graph  = require("simple.graphs.js")
const gs = require("./gramschmidt.js")


/* Partial orthogonalizer based on Gram-Schmidt
 * 
 */
module.exports = function(x, g){
    let  p =  g.nodes().length;
    let degrees = g.degreeList();
    let order = degrees.sort((a,b) =>{ return (a.degree-b.degree)});
    let n_zeros = 0;
    for (let i = 0; i < p ; i++){
        if (order[i].degree ==  0)  n_zeros = i + 1;
    }
    if (n_zeros > 0){
       gs(x,0,n_zeros + 1);
    }
    console.log("a");
    for (let i=n_zeros + 1; i < p ; i++) {
        let temp = x.slice(0,n_zeros); //shallow copy
        for (let j = n_zeros; j < i; j++){
            if (!g.hasEdge(i,j)){
                temp.push(x[j].slice(0,x[j].length)) // real copy 
            }
        }
        temp.push(x[i]); //shallow copy
        gs(temp, n_zeros);
    }
    return(x)
}

