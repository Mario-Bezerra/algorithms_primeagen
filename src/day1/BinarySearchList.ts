export default function bs_list(haystack: number[], needle: number): boolean {
    let low : number = 0;
    let high : number = haystack.length;
    while(low < high){
        let medium : number = Math.floor(low - (high - low)/2);
        if(haystack[medium] == needle){
            return true;
        }
        if(needle > medium){
            low = medium + 1;
        }
        else{ high = medium; }
    }
    return false;
}