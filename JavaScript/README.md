# AI Driven Full Stack Web Engineering

## Module 5

All web site has a default margin. All web site content show a default width. That is,

```css
max-width: 1200px;
margin: auto;
```

### Padding system

```css
padding: 10px; /*top,buttom,left and right*/
padding: 10px 20px; /*First value set top and buttom(10px) and secound value set Left right (20px)*/
padding: 10px 20px 30px; /*1st set top(10px), 2nd right and left(20px) and 3rd buttom(30px)*/
padding: 10px 20px 30px 40px; /* It set top = 10px,right=20px,buttom=30px and left=40px*/ 
```

## Module: 07

#### variable concepts

- let
    - let value is changable
    
    #### Example:
    
    ```jsx
    let price = 100;
    price = 50; // Is possible
    ```
    
- const
    - const is not changable
    
    #### Example:
    
    ```jsx
    const price = 10;
    price = 5; // Is not possible
    ```
    
- var
    - We are not use. Beacuse it is old name system

### Variable Type check

- typeof use for checking variable type

```jsx
const name = "Meghla";
console.log(typeof name);
```

### Number system

- toFixed() Methods use for setup fexd value show

## Module 8

#### conditional stetment

if-conditional structure 

```jsx
if(conditions){
	// stetment
}
```

#### Ternary operator

```jsx
conditions ? true:false;
```

## Module 9

### Array Methods

- .length → use for check length
- .push() → use for add data in array at last index
- .pop()  → remove element in array last index
- .shift() → use for remove 1st element. (N.B: It can change index)
- .unshift() →Add element at first index (N.B: it can change index)
- .includes() → check if element exist in array return true,Otherwise false
- .concat() →use to merge array
- .join() → use for joining all element in array
- .indexOf() → use for finding array element index in array
- Array.isArray() → Check if array return true, otherwise false
- .reverse() → It use for reverse array
- .slice(startIndex,endIndex) → Slice array but change main array
- .splice(startIndex,endIndex) → Remove parts of array

## Module 11

### String

- .length → use for checking string length
- .toLowerCase() → Use for convert lower case
- .toUpperCase() →Use for convert uppercase
- .trim() → use for remove white space
- .trimStart() → remove start white space
- .trimEnd() → remove end white space
- .startWith() → Check if start with prameter return true otherwise false.
- .endWith() → Check last. If start return true, otherwise false.
- .splite(’ ‘) → splite all string to an array

### Objects

- objects.keys(objectName) → Return all key an array
- objcets.value(ObjectName) → Return all value an array
- delete [ObjectsName.property](http://ObjectsName.property) → delete this property

## Module 14

### three kinds of errors

- Syntax Error

```jsx
 not closed bracket, Mistake typo keyword etc.
```

  

- Runtime Error
- Logic Error

### 7 types of errors

- Syntax Error
- Reference Error(not define)
- Type Error (not a function)
- Type Error(Reading Undefine)
- Range Error(Invalid Length)
- Type Error(Reassign a constant)
- Logical Error

## ES6 (Milstone3)

### Module 16-1

Programming has three scope. That is

- Local Scope
- Global Scope
- Local Scope

### Default Parameter

Set a default value in a function parameter.

```jsx
function functionName(parameter = defaultValue){
	// Code
}
```

### Template String

Template string is a writing string system when we use single quation(’ ‘) or double quation(” “) instead use backtick or caretsign (` `).

```jsx
`String here, ${variable}`;
```

### Spread and Rest Operator

Spread operator use for array and Object if i spread this.

```jsx
...variable
```

#### Spread using to copy an array

```jsx
let numbers = [1,2,3,4];
let copyedArray = [...numbers];
```

### Rest Operator

It is similer to spread operator. Just it is use as a function prameter

```jsx
function funcName(...parameter){
	// Code
}
```

## Arrow function

```jsx
const functionName = () => {
	// Code
};
```

if has single statement shortcut role

```jsx
const functionName = (name) => `Hello ${name}`; // implecit return
//or,
const functionName = name => `Hello ${name}`;
```

### Destructuring

```jsx
let numbers = [10,20,30,40];
const [ten,twenty,,,fourty] = numbers
// , , , skip element
// syntax : const [] = array
```

```jsx
const student = {
	id: 322112,
	name: "Meghla",
	relationWithme: "1/0. favorite friend"
};

const {id,name,age} = student;
// If change varibale name
const {id:studentId,name:fullName} = student // Note: access time use must changed name

```

- seal() → If i use Objects.seal() I can’t delete or add this object
- freeze() → If use freeze can’t edit or delete or somthing

## Clouser

**an end, a [programming function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) with its environment, or a [psychological sense of finality](https://en.wikipedia.org/wiki/Closure_(psychology))**. 

```jsx
function cashRegister(){
    let ammount = 0;
    return function (payAmmount){
        ammount += payAmmount;
        return ammount;
    }
}

let coffeShopCashCounterr = cashRegister();
let restaturentCashCounter = cashRegister();
let juiceBarCashCounter = cashRegister()

console.log("Coffe Shop Ammount: ",coffeShopCashCounterr(100));
console.log("Restaturant Shop Ammount: ",restaturentCashCounter(500));
console.log("Juice Bar Ammount: ",juiceBarCashCounter(150));
```

![Screenshot From 2026-08-03 10-38-48.png](AI%20Driven%20Full%20Stack%20Web%20Engineering/Screenshot_From_2026-08-03_10-38-48.png)

### Callback function

Callback function is a passed an agrument a function

```jsx
function registerStudent(callBackFunction){
    callBackFunction()
    return "Student is Registering data needed! "
}

function studentBasicInformation(){
    const student = {
        id: 322112,
        fullName: "Mafuza Khatun",
        age: 15
    }
    // return student
    console.log(student)
}
function studentPersonalInformation(){
    const student = {
        mobile: "01xxxxxxxx",
        isSingle: true
    }
    console.log(student);
}

console.log(registerStudent(studentBasicInformation))
console.log(registerStudent(studentPersonalInformation))
```

## Array ES6 Methods

### map()

to modfy an array to get new array

```jsx
let variableName = array.map((el,index,array)=>{

})
```

### forEach

Simple iterate a loop

```jsx
let varName = array.forEach((el,index,arr) => {

});
```

### filter

filter out element in array and return a new array filtered element.

```jsx
let varName = array.filter((el,index,arr) => {
	// conditions {
		// return true : only return true element
	}
})
```

### find

find out first element based on the condition and return first value

### reduce