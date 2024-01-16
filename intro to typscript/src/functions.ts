/**
 * Counts the number of vowels in a given text.
 *
 * @param {string} text - The text to count vowels from.
 * @return {number} The number of vowels in the text.
 */
export function CheckVowels(text: string): number {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
            count++;
        }
    }
    return count; 
}


/**
 * Converts a decimal number to its binary representation.
 *
 * @param {number} num - The decimal number to be converted.
 * @return {string} The binary representation of the decimal number.
 */
export function ToBinary(num: number):string{
    let bin = "";
    let n = num;
    while(num > 0){
        if(num % 2 === 0){
            bin = "0" + bin;
        }else{
            bin = "1" + bin;
        }
        num = Math.floor(num / 2);
    }
    return `${n} => ${bin}`;
}
