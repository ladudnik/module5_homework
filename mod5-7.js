/* Задание 7.<br>

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
    Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
    При выполнении задания необходимо учесть, что массив может содержать не только числа,
    но и, например, знаки, null и так далее.
    */

    let chet = 0;
    let nechet = 0;
    let nul = 0;
    let arr = [0,1,2,3,4,78];

    for (let i=0; i < arr.length; i=i+1) {
    if (typeof arr[i] === "number") {
    if (arr[i] === 0)
    nul += 1;
    else if (arr[i] % 2 === 0)
    chet += 1;

    else {
    nechet += 1;
}
}
}

    console.log('В массиве ', nul, 'нулей, ', nechet, 'нечетных значений, ', chet, 'четных значений.');