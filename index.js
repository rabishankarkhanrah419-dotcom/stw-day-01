console.log("Hello, World");
console.log(21); 
console.log("The value of 32 is:"+32);
console.log(5==0);
console.log(4+7);
console.log(`Hare Krishna:
               This is Gurukulam's STW`);
console.log('5'+'3');
console.log('5'-'3');
console.log('5' == 5);//simply compare it
console.log('5' === 5);//strictly equality operator
console.log(`This is a text, this is the sum of 2+3: ${2+3}`);
const name = "Rabishankar";
console.log('Hey!',name,'how are you?');
let a=5;
let b=3;
console.log(a+b);
a=10;
console.log(a+10);
console.log(typeof a);
console.log(typeof name);
a = "Ayush";
// name = 123;// It will give error
const arr = [2,4,6,7,9];
console.log(arr);
const input=prompt("Enter yoyr name:");
console.log("Your name is:",input);
console.log(typeof arr);
const obj={
    name:{
        first:"Rabishankar",
        second:"Khanrah"},
    age :21,
    roll:11200125044,
    isStudent: true

}

console.log(typeof obj === typeof arr);

const abc =null;
const xyz = undefined;
console.log(abc===xyz);

console.log(obj.name.first);
//console.log(obj.school);
console.log('5'!=5);
console.log('5'!==5);
console.log('5' == 5 || obj.school.name);
if(2>5){
    console.log("mathematics is wrong!");
}
else{
    console.log("this will print");
    const str='';// Empty string always false 
    let confusion=500*'abc';
    console.log(confusion);
    if(str){
        console.log("will it printf?");
    }
}

const marks={
    math:50,
    phy:45,
    che:42,
    practical:{
        phy: 40,
        che:40
    }
}

let total = marks.math+marks.phy+marks.che;
total += (marks.practical.phy  && marks.practial) || 0;
console.log(total);

console.log(true ==2);
console.log(5+parseInt('4a'));
console.log((0.1+0.2).toFixed(2));
const newChar='Rabi';
console.log(newChar.toLowerCase()=='rabi');
