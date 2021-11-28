'use strict';
//Создание элемента внутри body
let newdiv = document.createElement('div');
newdiv.innerHTML = "Я родился";
document.body.prepend(newdiv);
//Удаление 
newdiv.remove();
//Перечисление элементов body и их атрибутов
for (let child of document.body.children){
    console.log(child, child.attributes);
}
//Использование переменной arguments
function get_attributes(){
    let i = 1;
    while (arguments[i]){
        console.log(arguments[0].getAttribute(arguments[i]));
        i++;
    }
}
get_attributes(document.body.firstElementChild, 'style', 'id');


//Последний потомок body:
console.log(document.body.lastElementChild);

//Первый узел head:
console.log(document.head.firstChild);

//Предыдущий узел для для предыдущего узла body:
console.log(document.body.previousSibling.previousSibling);

//Добавление элемента в конце body:
let newp = document.createElement('p');
document.body.insertAdjacentElement('beforeend', newp);

//Поиск элемента по установленному id = 'a':
console.log(document.querySelector('#a'));

//Удаление класса krutoi:
let del = document.querySelector('.krutoi');
console.log(del); //выведет h1
//del.classList.remove("krutoi");
console.log(document.querySelector('.krutoi')); //выведет null

//Работа с прокруткой колеса мыши:

//Добавляю и удаляю действие
let pepescroll = document.querySelector('.scroll');
pepescroll.addEventListener("wheel", () => alert('Don\'t scroll the frog!'));
pepescroll.removeEventListener("wheel", () => alert('Don\'t scroll the frog!'));

//Погружение и всплытие прокрутки 


    function scrollAlert(){
        alert("You\'ve scrolled into a wrong neighbourhood! " + this.tagName);
    }
    for (let elem of document.querySelectorAll('*')){
    elem.addEventListener("wheel", scrollAlert, {capture: true});
    elem.addEventListener("wheel", scrollAlert);
    }

//Stop propagation 
    function scrollAlert(event){
        alert("You\'ve scrolled into a wrong neighbourhood! " + this.tagName);
        event.stopPropagation();

    }
//Предотвращение стандартного действия (сделал для перехода по ссылке)
    let goog = document.querySelector('a');
    console.log(goog);
    goog.addEventListener("click", function(event){
        event.preventDefault();
    });
