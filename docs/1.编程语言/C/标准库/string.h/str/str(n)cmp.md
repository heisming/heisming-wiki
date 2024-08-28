# strcmp

```c
int strcmp(const char *str1, const char *str2)
```
把 str1 所指向的字符串和 str2 所指向的字符串进行比较。

- str1 -- 要进行比较的第一个字符串。
- str2 -- 要进行比较的第二个字符串。

|返回值|表示|
|-|-|
|< 0| str1 < str2 |
|> 0| str1 > str2 |
|= 0| str1 = str2 |

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[15];	
	char str2[15];
	int ret;
	
	strcpy(str1, "abcdef");
	// strcpy(str2, "ABCDEF");
	strcpy(str2, "A");

	ret = strcmp(str1, str2);
   	printf("ret = %d\n", ret);

	return 0;
}
```
编译并运行
```bash
ret = 32
```

# strncmp

```C
int strncmp(const char *str1, const char *str2, size_t n)
```
把 str1 和 str2 进行比较，最多比较前 n 个字符。

- str1 -- 要进行比较的第一个字符串。
- str2 -- 要进行比较的第二个字符串。
- n -- 要比较的最大字符数。

|返回值|表示|
|-|-|
|< 0| str1 < str2 |
|> 0| str1 > str2 |
|= 0| str1 = str2 |

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[15];	
	char str2[15];
	int ret;
	
	strcpy(str1, "abcdef");
	strcpy(str2, "ABCDEF");

	ret = strncmp(str1, str2, 1);
   	printf("ret = %d\n", ret);

	return 0;
}
```
编译并运行
```bash
ret = 32
```

两个字符串自左向右逐个字符相比（按 ASCII 值大小相比较），直到出现不同的字符或遇 \0 为止。如：
```c
1."A"<"B" 
2."A"<"AB" 
3."Apple"<"Banana" 
4."A"<"a" 
5."compare"<"computer"
```
> 只能比较字符串，即可用于比较两个字符串常量，或比较数组和字符串常量，不能比较数字等其他形式的参数。

ANSI 标准规定，返回值为正数，负数，0 。而确切数值是依赖不同的C实现的。

## 与memcmp的区别
strncmp函数和memcmp函数在C语言中都是用于比较的函数，但它们在用途、比较方式以及处理的数据类型上存在显著差异。

1. 函数用途
- strncmp函数：主要用于比较两个字符串的前n个字符。它属于字符串处理函数，用于在不需要比较整个字符串时，快速判断字符串的前部分是否相同。
- memcmp函数：则用于比较两个内存块（memory blocks）的前n个字节。它属于内存操作函数，不局限于字符串，可以比较任何类型的内存数据。
2. 比较方式
- strncmp函数：按字符（character-wise）进行比较，直到遇到第一个不同的字符或达到指定的字符数n为止。如果两个字符串的前n个字符完全相同，则返回0；如果s1小于s2（按ASCII码值比较），则返回小于0的值；如果s1大于s2，则返回大于0的值。
- memcmp函数：按字节（byte-wise）进行比较，直接比较内存块中的字节值，直到遇到第一个不同的字节或达到指定的字节数n为止。如果两个内存块的前n个字节完全相同，则返回0；如果第一个不同的字节在str1中较小（即其ASCII码值较小），则返回小于0的值；如果第一个不同的字节在str2中较小，则返回大于0的值。
3. 处理的数据类型
- strncmp函数：专门用于处理字符串（char* 类型），它会自动处理字符串的结束符'\0'。但是，如果指定的比较长度n大于字符串的实际长度，strncmp会继续比较字符串结束符后面的内存内容（这通常不是预期的行为）。
- memcmp函数：不局限于字符串，它可以比较任何类型的内存数据（void* 类型）。由于memcmp不处理字符串的结束符'\0'，因此在比较字符串时，需要确保比较的长度n不会超出字符串的实际长度，否则可能会比较到字符串结束符后面的内存内容。
4. 示例

假设有以下代码段：
```c
char str1[] = "Hello, World!";  
char str2[] = "Hello, C Programmers!";  

int result1 = strncmp(str1, str2, 7); // 比较前7个字符，结果为0  
int result2 = memcmp(str1, str2, 7); // 比较前7个字节，结果也为0（因为前7个字节相同）

// 但如果比较更多字节，结果将不同
int result3 = memcmp(str1, str2, 18); // 比较前18个字节，结果不为0（因为str1和str2的长度不同）
```
在这个例子中，strncmp和memcmp在比较前7个字符/字节时给出了相同的结果，但当比较更多字节时，memcmp揭示了str1和str2在内存中的实际差异。

综上所述，strncmp和memcmp在C语言中各有其用途和比较方式，选择哪个函数取决于具体的比较需求和数据类型。