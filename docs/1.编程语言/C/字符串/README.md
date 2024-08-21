# 字符串
在 C 语言中，字符串实际上是使用空字符 \0 结尾(标记字符串的结束)的一维字符数组。

**空字符（Null character）** 又称结束符，缩写 `NUL`，是一个数值为 0 的控制字符，\0 是转义字符，意思是告诉编译器，这不是字符 0，而是空字符。

下面的声明和初始化创建了一个 RUNOOB 字符串。由于在数组的末尾存储了空字符 \0，所以字符数组的大小比单词 RUNOOB 的字符数多一个。
```c
char site[7] = { 'R', 'U', 'N', 'O', 'O', 'B', '\0' };
# 也可以写成这样
char site[] = "RUNOOB";
```
以下是 `C/C++` 中定义的字符串的内存表示：
![STRING](https://www.runoob.com/wp-content/uploads/2014/09/c-strings-2020-12-21.png)

不需要把 null 字符放在字符串常量的末尾。C 编译器会在初始化数组时，自动把 \0 放在字符串的末尾。
```c
#include <stdio.h>

int main()
{
   char site[7] = { 'R', 'U', 'N', 'O', 'O', 'B', '\0' };

   printf("菜鸟教程：%s\n", site);
   return 0;
}
```
上面的代码被编译和执行结果
```c
菜鸟教程：RUNOOB
```
## 常见的字符串操作函数
| 函数 | 操作 | 
| ---- | ---- |
| char strcpy(s1, s2); | 复制字符串 s2 到字符串 s1。 |
| char strcat(s1, s2); | 连接字符串 s2 到字符串 s1 的末尾。 |
| size_t strlen(s1); | 返回字符串 s1 的长度。 |
| int strcmp(s1, s2); | 如果 s1 和 s2 是相同的，则返回 0；如果 s1<s2 则返回小于 0；如果 s1>s2 则返回大于 0。 |
| char strchr(s1, ch); | 返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。 |
| char strstr(s1, s2); | 返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置。 |

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[14] = "runoob";
	char str2[14] = "google";
	char str3[14];
	char str4[14] = "oo";
	const char ch = 'o';
	int len;
	char *chr;
	char *ret;
	
	/* 复制 str1 到 str3 */
	strcpy(str3, str1);
	printf("strcpy(str3, str1):  %s\n", str3);
	
	/* 连接 str1 和 str2 */
	strcat(str1, str2);
	printf("strcat(str1, str2):  %s\n", str1);

	/* 连接后，str1 的总长度 */
	len = strlen(str1);
	printf("strlen(str1):  %d\n", len);
	
	/* 比较s1和s2是否相同 */
	int res = strcmp(str1, str2);
	printf("strcmp(str1, str2):  %d\n", res);
	
	/* 查找字符第一次出现的指针 */
	chr = strchr(str1, ch);
	printf("strchr(str1, ch):  %s\n", chr);
	
	/* 查找字符串第一次出现的指针 */
	ret = strstr(str2, str4);
	printf("strstr(str2, str4):  %s\n", ret);

	return 0;
}
```
编译并执行
```bash
strcpy(str3, str1):  runoob
strcat(str1, str2):  runoobgoogle
strlen(str1):  12
strcmp(str1, str2):  11
strchr(str1, ch):  oobgoogle
strstr(str2, str4):  oogle
```


## 库
```c
#include <string.h>
```
> 头文件定义了一个变量类型、一个宏和各种操作字符数组的函数。
> 
> 提供了一组用于**处理字符串和内存块的函数**。这些函数涵盖了字符串复制、连接、比较、搜索和内存操作等。

### void *memchr
在参数 str 所指向的字符串的前 n 个字节中搜索第一次出现字符 c（一个无符号字符）的位置。
```c
void *memchr(const void *str, int c, size_t n)
```
- str -> 指向要执行搜索的内存块。
- c -> 以 int 形式传递的值，但是函数在每次字节搜索时是使用该值的无符号字符形式。
- n -> 要被分析的字节数。

```c
#include <stdio.h>
#include <string.h>

int main()
{
   const char str[] = "http://www.liming.wiki";
   const char ch = '.';
   char *ret;
	
   ret = (char *)memchr(str, ch, strlen(str));
   printf("|%c| 之后的字符串是 - |%s|\n", ch, ret);
   return 0;
}
```
编译并执行
```bash
|.| 之后的字符串是 - |.liming.wiki|
```

### int memcmp
把**存储区** str1 和**存储区** str2 的前 n 个字节进行比较。
```c
int memcmp(const void *str1, const void *str2, size_t n)
```
- str1 -> 指向内存块的指针。
- str2 -> 指向内存块的指针。
- n -> 要被比较的字节数。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[15];	
	char str2[15];
	int ret;
	
	memcpy(str1, "abcdef", 6);	
	memcpy(str2, "ABCDEF", 6);
	
	ret = memcmp(str1, str2, 5);
	
	if (ret > 0)
	{
	  printf("str2 < str1");
	}
	else if (ret < 0)
	{
		printf("str2 > str1");
	}
	else
	{
		printf("str2 == str1");
	}

	return 0;
}
```
编译并执行
```bash
str2 < str1
```


