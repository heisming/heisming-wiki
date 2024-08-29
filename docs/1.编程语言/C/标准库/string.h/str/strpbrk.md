# strpbrk

```c
char *strpbrk(const char *str1, const char *str2)
```
检索字符串 str1 中第一个匹配字符串 str2 中字符的字符，不包含空结束字符。

依次检验字符串 str1 中的字符，当被检验字符在字符串 str2 中也包含时，则停止检验，并返回该字符位置。

`ABC` -> `DDDDDDDDDDADDDDDDDD` 包含A, 返回A的位置。

- str1 -- 要被检索的 C 字符串。
- str2 -- 该字符串包含了要在 str1 中进行匹配的字符列表。

返回 str1 中第一个匹配字符串 str2 中字符的字符数，如果未找到字符则返回 NULL。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	const char str1[] = "asdfghjdofgjogd";
	const char str2[] = "do";
	char *ret;
	
	ret = strpbrk(str1, str2);
	if (ret)
	{
		printf("第一个匹配的字符是： %c\n", *ret);
	}
	else
	{
		printf("Not Found");
	}
	
	return 0;
}
```
编译并执行
```bash
第一个匹配的字符是： d
```


