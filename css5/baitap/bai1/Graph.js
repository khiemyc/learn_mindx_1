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
        // console.log("truoc", this.vertice)

        let foundEdges = this.edges.filter(function (edge) {
            return edge.a.phoneNumber == verticeName  || edge.b.phoneNumber == verticeName
        })

        // console.log("sau", this.vertice)    
        let foundVertices = [];

        foundEdges.forEach(function (edge) {
            if (edge.a.phoneNumber == verticeName) {
                foundVertices.push(edge.b)
            } else if (edge.b.phoneNumber == verticeName) {
                    foundVertices.push(edge.a)
                }
        })
        // return foundEdges;
        return foundVertices;
    }

}
