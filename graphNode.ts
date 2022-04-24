export class GraphNode {
    x: number
    y: number
    type: number
    pos: {
      x: number
      y: number
    }
    f: number
    g: number
    h: number
    visited: boolean
    closed: boolean
    parent: GraphNode | null
    debug: string

    constructor (x: number, y: number) {
      this.x = x
      this.y = y
      this.pos = {x:x, y:y}
      this.f = 0;
      this.g = 0;
      this.h = 0;
      this.visited = false;
      this.closed = false;
      this.parent = null;
    }
}