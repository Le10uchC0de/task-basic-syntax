export function romanToInteger(str) {
    //let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let decimal = 0;
    let lastNumber = 0;
    let romanNumeral = str;
    for (let x = romanNumeral.length - 1; x >= 0; x--) {
        let convertToDecimal = str[x];
        if (str[x] === 'M') {
            decimal = processDecimal(1000, lastNumber, decimal);
            lastNumber = 1000;
        }
        if (str[x] === 'D') {
            decimal = processDecimal(500, lastNumber, decimal);
            lastNumber = 500;
        }
        if (str[x] === 'C') {
            decimal = processDecimal(100, lastNumber, decimal);
            lastNumber = 100;
        }
        if (str[x] === 'L') {
            decimal = processDecimal(50, lastNumber, decimal);
            lastNumber = 50;
        }
        if (str[x] === 'X') {
            decimal = processDecimal(10, lastNumber, decimal);
            lastNumber = 10;
        }
        if (str[x] === 'V') {
            decimal = processDecimal(5, lastNumber, decimal);
            lastNumber = 5;
        }
        if (str[x] === 'I') {
            decimal = processDecimal(1, lastNumber, decimal);
            lastNumber = 1;
        }
    }
    return decimal;
}

export function processDecimal(decimal, lastNumber, lastDecimal) {
    if (lastNumber > decimal) {
        return lastDecimal - decimal;
    } else {
        return lastDecimal + decimal;
    }
}
