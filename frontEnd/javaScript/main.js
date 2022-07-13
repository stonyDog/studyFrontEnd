//alert("HelloWorld!");

console.log('consolw Hello World!');
console.error('This is a error');
console.warn('This is a warning');

//var(グローバル変数:使わない)
//let(変数：変更できる),const(変数：変更できない)

let ageL = 30;
console.log(ageL);
ageL = 31;
console.log(ageL);

//下記のような再割り当てはできない。
//const ageC = 30;
//console.log(ageC);
//ageC = 31;
//console.log(ageC);
//また初期化しないと怒られる
//count ageC;

//String,Numbers, Boolean, null, undefined(, Symbol)
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

//データ型を見ることできる
console.log(typeof x);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);



const s = "Hello Wordl!"
console.log(s.length);
//大文字変換
console.log(s.toUpperCase());
//小文字変換
console.log(s.toLowerCase());
//切り抜き 0-5文字目
console.log(s.substring(0,5));
//分割
console.log(s.split(''));


//Arrays -variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples','oranges','pears']

console.log(numbers);
console.log(fruits);

//配列の1番目を参照
console.log(fruits[1]);

//配列の3番目にgrapesを追加
fruits[3]='grapes';
console.log(fruits);

//配列の最後にmangosを追加
fruits.push('mangos');
console.log(fruits);

//配列の最初にstrawberriesを追加
fruits.unshift('strawberries');
console.log(fruits);

//配列の最後を削除
fruits.pop();
console.log(fruits);

//引数が配列ならtrueを返す
console.log(Array.isArray(fruits));

//fruitsに引数があるなら、そのindexを返す
console.log(fruits.indexOf('pears'));


//object志向?
const person ={
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}
//上記の記述は以下で置き換え可能らしい
//const {firstName,lastName}=person;

console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1])
//objectへの追加
person.email = 'john@gmail.com'
console.log(person);


const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:false
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:true
    }
]
console.log(todos);

//json構文というらしい
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For
for(let i = 0;i<10;i++){
    console.log(`For Loop Number: ${i}`);
}

//while
let i=0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
//-----------------------------------
//配列の全要素を表示する方法
for(let j = 0;j<todos.length;j++){
    console.log(todos[j].text);
}
for(let todo of todos){
    console.log(todo.id);
}

//forEach, map, filter(ここの関数は不明)
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
//-----------------------------------

//isCompleted = trueの、配列を取り出す。(ここの関数は不明)
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//isCompleted = trueの、要素を取り出す。(ここの関数は不明)
const todoCompleted1 = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted1);

//if
const x1= 9;
if(x1==10){
    console.log('x1 is 10');
}else if (x1>10) {
    console.log('x1 is greater than 10');
}else{
    console.log('x1 is less than 10');
}
//===は、型まで比較
if(x1==='10'){
    console.log('x1 is 10');
}

//3項演算子
const color = (x1>10)? 'red':'blue';
console.log(color);

//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

function addNums(num1,num2){
    console.log(num1+num2);
}
addNums(5,4);

function addNumsDefault(num1=1,num2=2){
    console.log(num1+num2);
}
addNumsDefault();

//矢印関数?
const addNumsArrow = (num1=1,num2=2)=>{
    return num1+num2;
}
console.log(addNumsArrow(4,5));

const addNumsArrow1 = (num1=1,num2=2)=> num1+num2;
console.log(addNumsArrow1(3,4));

//Constructor function
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob=new Date(dob);
/*
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`; 
    }
*/
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`; 
}

//こっちの方が一般的
class Person1{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
}


//instantiate object
const person1 = new Person('John','Doe','4-3-1980');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

const person1_1 = new Person1('John','Doe','4-3-1980');
console.log(person1);

//1.11.11

console.log(window);

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item)=>console.log(item));

const ul = document.querySelector('.items');

//動的にHTMLを書き直す方法

//消す魔法
//ul.remove();
//最後のみ消す魔法
//ul.lastElementChild.remove();
//文字変更方法
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
/*クリックした際の挙動を変更可
btn.addEventListener('click',(e)=>{
    //よくわからない魔法↓
    e.preventDefault();
    console.log('click');
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML ='<h1>HELLO</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    
    if(nameInput.value === '' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter fields';

        setTimeout(()=>msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value}:${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value='';
        emailInput.value='';
        console.log('Success');
    }
}