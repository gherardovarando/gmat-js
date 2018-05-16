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
