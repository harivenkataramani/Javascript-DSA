class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }
  // addVertex("Tokyo")
  // e.g adjacencyList= {"Tokyo":[]}

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  // addEdge("Tokyo","Chennai")
  // e.g adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo"]}

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  // removeEdge("Tokyo","Chennai")
  // before removal --> adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo","Hongkong"],"HongKong":["Chennai"]}
  // e.g adjacencyList= {"Tokyo":[],"Chennai":["Hongkong"],"HongKong":["Chennai"]}

  removeVertex(name) {
    // this will remove all the edge connections
    while (this.adjacencyList[name].length) {
      const adjacencyVal = this.adjacencyList[name].pop();
      this.removeEdge(name, adjacencyVal);
    }
    //this will remove the vertex itself
    delete this.adjacencyList[vertex];
  }
  // removeVertex("Chennai")
  //before removal --> adjacencyList= {"Tokyo":["Chennai"],"Chennai":["Tokyo","Hongkong"],"HongKong":["Chennai"]}
  // afterRemoval --> adjacencyList= {"Tokyo":[],"HongKong":[]}

  //   DFS, BFS Model Graph structure

  //       A
  //     /   \
  //    B     C
  //    |     |
  //    D --- E
  //     \   /
  //       F

  // dfs recursive
  depthFirstRecursive(start) {
    const result = [];
    const isPresent = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      isPresent[vertex] = true;
      result.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!isPresent[adjacencyList[vertex][i]]) dfs(adjacencyList[vertex][i]);
      }
    }
    dfs(start);
    return result;
  }

  //   bfs recursive result = ["A,"B","D","E","C","F"]

  //dfs iterative
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const isPresent = {};
    const adjacencyList = this.adjacencyList;
    let currVertex;
    while (stack.length) {
      // check below console for better understanding
      console.log(stack);
      currVertex = stack.pop();
      isPresent[currVertex] = true;
      result.push(currVertex);

      for (let i = 0; i < adjacencyList[currVertex].length; i++) {
        if (!isPresent[adjacencyList[currVertex][i]]) {
          stack.push(adjacencyList[currVertex][i]);
        }
      }
    }
    return result;
  }
  //   bfs iterative result = ["A","C","E","F","D","B"]

  // my method
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const isPresent = {};
    const adjacencyList = this.adjacencyList;
    let currVertex;

    while (queue.length) {
      // check below console for better understanding
      console.log(queue);
      currVertex = queue.shift();
      isPresent[currVertex] = true;
      result.push(currVertex);

      for (let i = 0; i < adjacencyList[currVertex].length; i++) {
        if (!isPresent[adjacencyList[vertex][i]]) {
          queue.push(adjacencyList[vertex][i]);
        }
      }
    }

    return result;
  }

  // bfs - result = ["A","B","C","D","E","F"]

  // udemyMethod
  breadthFirstUdemy(start) {
    const queue = [start];
    const result = [];
    const isPresent = {};
    const adjacencyList = this.adjacencyList;
    let currVertex;
    isPresent[start] = true;
    while (queue.length) {
      // check below console for better understanding
      console.log(queue);
      currVertex = queue.shift();
      result.push(currVertex);

      adjacencyList.forEach((neighbor) => {
        if (!isPresent[neighbor]) {
          isPresent[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
