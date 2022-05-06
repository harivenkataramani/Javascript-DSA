class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.start = null
        this.end = null
        this.length = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.start = newNode
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length ++
        return this
    }

    dequeue(){
        if(this.length === 0) return null
        let currentHead = this.start
        this.start = currentHead.next
        this.length --
        if(this.length===0){
            this.last = null
        }
        return currentHead.val
    }
}