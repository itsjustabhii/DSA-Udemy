/*-------Dijkstra's Algorithm---------- */

//Finds the shortest path between two vertices on a grapgh

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {  //Just added weight to the vertices
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []  //to return at end
        let smallest

        //Build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        //As long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val
            if(smallest === finish) {
                //We are done and build path to return
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity) {
                for( let neighbour in this.adjacencyList[smallest]) {
                    //Find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    console.log(nextNode);
                    //Calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbour = nextNode.node
                    if(candidate < distances[nextNeighbour]) {
                        //Updating new smallest distance to neighbour
                        distances[nextNeighbour] = candidate
                        //Updating previous - How we got to neighbour
                        previous[nextNeighbour] = smallest
                        //Enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbour, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()

    }

}

var graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

console.log(graph.addEdge("A", "B", 4))
console.log(graph.addEdge("A", "C", 2))
console.log(graph.addEdge("B", "E", 3))
console.log(graph.addEdge("C", "D", 2))
console.log(graph.addEdge("C", "F", 4))
console.log(graph.addEdge("D", "E", 3))
console.log(graph.addEdge("D", "F", 1))
console.log(graph.addEdge("E", "F", 1))

graph.Dijkstra("A", "E")




















