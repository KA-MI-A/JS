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
