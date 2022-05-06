class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0){
            return "Nothing to remove"
        }
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null
        }
        else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length --
        return poppedNode
    }
    
    shift(){
        if(this.length === 0){
            return "Nothing to remove"
        }
        let currentHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = currentHead.next
            this.head.prev = null
            currentHead.next = null
        }  
        this.length --
        return currentHead
    }
    
    unshift(val){
        let newNode = new Node(val)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }
        else{
        let currentHead = this.head
        currentHead.prev = newNode
        this.head = newNode
        this.head.next = currentHead
        }
        this.length++
        return this
    }

    get(index){
        if(index<0 || index>=this.length) return null
        let counter,currentNode
        if(index <= (this.length/2)){
            console.log("Starting from first")
            currentNode = this.head
            counter = 0
            while(counter!==index){
                currentNode = currentNode.next
                counter++
            }
            return currentNode
        }
        else{
            console.log("Starting from last")
            currentNode = this.tail
            counter = this.length - 1
            while(counter!==index){
                currentNode = currentNode.prev
                counter--
            }
            return currentNode
        }
    }

    set(index,value){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = value
            return this
        }
        return false
    }

    insert(index,value){
        if(index<0 || index>this.length) return false
        //this.unshift returns me a node, so added !! so it return true(Bool)
        if(index === 0) return !!this.unshift
        if(index === this.length) return !!this.push
        let newNode = new Node(value)
        let prevNode = this.get(index-1)
        let nextNode = prevNode.next
        //1) do step by step execution like this
        // prevNode.next = newNode
        // newNode.prev = prevNode
        // newNode.next = nextNode
        // nextNode.prev = newNode
        // or 2) u can group them on flow basis
        prevNode.next = newNode,newNode.prev = prevNode
        newNode.next = nextNode,nextNode.prev = newNode
        this.length ++
        return true
    }

    remove(index){
        if(index<0 || index>=this.length) return false
        //this.unshift returns me a node, so added !! so it return true(Bool)
        if(index === 0) return !!this.shift
        if(index === this.length-1) return !!this.pop
        let nodeToRemove = this.get(index)
        let prevNode = nodeToRemove.prev
        let nextNode = nodeToRemove.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        nodeToRemove.next = null
        nodeToRemove.prev = null
        this.length --
        return nodeToRemove
    }
    
}
const double = new DoublyLinkedList()
double.push('1')
double.push('2')
double.push('3')
double.push('4')
// console.log(double)
// console.log(double.pop())
// double.pop()
// double.pop()
// double.pop()
double.unshift('5')
// double.unshift('6')
// double.unshift('7')
// console.log(double.get(-1))
// console.log(double.get(5))
// console.log(double.get(4))
// console.log(double.get(2))
// double.set(-1,"Valu")
// double.set(5, "Valu")
// double.set(0,"Hello 5")
// double.set(2,"Hello 2")
// console.log(double)


