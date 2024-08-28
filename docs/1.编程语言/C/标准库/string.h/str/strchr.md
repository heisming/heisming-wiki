# strchr

```c
char *strchr(const char *str, int c)
```
在参数 str 所指向的字符串中搜索第一次出现字符 c（一个无符号字符）的位置。
- str -- 要查找的字符串。
- c -- 要查找的字符。

如果在字符串 str 中找到字符 c，则函数返回指向该字符的指针，如果未找到该字符则返回 NULL。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	const char str[] = "https://www.liming.wiki";
	const char ch = 'i';
	char *p;
	p = strchr(str, ch);
	if (NULL == p)
	{
		printf("没有找到字符%c\n", ch);
	}
	else
	{
		printf("字符 %c 出现的位置为 %ld。\n", ch, p - str + 1);
		printf("|%c| 之后的字符串是 - |%s|\n", ch, p);
	}
	
	return 0;
}
```
编译并执行
```bash
字符 i 出现的位置为 14。
|i| 之后的字符串是 - |iming.wiki
```

