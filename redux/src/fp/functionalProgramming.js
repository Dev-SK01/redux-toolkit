/*
  Main Goal is get a string from user and trim that string wap in html element. 
  Implementing Functional Programming Concepts.
*/
const {compose , pipe } = require('lodash/fp') 

function trimStr(str){
    return str.trim();
}

function wrapInElement(elem){
   return (str) => {
    return `<${elem}>${str}</${elem}>`
   }
}

function asArgument(fn , data){
   console.log(fn(data));
}

function returnAsFunction(a){
  return function (b){
    return a + b ;
  }
}



const useCompose = compose(wrapInElement('h1') , trimStr);
const usePipe = pipe(trimStr , wrapInElement('span'));
const currying = returnAsFunction;
const person = {
  name : 'Dev' , 
  role  : {
    dept : 'software Dev' ,
    salary  : 40000
  }
}

const immutableObject = {
  ...person , 
  name : 'Sid Dev' ,
  role : {...person.role , dept : 'testing' , salary : 30000}
} 

console.log(person);
console.log(immutableObject);
console.log(currying(10)(20));
asArgument(trimStr ,'  hello  ') ;
console.log(useCompose(' hello world! '))
console.log(usePipe(' hello world! '));



