export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let jumpCount = 0;

    for (let i = 0 ; i < breaks.length ; i += jumpAmount){
        if(breaks[i] == true){
            break;
        }
        jumpCount += jumpAmount;
    }

    const backOfTheJump = jumpCount - jumpAmount;
    for(let j = backOfTheJump; j < breaks.length ; j++){
        if(breaks[j] == true){
            return j;
        }
    }

    return -1;
}