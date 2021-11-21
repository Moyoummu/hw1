'use strict';

//Создаем 'класс' при помощи функции
{
    console.log('class creation via functions:\n');
    function _open(){
        console.log('The box has been opened\n');
    }
    function box1(width, height, depth){
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.material = "cardboard";
        this.name = this;
        this.kek = _open;
    }
    let a = new box1("50", "50", "50");
    console.log('a:\t', a.width, a.material);
    function pizzabox(width, height, depth, brand){
        box1.call(this, width, height, depth);
        this.brand = brand; 
    }
    pizzabox.prototype = new box1;
    let b = new pizzabox("40", "10", "40", "Papa John's");
    b.prototype = new pizzabox;
    /*if (b.prototype instanceof box1)
        console.log('yep');
    else 
        console.log('nop');*/
    
    b.kek(); // используем чужой метод

    console.log('b:\t', b.brand, b.height, b.material, '\na:\t', a.height);
    Object.defineProperty(pizzabox, 'material', {
        value: "cardboard",
        configurable: false,
    });
    //delete pizzabox.material; - выдаст ошибку
    Object.defineProperty(b, 'material', {
        configurable: true,
        enumerable: true,
        set: function(new_mat) {b.material = new_mat},
    });
    //console.log(b.material);

    //балуюсь со строкой
    String.prototype.reverse = function(){
        a = this.split("").reverse().join("");
        console.log(a)
    }
    let str = "Hello, world!";
    str.reverse();
}
//Создаем класс
{
    console.log('\nClass creation:\n');
    class mammal{
        constructor(name, food){
            this.name = name;
            this.fav_food = food;
            this.habitat = "wild environment"
        }          
    }

    let squirrel = new mammal("squirrel", "nuts");
    console.log('squirrel:\t', squirrel.fav_food)
    class human extends mammal{
        constructor(name, food, job){
            super(name, food);
            this.job = job;
            this._kills_dogs = false;
        }
        set kills_dogs(value)
        {
            if (value == true) console.log(this.name, 'doesn\'t kill dogs!');
            this._kills_dogs = this._kills_dogs;
        }
        get kills_dogs(){
            return this._kills_dogs;
        }
    }
    let john = new human("John Wick", "wtf he just shoots people", "killer")
    Object.assign(john, human);
    delete john.habitat
    console.log('human:\t', john.name, john.job, john.habitat);
    //mixin
    let intro = {
        sayHi(x){
            if (x = 'John Wick')
                console.log('Puts a bullet in yo cap\n');
            else
                console.log('Hi, i\'m', x);
        }
    }
    Object.assign(human.prototype, intro);
    john.sayHi(this.name);
    john.kills_dogs = true;
    console.log(john.kills_dogs);
}
