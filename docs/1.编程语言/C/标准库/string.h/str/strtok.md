# strtok

```c
char *strtok(char *str, const char *delim)
```
分解字符串 str 为一组字符串，delim 为分隔符。

- str -- 要被分解成一组小字符串的字符串。
- delim -- 包含分隔符的 C 字符串。

返回被分解的第一个子字符串，如果没有可检索的字符串，则返回一个空指针。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str[80] = "This-is-ming-website";
	const char s[2] = "-";
	char *token;
	
	// 获取第一个子字符串
	token = strtok(str, s);
	// 继续获取其他的子字符串
	while(token != NULL)
	{
		printf("%s\n", token);
		token = strtok(NULL, s);
	}
	
	printf("切割后：%s\n", str);
	
	// 原字符串的改动是切分符原位置均更改为 '\0'，所以内容都还在，可以通过逐个字符打印检验。
	for (int i = 0; i < 34; i++)
	{
        printf("%c", str[i]);
	}
	
	return 0;
}
```
编译并执行
```bash
This
is
ming
website
切割后：This
Thisismingwebsite
```