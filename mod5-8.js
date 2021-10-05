/* Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

    let myMap = new Map();
    myMap.set("1", "16");
    myMap.set("2", "true");
    myMap.set("3", "string");

    for (let name of myMap.keys()) {
    console.log('Ключ — ' + name + ', значение — ' + myMap.get(name))
}
