/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

    const STR = "Hello, world!";
    let str2 = "";
    let i = STR.length;
    while (i >= 0) {
    str2 =  str2 + STR.charAt(i);
    i--;
}
    console.log(str2)