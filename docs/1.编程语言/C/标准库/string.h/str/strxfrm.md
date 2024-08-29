# strxfrm

```c
size_t strxfrm(char *dest, const char *src, size_t n)
```
根据程序当前的区域选项中的 LC_COLLATE 来转换字符串 src 的前 n 个字符，并把它们放置在字符串 dest 中。

- dest -- 指向存储内容的目标数组的指针，如果参数 n 为 0，则它是一个空指针。
- src -- 要被转换为当前区域设置的 C 字符串。
- n -- 被复制到 str1 的最大字符数。

返回被转换字符串的长度，不包括空结束字符。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char dest[20];
	char src[20];
	int len;	

	strcpy(src, "LimingWiki");
	len = strxfrm(dest, src, 20);
	
	printf("字符串|%s|的长度是|%d|\n", dest, len);
	
	return 0;
}
```
编译并执行
```bash
字符串|LimingWiki|的长度是|10|
```