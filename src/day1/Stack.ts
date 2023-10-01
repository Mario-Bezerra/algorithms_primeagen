type Node<T> = {
    value : T,
    previous ?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head ?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;
        if(!this.head){
            this.head = node;
        }
        const head = this.head;
        this.head = node;
        node.previous = head;
    }
    pop(): T | undefined {
        if(!this.head){
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.previous;

        if(this.length == 0){
            this.head = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}