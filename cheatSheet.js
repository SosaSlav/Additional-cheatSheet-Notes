//Test Pop-Up Window
<script>
    alert('Sample Text');
</script>

console.log('Sample Text');

//Variable Data Types
//String:
    const name='sample';
//Numbers:
    const age= 22;
    const rating= 5;
//Boolean:
    const isCool= true; 
//Null: 
    const x= null; 
//Undefined: Explicitly Defined
    const y= undefined; 
//Undefined: Initialized
let z; 

//Using Console to View Data Types
console.log(typeof constantTerm); 

//Concantenation
//Using String Variables (Old Tek)
    const name= 'John';
    const age= 30; 
    console.log('My name is' + name + 'and I am' + age); 
//Using Template String or Template Literals
    console.log(`My name is ${name} and I am ${age}`); 
    //You can tether this whole with an Assigned Constant
        const hello=`My name is ${name} and I am ${age}`; 
//So that...
console.log(hello); //->// My name is John and I am 30

//String Properties and Methods
//Variable Constant
    const s='Hello World'; 
//Length Property
    console.log(s.length); 
//Case Alternation
    console.log(s.toUpperCase()); 
//Substrings
const s='Hello World'
console.log(s.substring(0,5)); //->// Outcome:Hello

//Splitting Strings Into Arrays
//Splitting by Letter (Value)
    const s='Hello World!';
    console.log(s.split('')); 
//Splitting by Whole Word Value
const s='technology, computers, IT, code';
console.log(s.split(', ')); 

//Java Comments Single Line
/*Sample Comment
Multi Line*/

//Arrays Cont. 
//Example 1
    const numbers=new Array(1,2,3,4,5); 
    console.log(numbers); 
//Variables may be Qualitative or Quantitative 
    const fruits= ['apples', 'oranges', 'pears'];
    console.log(fruits); 
    /*Remember Arrays are ZERO based (0,1,2,3) so to pull
    value 'oranges'...*/
        console.log(fruits[1]); 
    /*To add a Value to this Variable (fruits) you must
    assign an Array Placement Value and Value Definition*/
        fruits[3]='grapes'; 

//Array Incorporating Variable Variety Simultaneously 
const fruits=['apples',10,true]; 

//Adding a Value to the End of an Array (Example)
    fruits.push('mangos')
//Adding a Value to the Beginning of an Array (Example)
    fruits.unshift('strawberries'); 
//Removing a Value from the End of an Array (Example)
    fruits.pop(); 
//Removing a Value from the Beginning of an Array (Example)
fruits.shift();

//Array Validation Check
console.log(Array.isArray(fruits)); 

//Search Element Value in an Array
console.log(fruits.indexOf('oranges')); //->// (2)

//Object Literals
//Example Set Up
    const person={
        firstName:'John',
        lastName:'Doe',
        age: 30,
        hobbies:['music', 'movies', 'sports'],
        address:{
            street:`50 main st`, 
            city:`Boston`, 
            state:`MA`
        }
    }
//To pull ALL tethered variables for "person"
    console.log(person); 
//For single value pull
    console.log(person.firstName); //->// 'John' 
//For multiple value pull
console.log(person.firstName, person.lastName) //->// 'John Doe' 

//De-Structuring
    const{firstName, lastName} = person; 
//for embedded objects
    const{address: {city}} = person; 
    console.log(city); //->// `Boston`
//Adding Properties
person.email = 'john@gmail.com'; 

//Arrays of Objects
    const todos= [
        {
            id: 1,
            text:'Take out Trash', 
            isCompleted: true

        },
        {
            id: 2, 
            text: 'Meeting with Boss', 
            isCompleted: true
        }, 
        {
            id: 3,
            text: 'Dentist Appt', 
            isCompleted: false
        }
    ]; 
//Now say you wish to pull text 'Meeting with Boss' 
console.log(todos[1].text); 

//JavaScript JSON (JavaScript Object Notation)
//Using the Prior Example: 
[
    {
        "id": 1,
        "text":"Take out Trash", 
        "isCompleted": true

    },
    {
        "id": 2, 
        "text": 'Meeting with Boss', 
        "isCompleted": true
    }, 
    {
        "id": 3,
        "text": 'Dentist Appt', 
        "isCompleted": false
    }
] 

//Converting Javascript to JSON using a Constructor 
const todoJSON= JSON.stringify(todos); 
console.log(todoJSON); 

//For Loops
for(let i = 0; i < 10; i++) {
    console.log(i);
}
    //->// Generates: 0,1,2,3,4,5,6,7,8,9

    /*  For less than/equal too: <=
    greater than/equal too: >=
    */ 
//To generate with the (For Loop Number) pretext in console:
console.log(`For Loop Number: ${i}`); 

//While Loops
let i= 0; 
while(i<10){ 
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Loops through Arrays
//Using for Loops (Not the Best Way tbh)
    for(let i=0; i<todos.length; i++){
        console.log(todos[i].text); 
    }
//Using for of Loops (More Easily Readable)
for (let todo of todos){ 
    console.log(todo.id); 
}

//High Order Array Methods 
//forEach: Loops through an Array
    todos.forEach(function(todo) {
        console.log(todo.text);
    }); 
//map: Create a new array from a prior array (returns an array)
    const todoText= todos.map(function(todo) {
        return todo.text;
    });

    console.log(todoText); //->// pulls text values devoid of objects
//filter: Creates a new array based on a condition
    const todoCompleted= todos.filter(function(todo) {
        return todo.isCompleted === true; 
    });

    console.log(todoCompleted); 

/*Say you wish to pull all "true" text values 
using both map and filter*/ 
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true; 
}).map(function(todo) {
    return todo.text;
}) 

console.log(todoCompleted); 

//Conditionals
//If Statements: Double (==): Matches Values NOT Data Types
    const x = 10; //number//

    if( x == 10 ) {
        console.log('x is 10');
    }

//Also works with...
    const x= '10'; //string//

//If Statements: Triple (===): Matches Values and Data Types

const x = 10;

if(x === 10) {
    console.log('x is 10');
}

//Else Statement: Provides alt console value if 'if' condition is not 'true' 

const x= 20; 
if ( x === 10 ) { 
    console.log('x is 10');
}   else {
    console.log('x is not 10')
}

//Else/If Example

const x=/*(4,10,20)*/;

if( x === 10 ) {
    console.log('x is 10'); 
}   else if( x > 10 ) {
    console.log('x is greater than 10');
}   else {
    console.log('x is less than 10'); 
}

/* 
Outcome 1: x is less than 10
Outcome 2: x is 10
Outcome 3: x is greater than 10
*/

//If/Else Multiple Conditions 'OR' Example: 

const x = 4;
const y = 11; 

if( x > 5 || y > 10 ) {
    console.log('x is more than 5 or y is more than 10');
}

//If/Else Multiple Conditions 'And' Example:

const x= 6;
const y= 11;

if( x > 5 && y > 10 ) {
    console.log('x is more than 5 and y is more than 10');
}

//Ternary Operators: Assigns Variables based on Condition

const x = 10

const color = x > 10 ? 'red' : 'blue' ;
console.log(color);

//Switch Statements

const x = 9 
const color = x > 10 ? 'red' : 'blue' ; 

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default :
        console.log('color is NOT red or blue');
        break;  
}

//Functions
    function addNums( num1, num2 ) {
        console.log( num1 + num2 );
    }
//What if we omit a parameter by calling this function...
    addNums(); //->// Outcome: NaN
//What if I want to set a default value for my parameters?
    function addNums(num1 = 1, num2 = 1) {
        console.log(num1 + num2);
    }

    addNums(); 
    //outcome: 2// 

//But! If we add values to the addNums oaramters, the default values will be over-ridden so...
    addNums( 5, 5 ); //->// Outcome: 10

//Now, lets switch the console.log to a 'return' as you generalllyyyyy don't use console.log as a function 

function addNums(num1 = 1, num2 = 1) {
    return(num1 + num2);
}

console.log(addNums( 5, 5 )); //->// Outcome: 10

//Arrow Functions

    const addNums = (num1 = 1, num2 = 1) => {
        console.log(num1 + num2);
    }

    addNums(5, 5); 

//Because this possesses one variable, the following function works...

    const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
    
    addNums(5, 5); 
//or...

    const addNums = (num1 = 1, num2 = 1) => num1 + num2; 
    
    console.log(addNums(5, 5)); 

//even...

const addNums = num1 => num1 + 5;

console.log(addNums(5)); 























