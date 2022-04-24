import { GraphNode } from "./graphNode";

type NodePosition = { 
    x: number
    y: number 
}

export const neighbors = (graph: GraphNode[][], node: GraphNode): Array<GraphNode> => {
    const ret: Array<GraphNode> = [];
    const x = node.x;
    const y = node.y;

    if(graph[x-1] && graph[x-1][y]) {
        ret.push(graph[x-1][y]);
    }
    if(graph[x+1] && graph[x+1][y]) {
        ret.push(graph[x+1][y]);
    }
    if(graph[x][y-1] && graph[x][y-1]) {
        ret.push(graph[x][y-1]);
    }
    if(graph[x][y+1] && graph[x][y+1]) {
        ret.push(graph[x][y+1]);
    }
    return ret;
}

export const heuristic = (neighbor: NodePosition, end: NodePosition) => {
    const d1 = Math.abs (end.x - neighbor.x);
    const d2 = Math.abs (end.y - neighbor.y);
    return d1 + d2;
} 