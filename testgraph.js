const Graph = require("./src/graph.js")
let g = new Graph(["a","b","c","d"])

console.log("empty graph with 4 nodes ")
console.log("Nodes: "+g.nodes())


console.log("add node f")
g.addNode("f")

console.log(g.nodes())

console.log("add edgei a-b")

g.addEdge("a", "b")

console.log(g.graph)


console.log("add edge f-a")

g.addEdge("f", "a")


console.log(g.graph)

console.log(g.degree())
console.log("random graph 8 variables, d= 0.5: ")
console.log(Graph.random(8,0.5))
console.log("start generating full graph 2000 nodes")
let t = Date.now()
Graph.random(2000,1)
t = Date.now() -t 
console.log("finish in: "+ t+ " ms "  )
console.log("start generating full graph 3000 nodes")
t = Date.now()
Graph.random(3000,1)
t = Date.now() -t 
console.log("finish in: "+ t +" ms " )
