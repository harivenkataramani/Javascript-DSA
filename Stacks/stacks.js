class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.start = null
        this.last = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(this.length===0){
            this.start = newNode
            this.last = this.start
        }
        else{
        let currentStartNode = this.start
        this.start = newNode
        this.start.next = currentStartNode
        }
        this.length ++
        return this 
    }
    pop(){
        if(this.length === 0) return null
        let currentHead = this.start
        this.start = currentHead.next
        this.length -- 
        if(this.length==0){
            this.tail = null
        }
        return currentHead.val
    }
}