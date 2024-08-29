# strspn

```c
size_t strspn(const char *str1, const char *str2)
```
检索字符串 str1 中第一个不在字符串 str2 中出现的字符下标。

- str1 -- 要被检索的 C 字符串。
- str2 -- 该字符串包含了要在 str1 中进行匹配的字符列表。

返回 str1 中第一个不在字符串 str2 中出现的字符下标。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	int len;
	const char str1[] = "ADF4SDSD53AF4";
	const char str2[] = "ABCD";

	len = strspn(str1, str2);

	printf("初始段匹配长度 %d\n", len);
	
	return 0;
}
```
编译并执行
```bash
初始段匹配长度 2
```


# strcspn

```c
size_t strcspn(const char *str1, const char *str2)
```
检索字符串 str1 开头连续有几个字符都不含字符串 str2 中的字符。

- str1 -- 要被检索的 C 字符串。
- str2 -- 该字符串包含了要在 str1 中进行匹配的字符列表。

返回 str1 开头连续都不含字符串 str2 中字符的字符数。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	int len;
	const char str[] = "ABCDEF00123456";
	const char find[] = "013";
	
	len = strcspn(str, find);
	
   	printf("第一个匹配的字符是在: %d\n", len + 1);

   	return 0;
}
```
编译并执行
```bash
第一个匹配的字符是在: 7
```
