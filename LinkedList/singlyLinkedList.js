class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null,
        this.tail = null
        this.length = 0
    }

    //remember setting a new Node to variable and assigning the same obj to every value
    // updates the same objects reference, if i am assigning individually
    // new object is created each time

    // logic
    // check if there is head, if not set head and set tail referring to head
    // if there, update the tail next value, which updates the head next value and set back tail value to new Node
    // next time the tail object will compare and refer to the head obj value and update it inside head and tail aswell

    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    //logic
    // if there is no head return something
    //if there is head, check if the head.next has a node, then move the currentHead to head.next
    // keep the ntail to current 

    pop(){
        if(!this.head) return 'Nothing to pop'
        let current = this.head
        let newTail = this.head
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length-- 
        return this
    }

    shift(){
        if(!this.head) return 'Nothing to shift'
        const current = this.head
        this.head = current.next
        this.length--
        if(this.length===0){
            this.tail = null
        }  
        return current
    }

    unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            const current = this.head
            this.head = newNode
            this.head.next = current
        }
        this.length++
        return this
    }

    getValue(index){
        if(index<0 || index>this.length) return null
        let current = this.head
        let counter = 0
        while(counter!==index){
            current = current.next
            counter++
        }
        return current
    }

    setValue(index,value){
        const currentVal = this.getValue(index)
        if(currentVal){
            currentVal.val = value
            return true
        }
        return false
    }

    insertValue(index,value){
        if(index<0 || index>this.length) return false
        // !'string' - returns false, !!'string' - returns true
        if (index===0) return !!this.push(value)
        if(index===this.length) return !!this.unshift(value)
        let prevIndex = this.getValue(index-1)
        let newNode = new Node(val)
        let temp = prevIndex.next
        prevIndex.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index){
        if(index<0 || index>this.length) return false
        // !'string' - returns false, !!'string' - returns true
        if (index===0) return this.shift()
        if(index===this.length-1) return this.pop()
        let prevIndex = this.getValue(index-1)
        let removed = prevIndex.next 
        prevIndex.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null;
        let next
        for(let i=0;i<this.length;i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

}

const list = new SinglyLinkedList
// push
list.push('Hi')
list.push('Hari')
// list.push('Bye')
console.log("pushlist",list)
// pop
// list.pop()
// list.pop()
// console.log('poplist',list)
//shift
// list.shift()
// list.shift()
// list.shift()
// console.log('shiftlist',list)
//unshift
// list.unshift(1)
// list.unshift(2)
// list.unshift(3)
// console.log('unshiftlist',list)
//getValue based on the index
// console.log('getlist',list.getValue(0))
// console.log('getlist',list.getValue(2))
// console.log('getlist',list.getValue(100))
// console.log('getlist',list.getValue(-1))
//setValue based on the index
// console.log('setList',list.setValue(2,'Bye!!!'))
// console.log('setList',list.setValue(-1,'Bye!!!'))
// console.log('setList',list.setValue(6,'Bye!!!'))
// console.log('getlist',list.getValue(2))
// ***** Possible scenarios with set *****//
//if there is no index set the next index value, also follow the index pattern of array with -1 indices starting from last
// insertValue based on the index
// insertValue(0,"first")
// insertValue(5,"last")
//insertValue(3,"insert in middle")
// insertValue(-1,"negative")
// insertValue(100,"higher index")
//reverse the linked list
// reverse()