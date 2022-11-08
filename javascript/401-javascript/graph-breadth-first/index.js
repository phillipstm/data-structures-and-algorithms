'use strict';

class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(newEdge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    return this.adjacencyList.keys;
  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
  }


  while(queue.length) {
    current = queue.pop();

    ////do something with callback if needed
    if (callback) callback(current.value);

    ///get the neighbors
    const neighbors = this.getNeighbors(current);
    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)) {
        visited.add(edge.vertex);
        queue.unshift(edge.vertex);
      }
    }
  }

  ///What do you want to return?..choosing entire set
  return visited;
}


const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(D, F);


graph.breadthFirst(A, console.log);
console.log('In the name of Jesus');
graph.depthFirst(A, console.log);

