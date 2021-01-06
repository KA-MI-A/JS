# 1.定义函数
## 1.函数声明

__一个函数定义（也称为函数声明，或函数语句）由一系列的function关键字组成，依次为__
- 函数的名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号{}括起来
- 例如，以下的代码定义了一个简单的square函数：
```
function square(number) {
  return number * number;
}
```
- 函数square使用了一个参数，叫作number。这个函数只有一个语句，它说明该函数将函数的参数（即number）自乘后返回。函数的return语句确定了函数的返回值：
```
return number * number;
```
- 原始参数（比如一个具体的数字）被作为值传递给函数；值被传递给函数，如果被调用函数改变了这个参数的值，这样的改变不会影响到全局或调用函数。
- 如果你传递一个对象（即一个非原始值，例如Array或用户自定义的对象）作为参数，而函数改变了这个对象的属性，这样的改变对函数外部是可见的，如下面的例子所示：
```
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make;     // x获取的值为 "Honda"

myFunc(mycar);
y = mycar.make;     // y获取的值为 "Toyota"
                    // (make属性被函数改变了)
 ```
## 2.函数表达式
- 虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称。例如，函数square也可这样来定义：
```
const square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```
- 然而，函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：
```
const factorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(factorial(3));
```
- 当将函数作为参数传递给另一个函数时，函数表达式很方便。下面的例子演示了一个叫map的函数如何被定义，而后使用一个表达式函数作为其第一个参数进行调用：
```
function map(f,a) {
  let result = []; // 创建一个数组
  let i; // 声明一个值，用来循环
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```
```
function map(f, a) {
  let result = []; // 创建一个数组
  let i; // 声明一个值，用来循环
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0,1, 2, 5,10];
let cube = map(f,numbers);
console.log(cube);
```
- 返回 [0, 1, 8, 125, 1000]。
- 在 JavaScript 中，可以根据条件来定义一个函数。比如下面的代码，当num 等于 0 的时候才会定义 myFunc ：
```
var myFunc;if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
```
# 2.调用函数
- 定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数square，你可以如下这样调用它：
```
square(5);
```
- 函数可以被递归，就是说函数可以调用其本身。例如，下面这个函数就是用递归计算阶乘：
```
function factorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
```
# 3.函数作用域
- 在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。
```
// 下面的变量定义在全局作用域(global scope)中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
  return num1 * num2;
}

multiply(); // 返回 60

// 嵌套函数的例子
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // 返回 "Chamahk scored 5"
```