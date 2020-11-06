import Vertice from "./Vertice.js"
import Edge from './Edge.js'

export default class Graph {
    vertice;
    edges;
    constructor() {
        this.vertice = [];
        this.edges = [];
    }

    addVertice(vertice) {
        if (vertice instanceof Vertice) {
            this.vertice.push(vertice)
        }
    }
    addEgde(edge) {
        if (edge instanceof Edge) {
            this.edges.push(edge)
        }
    }

    info() {
        console.log("Vertice: ", this.vertice)
        console.log("Edges: ", this.edges)
    }

    findNearesVertices(verticeName) {
        let foundEdges = this.edges.filter(function (edge) {
            return (edge.a.data = verticeName) || (edge.b.data == verticeName)
        })

        let foundVertices = [];
        foundEdges.forEach(function (edge) {
            if (edge.a.data = verticeName) {
                foundVertices.push(edge.a)
            } else if (edge.b.data = verticeName) {
                    foundVertices.push(edge.b)
                }
        })
        return foundVertices;
    }

}
