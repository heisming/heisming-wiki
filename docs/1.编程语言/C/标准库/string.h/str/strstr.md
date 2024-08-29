# strstr

```c
char *strstr(const char *haystack, const char *needle)
```
在字符串 haystack 中查找第一次出现字符串 needle 的位置，不包含终止符 '\0'。

- haystack -- 要被检索的 C 字符串。
- needle -- 在 haystack 字符串内要搜索的小字符串。

返回在 haystack 中第一次出现 needle 字符串的位置，如果未找到则返回 NULL。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	const char haystack[] = "ABCDDCBA";
	const char needle[] = "CDDC";
	char *ret;
	
	ret = strstr(haystack, needle);

	printf("子字符串是： %s\n", ret);
	
	return 0;
}
```
编译并运行
```bash
子字符串是： CDDCBA
```
