# 作用域规则
> 任何一种编程中，作用域是程序中定义的变量所存在的区域，超过该区域变量就不能被访问。

C 语言中有三个地方可以声明变量：
- 在`函数`或块内部的**局部变量**
- 在所有`函数`外部的**全局变量**
- 在**形式参数的**`函数`参数定义中

## 初始化局部变量和全局变量🎁
- 当局部变量被定义时，系统不会对其初始化，必须自行对其初始化。
- 定义全局变量时，系统会自动对其初始化
  - |数据类型|初始化默认值| 
    |-|-|
    |int|0|
    |char|'\0'|
    |float|0|
    |double|0|
    |pointer|NULL|

## 局部变量
> 在某个函数或块的内部声明的变量

它们只能被该函数或该代码块内部的语句使用。
```c
#include <stdio.h>
 
int main ()
{
  /* 局部变量声明 */
  int a, b;
  int c;
 
  /* 实际初始化 */
  a = 10;
  b = 20;
  c = a + b;
 
  printf ("value of a = %d, b = %d and c = %d\n", a, b, c);
 
  return 0;
}
```

## 全局变量
> 定义在函数外部，通常是在程序的顶部。

在整个程序生命周期内都是有效的，在任意的函数内部能访问全局变量。
```c
#include <stdio.h>
 
/* 全局变量声明 */
int g;
 
int main ()
{
  /* 局部变量声明 */
  int a, b;
 
  /* 实际初始化 */
  a = 10;
  b = 20;
  g = a + b;
 
  printf ("value of a = %d, b = %d and g = %d\n", a, b, g);
 
  return 0;
}
```
如果出现局部变量和全局变量的名称相同呢？ `局部>全局`
```C
#include <stdio.h>
 
/* 全局变量声明 */
int g = 20;
 
int main ()
{
  /* 局部变量声明 */
  int g = 10;
 
  printf("value of g = %d\n",  g);
 
  return 0;
}
```
编译并执行
```bash
value of g = 10
```

## 形式参数
> 函数的参数，形式参数，被当作该函数内的局部变量。
```c
#include <stdio.h>
 
/* 全局变量声明 */
int a = 20;
 
int main ()
{
  /* 在主函数中的局部变量声明 */
  int a = 10;
  int b = 20;
  int c = 0;
  int sum(int, int);
 
  printf ("value of a in main() = %d\n",  a);
  c = sum( a, b);
  printf ("value of c in main() = %d\n",  c);
 
  return 0;
}
 
/* 添加两个整数的函数 */
int sum(int a, int b)
{
    printf ("value of a in sum() = %d\n",  a);
    printf ("value of b in sum() = %d\n",  b);
 
    return a + b;
}
```


