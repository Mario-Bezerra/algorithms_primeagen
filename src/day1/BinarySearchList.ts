export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while(low < high){
        const medium = Math.floor(low + (high - low) /2);
        const value = haystack[medium];
        if( value === needle){
            return true;
        }
        else if(value > needle){
            high = medium;
        }
        else{ low = medium + 1; }
    }
    return false;
}