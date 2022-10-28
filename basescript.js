// ; v konce kazhdoj stroki (instrukcii)!!!

// 1-line comments

/* 
2- lines
comments
*/

 // document.querySelector('.heading');
 // document.querySelector - instrukcija ; 'h1' - metod po id./class

 //let header = document.querySelector('heading');

 // Имя переменной должно описывать то, что в ней хранится.

 //h1.classlist.remove ('heading') ubiraet u ukazannogo elementa klass

 /* let paragraph = document.querySelector('p');
 paragraph.textContent = 'Hello VScode';
 */ 

 /* let name = 'Кекс';
paragraph.textContent = 'Вас зовут ' + name + '. Хорошего дня!';
console.log(paragraph.textContent);
// Выведет: Вас зовут Кекс. Хорошего дня!
*/

/*onclick - sobytie. Po kliku.
let button = document.querySelector('button');
button.onclick = function() {
  console.log('Кнопка нажата!');
};  При каждом клике по кнопке в консоли будет появляться новое сообщение Кнопка нажата!.*/

/* otpravka formy:
let form = document.querySelector('form');
form.onsubmit = function() {
  console.log('Форма отправлена!');
}; */

// otkrytie console na Mac. Нажмите F12 или, если вы используете Mac, Cmd+Opt+J.



//NUMBER

// alert( 1 / 0 ); // Infinity - beskonechnostj - Это особое значение, которое больше любого числа.

// alert( "не число" / 2 ); // NaN, такое деление является ошибкой

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;


//STRING

/*let name = "Иван";
alert( `Привет, ${name}!` ); // Привет, Иван! ->  Привет, Иван!
*/


// BOOLEAN

/*let isGreater = 4 > 1;

alert( isGreater ) -> true (результатом сравнения будет "да")*/

// NULL
/* let age = null; -> Это специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».*/


// UNDEFINED 
/* let age;
alert(age); -> выведет "undefined" «значение не было присвоено». для проверок, была ли переменная назначена.*/

//ОБЪЕКТЫ И СИМВОЛЫ
/*typeof undefined // "undefined"
typeof 0 // "number"
typeof Symbol("id") // "symbol"
typeof Math // "object"  
typeof alert // "function" */

/*Семь из них называют «примитивными» типами данных:
number - для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint -  для целых чисел произвольной длины.
string - для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean - для true/false.
null - для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
symbol - для уникальных идентификаторов.
И один не является «примитивным» и стоит особняком:
object - для более сложных структур данных.*/