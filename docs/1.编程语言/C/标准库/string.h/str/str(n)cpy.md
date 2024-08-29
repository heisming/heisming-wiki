# strcpy

```c
char *strcpy(char *dest, const char *src)
```
把 src 所指向的字符串复制到 dest。

- dest -- 指向用于存储复制内容的目标数组(>=src)。
- src -- 要复制的字符串。

返回一个指向最终的目标字符串 dest 的指针。

<!-- ```c
#include <stdio.h>
#include <string.h>

int main()
{
	char src[40];
	char dest[100];
	
	memset(dest, '\0', sizeof(dest));
	
	strcpy(src, "This is liming.wiki");
	strcpy(dest, src);
	
   	printf("finally string is: %s\n", dest);

   	return 0;
}
```
编译并执行
```bash
finally string is: This is liming.wiki
``` -->

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[] = "Sample string";
	char str2[40];
	char str3[40];

	strcpy(str2, str1);
	strcpy(str3, "Copy String");

   	printf ("str1: %s\nstr2: %s\nstr3: %s\n",str1,str2,str3);

   	return 0;
}
```
编译并执行
```bash
str1: Sample string
str2: Sample string
str3: Copy String
```

# strncpy

```c
char *strncpy(char *dest, const char *src, size_t n)
```
把 src 所指向的字符串复制到 dest，最多复制 n 个字符。

- dest -- 指向用于存储复制内容的目标数组。
- src -- 要复制的字符串，长度小于n的部分用空字节填充。
- n -- 要从源中复制的字符数。

返回最终复制的字符串。

```c
// 使用函数 memset() 来清除内存位置。
#include <stdio.h>
#include <string.h>

int main()
{
	char src[40];
	char dest[100];
	
	memset(dest, '\0', sizeof(dest));
	
	strcpy(src, "This is liming.wiki");
	strncpy(dest, src, 10);
	
   	printf("finally string is: %s\n", dest);

   	return 0;
}
```
编译并执行
```bash
finally string is: This is li
```