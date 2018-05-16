const {degree} = require("./graph.js")
const gs = require("./gramschmidt.js")



module.exports = function(x, edges){
       p =  adj.length
       degrees <- degree(adj)
       order <- degrees.sort((a,b) => return a-b)
       n_zeros <- length(degrees[degrees == 0])
      
        if (n_zeros > 1){
          mort[order[1:n_zeros],] <- gs(mort[order[1:n_zeros]])
        }

	for (i in (n_zeros+1):p) {

		row_iort <- which(madj[order[i], ] == FALSE)
		row_iort <- row_iort[ row_iort %in% order[1:(i-1)]]
		row_nort <- length(row_iort)

		if (row_nort > 0) {
			row_ort_base <- .gram_schmidt(mort[row_iort, ],k=
                        max(n_zeros-1,1))
			if (row_nort == 1) {
				mort[i, ] <- mort[i, ] - .proj(mort[i, ], row_ort_base)
			} else {
				for (j in 1:row_nort) {
					mort[i, ] <- mort[i, ] - .proj(mort[i, ], row_ort_base[j, ])
				}
			}
		}
	}

	return (mort)
}
}
