class MaxBinaryHeap {
    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.bubbleUp()
    }

    bubleeUp(){
        let elemntIdx = this.heap.length - 1
        let element = this.heap[elemntIdx]
        while(elemntIdx>0){
            let parentIdx = Math.floor((elementIdx-1)/2)
            let parent = this.heap[parentIdx]
            if(element <=parent) break
            this.heap[elemntIdx] = parent
            this.heap[parentIdx] = element
            elemntIdx = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap()
// heap.insert(55)

//extractMax has to to be done -->