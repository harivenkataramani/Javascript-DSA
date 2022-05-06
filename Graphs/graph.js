class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(name){
        if(!this.adjacencyList[name]) this.adjacencyList[name] = []
    }
    // addVertex("Tokyo")
    // e.g adjacencyList= {"Tokyo":[]}

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)        
        this.adjacencyList[vertex2].push(vertex1)
    }
    // addEdge("Tokyo","Chennai")
    // e.g adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo"]}

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=>v!==vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v!==vertex1)
    }
    // removeEdge("Tokyo","Chennai")
    // before removal --> adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo","Hongkong"],"HongKong":["Chennai"]}
    // e.g adjacencyList= {"Tokyo":[],"Chennai":["Hongkong"],"HongKong":["Chennai"]}

    removeVertex(name){
        // this will remove all the edge connections
        while(this.adjacencyList[name].length){
            const adjacencyVal = this.adjacencyList[name].pop()
            this.removeEdge(name,adjacencyVal)
        }
        //this will remove the vertex itself
        delete this.adjacencyList[vertex]
    }
    // removeVertex("Chennai")
    //before removal --> adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo","Hongkong"],"HongKong":["Chennai"]}
    // afterRemoval --> adjacencyList= {"Tokyo":[],"HongKong":[]}
}