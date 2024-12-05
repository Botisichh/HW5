task 1
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl


//Твій код має бути тут

let firstEl = document.getElementById("list").firstElementChild.firstChild.textContent;
let lastEl = document.getElementById("list").lastElementChild.lastChild.textContent;
let secondtEl = document.getElementById("list").children[1].textContent;
let fourthEl = document.getElementById("list").children[3].textContent;
let thirdtEl = document.getElementById("list").children[2].textContent;

//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
=================================================
task 2 
// Допишіть функцію applyStyles, щоб простилізувати елементи як показано на картинці task2.png

function applyStyles() {
     const tittle = document.getElementById('title');
     tittle.style.backgroundColor = 'lightgreen';
     let div = document.getElementById('myDiv');
     div.firstElementChild.style.fontWeight = '700';
     div.firstElementChild.nextElementSibling.style.color = 'red';
     div.children[2].style.textDecoration = 'underline';
     div.children[3].style.fontStyle = 'italic';
     const myList = document.getElementById('myList');
     myList.style.listStyle = 'none';
     myList.style.display = 'flex';
     const spans = document.getElementsByTagName('span');
     for (let span of spans) {
        span.style.display = 'none';
     }
}


//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles()
module.exports = applyStyles;
======================================================
task 3
// Допишіть скрипт у функцію applyStyles(), який за допомогою засобів DOM створить таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

function applyStyles() {
const container = document.querySelector('.create_elements');

const main = document.createElement('main');
main.className = 'mainClass check item';

const div = document.createElement('div');
div.id = 'myDiv';

const paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';

div.appendChild(paragraph);
main.appendChild(div);
container.appendChild(main);
}

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles();
module.exports = applyStyles;
=================================================
task 4
// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Твій код має бути тут
const inputs = document.getElementsByTagName('input');
let name = '';
let phoneNumber = '';
let dateOfBirth = '';
let emailAddress = '';
for (let input of inputs) {
  switch (input.name) {
    case 'fio':
      name = input.value;
      break;
    case 'phone':
      phoneNumber = input.value;
      break;
    case 'birthday':
      dateOfBirth = input.value;
      break;
    case 'email':
      emailAddress = input.value;
      break;
  }
}


//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  name,
  phoneNumber,
  dateOfBirth,
  emailAddress,
};
