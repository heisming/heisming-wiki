# strrchr

```c
char *strrchr(const char *str, int c)
```
在参数 str 所指向的字符串中搜索最后一次出现字符 c（一个无符号字符）的位置。

- str -- C 字符串。
- c -- 要搜索的字符，通常以整数形式传递（ASCII 值），但是最终会转换回 char 形式。

从字符串的末尾开始向前搜索，直到找到指定的字符或搜索完整个字符串。如果找到字符，它将返回一个指向该字符的指针，否则返回 NULL。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	int len;
	const char str[] = "https://www.liming.wiki";
	const char ch = '.';
	char *ret;
	
	ret = strrchr(str, ch);

	printf("|%c| 之后的字符串是 - |%s|\n", ch, ret);
	
	return 0;
}
```
编译并运行
```bash
|.| 之后的字符串是 - |.wiki|
```

```c
// 在字符串 "Hello, World!" 中查找字符 'o'，并返回最后一个 'o' 的位置：
#include <stdio.h>
#include <string.h>

int main()
{
	const char str[] = "Hello,World!";
	char ch = 'o';
	
	char *lastO = strrchr(str, ch);

	if (lastO != NULL)
	{
		printf("Last '%c' found at position: %ld\n", ch, lastO - str);
	}
	else
	{
		printf("'%c' not found in the string.\n", ch);
	}
	
	return 0;
}
```
编译并执行
```bash
Last 'o' found at position: 7
```
