import { GraphNode } from "./graphNode";
import { heuristic, neighbors } from "./helpers";

export class Graph {
    nodes: GraphNode[][]

    constructor(length: number) {
        this.init(length)
    }
    init(length: number) {
        const grid: number[][] = new Array(length)
                                        .fill(1)
                                        .map(() => new Array(length).fill(1));
        this.setNodes(grid)
    }
    setNodes (grid: number[][]): void { 
        let row: number[], rowLength: number;
        const len: number = grid.length
      
        this.nodes = new Array(len).fill(false).map(() => new Array(len))
        
        for(let x = 0; x < len; ++x) {
          row = grid[x];
          rowLength = row.length;
          for(let y = 0; y < rowLength; ++y) {
            this.nodes[x][y] = new GraphNode(x, y);
          }
        }
    }
    aStarSearch (start: GraphNode, end: GraphNode): Array<GraphNode>  {
  
        const openList: Array<GraphNode> = [start]
        
        while(openList.length > 0) {

          let lowFScoreIndex: number = 0
          for(let i = 0; i < openList.length; i++) {
            if(openList[i].f < openList[lowFScoreIndex].f) {
              lowFScoreIndex = i
            }
          }
          
          const currentNode: GraphNode = openList[lowFScoreIndex]
          if(currentNode == end) { 
            console.log('success!')
            let curr = currentNode;
            const ret: Array<GraphNode> = [];
            while(curr.parent) {
              ret.push(curr);
              curr = curr.parent;
            }
            return ret.reverse();
          }
          
          openList.splice(lowFScoreIndex, 1)
          currentNode.closed = true;
          
          const neighborsList: GraphNode[] = neighbors(this.nodes, currentNode)
          
          for(let neighbor of neighborsList){
            
            if(neighbor.closed) continue
            
             let gScore: number = currentNode.g + 1;
             let gScoreIsBest: boolean = false;
            
            if(!neighbor.visited) {
                gScoreIsBest = true;
                neighbor.h = heuristic(neighbor.pos, end.pos);
                neighbor.visited = true;
                openList.push(neighbor);
            }
            else if(gScore < neighbor.g) {
                gScoreIsBest = true;
            }
            
      
            if(gScoreIsBest) {
                neighbor.parent = currentNode;
                neighbor.g = gScore;
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.debug = `POS: { x: ${neighbor.x} y: ${neighbor.y} } F: ${neighbor.f} G: ${neighbor.g} H: ${neighbor.h}`;
            }
            
          }
        }
      }
}