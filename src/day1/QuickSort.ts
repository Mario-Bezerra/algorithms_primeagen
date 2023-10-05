function quick_sorting(arr:number[], low : number, high : number) : void {

    if(low >= high){
        return;
    }

    const pivot = partition(arr, low, high);

    quick_sorting(arr, low , pivot - 1);
    quick_sorting(arr, pivot + 1, high );
}

function partition(arr:number[], low : number, high : number) : number {

    const pivot = arr[high];
    let index = low - 1;

    for(let i = low ; i < high ; i++){
        if(arr[i] <= pivot){
            index++;
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    index++;
    arr[high] = arr[index];
    arr[index] = pivot;

    return index;
}

export default function quick_sort(arr: number[]): void {
    quick_sorting(arr, 0 , arr.length - 1);
}