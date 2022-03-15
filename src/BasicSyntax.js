export function romanToInteger(str) {
    const alphabet = [
        ['M', 'MM', 'MMM'],

        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],

        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],

        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ];

    let result = 0;
    let razr = 1000;
    for (let i = 0; i < 4; i++) {
        let j = alphabet[i].length - 1; // Установливаем индекс для обратного перебора элементов алфавита
        while (j >= 0) {
            if (str.indexOf(alphabet[i][j]) == 0) {
                // Если строка начинается на элемент [i][j] алфавита, то...
                result += razr * (j + 1); // Добавляем в результат произведение разряда на число, соответствующее эл-ту
                str = str.replace(alphabet[i][j], ''); // Убираем элемент алфавита из строки
                j = 0; // Выходим из цикла для перехода к след. разряду
            }
            j--;
        }
        razr /= 10; // Снижаем разряд
    }
    // console.log(result);
    return result;
}
