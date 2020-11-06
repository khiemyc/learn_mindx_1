import Graph from "./Graph.js"
import Vertice from "./Vertice.js"
import Edge from "./Edge.js"

let A = new Vertice("nameA",1)
let B = new Vertice("nameB",2)
let C = new Vertice("nameC",3)
let D = new Vertice("nameD",4)
let E = new Vertice("nameE",5)

let AB = new Edge(A,B)
let AC = new Edge(A,C)
let AE = new Edge(A,E)
let BD = new Edge(B,D)

let graph = new Graph()

graph.addVertice(A);
graph.addVertice(B);
graph.addVertice(C);
graph.addVertice(D);
graph.addVertice(E);

graph.addEgde(AB)
graph.addEgde(AC)
graph.addEgde(AE)
graph.addEgde(BD)


graph.info()



console.log(graph.findNearesVertices(3))
