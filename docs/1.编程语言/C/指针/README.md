# 指针
> 一个合格的C开发者，对于指针的理解和运用是基本功

每一个变量都有一个内存位置，每一个内存位置都定义了可使用 `&` 运算符访问的地址，它表示了在内存中的一个地址。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	int var_runoob = 10;
	int *p; // 定义指针变量
	p = &var_runoob;
	
	printf("var_runoob 变量的地址： %p\n", p);

	return 0;
}
```
编译并执行
```bash
num 变量的地址： 0x7ffd9702d514
```
![p](https://www.runoob.com/wp-content/uploads/2014/09/c-pointer.png)
> 什么是内存地址以及如何访问它

## 什么是指针
> **指针即内存地址**：`指针变量`是用来存放内存地址的变量。

```c
// 声明
type *var_name;

int    *ip;    /* 一个整型的指针 */
double *dp;    /* 一个 double 型的指针 */
float  *fp;    /* 一个浮点型的指针 */
char   *ch;    /* 一个字符型的指针 */
```
无论什么数据类型，对应指针的值的类型代表内存地址的长的十六进制数。

> 不同数据类型的指针之间唯一的不同是，指针所指向的变量或常量的数据类型不同。

## 使用

1. 定义一个指针变量、
2. 把变量地址赋值给指针、
3. 访问指针变量中可用地址的值。

通过使用一元运算符 `*` 来返回位于操作数所**指定地址的变量的值**。
```c
#include <stdio.h>

int main()
{
	int num = 20; /* 实际变量的声明 */
	int *ip;	  /* 指针变量的声明 */
	
	ip = &num; /* 在指针变量中存储 num 的地址 */
	
	printf("num 变量的地址： %p\n", &num);
	
	/* 在指针变量中存储的地址 */
	printf("ip 变量存储的地址: %p\n", ip);
	
	/* 使用指针访问值 */
	printf("ip 变量的值 %d\n", *ip);
	return 0;
}
```
编译并执行
```bash
num 变量的地址： 0x7fff569eef24
ip 变量存储的地址: 0x7fff569eef24
ip 变量的值 20
```

## NULL指针
> 在变量声明的时候，如果没有确切的地址可以赋值，为指针变量赋一个 NULL 值是一个良好的编程习惯。赋为 NULL 值的指针被称为**空指针**。
```c
#include <stdio.h>

int main()
{
	int *ip = NULL;
	
	printf("ip 的地址： %p\n", ip);
	
	return 0;
}
```
编译并执行
```bash
ptr 的地址是 0x0
```
内存地址 0 有特别重要的意义(操作系统保留)，它表明该指针不指向一个可访问的内存位置。

```c
// 检查一个空指针
if (p)  /* 如果 p 非空，则完成 */
if (!p) /* 如果 p 为空，则完成 */
```
