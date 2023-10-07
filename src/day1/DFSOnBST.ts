export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    let curr : BinaryNode<number> | null= head;

    if(!curr){
        return false;
    }

    if(curr.value === needle){
        return true;
    }

    if(needle >= curr.value){
        return dfs(curr.right, needle);
    }

    return dfs(curr.left, needle);
}