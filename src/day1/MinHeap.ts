export default class MinHeap {
    public length: number;
    private data : number[];
    
    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    
    delete(): number {
        if(this.length == 0){
            return -1;
        }
        
        const out = this.data[0];
        this.length--;
        
        if(this.length === 0){
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    heapifyUp(index : number) : void{
        if(index === 0){
            return;
        }

        const parentIndex = this.getParent(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];

        if(parentValue > value){
            this.data[index] = parentValue;
            this.data[parentIndex] = value;
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index : number) : void{
        const leftChildIndex = this.getLeftChild(index);
        const rigthChildIndex = this.getRigthChild(index);
        
        if(index >= this.length || leftChildIndex >= this.length){
            return;
        } 
        
        const leftValue = this.data[leftChildIndex];
        const rightValue = this.data[rigthChildIndex]
        const value = this.data[index]

        if(leftValue > rightValue && value > rightValue){
            this.data[index] = rightValue;
            this.data[rigthChildIndex] = value;
            this.heapifyDown(rigthChildIndex);
        } else if(rightValue > leftValue && value > leftValue){
            this.data[index] = leftValue;
            this.data[leftChildIndex] = value;
            this.heapifyDown(leftChildIndex);
        }
    }

    getParent(index : number){
        return Math.floor((index - 1) / 2) ;
    }

    getLeftChild(index : number){
        return index * 2 + 1;
    }

    getRigthChild(index : number){
        return index * 2 + 2;
    }
}