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
//切り抜き
console.log(s.substring(0,5));

//2222