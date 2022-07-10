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
        isCompleted:true
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


//44.44
