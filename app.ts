import { Graph } from "./graph";

const graph = new Graph(5)
const nodes = graph.nodes

const start = nodes[0][0]
const end = nodes[3][3]
const res = graph.aStarSearch(start, end)

for(let node of res) {
    console.log(node.debug)
}