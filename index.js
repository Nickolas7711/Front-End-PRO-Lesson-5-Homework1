// debugger;

do  {
    lengthArray = parseInt(prompt('Введіть довжину масиву.'));
} while (!lengthArray)

array = [];

for (i = 1; i <= lengthArray; i++) {
    enterArray = '';
    do {
    enterArray = parseInt(prompt(`Введіть елемент масиву ${i}`));
    } while (isNaN(enterArray));
    array.push(enterArray);
}

document.write(`Введені елементи масиву - ${array.join(', ')}<br>`);

array.sort();
document.write(`Сортування елементів масиву - ${array.join(', ')}<br>`);

array.splice(1, 3);
document.write(`Видалення з 2 по 4 елемент масива, включно - ${array.join(', ')}`);