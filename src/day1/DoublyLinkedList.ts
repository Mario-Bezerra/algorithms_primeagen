type Node<T> = {
    value : T,
    next ?: Node<T>,
    previous ?: Node<T>
}

export default class DoublyLinkedList<T> {
    
    public length: number;
    private head ?: Node<T>;
    private tail ?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };
        
        if(!this.head && this.length == 0){
            this.head = this.tail = node;
            this.length++;
            return;
        }

        const head = this.head;
        head!.previous = node
        node.next = head;
        this.head = node;
        this.length++;
    }     

    insertAt(item: T, idx: number): void {
        const node: Node<T> = { value: item };
        if (!this.head || this.length === 0 || idx > this.length || idx < 0) {
            return;
        }

        let actualNode: Node<T> | undefined = this.head;

        if (idx === 0) {
            node.next = this.head;
            this.head = node;
            this.length++;
            return;
        }

        for (let i = 0; i < idx - 1; i++) {
            if (!actualNode) {
                return;
            }
            actualNode = actualNode.next;
        }

        if (!actualNode) {
            return;
        }

        node.next = actualNode.next;
        actualNode.next = node;
        this.length++;
    }

    append(item: T): void {
        const node: Node<T> = { value: item };
        
        if(this.length == 0){
            this.head = this.tail = node; 
            this.length++;   
            return;
        }
        
        if(this.length == 1){
            const head = this.head;
            head!.next = node;
            node.previous = head;
            this.tail = node;    
            this.length++;   
            return;
        }
        
        const tail = this.tail;
        tail!.next = node
        node.previous = tail;
        this.tail = node;
        this.length++;
    }

    remove(item: T): T | undefined {
        let actualNode = this.head;
        for(let i = 0; i < this.length ; i++){
            if(actualNode?.value == item){
                const nodeToBeRemoved = actualNode;
                let previousNode = nodeToBeRemoved.previous;
                let nextNode = nodeToBeRemoved.next;
                previousNode == undefined ? this.head = nodeToBeRemoved.next : previousNode.next = nextNode;
                nextNode == undefined ? this.tail = nodeToBeRemoved.previous : nextNode.previous = previousNode;
                this.length--;
                return item;
            } 
            actualNode = actualNode?.next;
        }
        return undefined;
    }   
    
    get(idx: number): T | undefined {
        if(idx < 0 || idx > this.length - 1){
            return undefined;
        }

        if (idx === 0 && this.head) {
            return this.head.value;
        }

        let actualNode = this.head;
        for(let i = 0; i < idx ; i++){    
            actualNode = actualNode?.next;
        }
        return actualNode?.value;
    }   
    
    removeAt(idx: number): T | undefined {
        if(idx < 0 || idx > this.length - 1){
            return undefined;
        }

        let actualNode = this.head;
        for(let i = 0; i < idx ; i++){    
            actualNode = actualNode?.next;
        }

        const nodeToBeRemoved = actualNode;
        const previousNode = nodeToBeRemoved?.previous;
        const nextNode = nodeToBeRemoved?.next;

        if (previousNode) {
            previousNode.next = nextNode;
        } else {
            this.head = nextNode;
        }

        if (nextNode) {
            nextNode.previous = previousNode;
        }

        this.length--;
        return nodeToBeRemoved?.value;
    }
}