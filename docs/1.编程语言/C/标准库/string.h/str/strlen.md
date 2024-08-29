# strlen

```c
size_t strlen(const char *str)
```
计算字符串 str 的长度，直到空结束字符，但不包括空结束字符。

- str -- 要计算长度的字符串。

返回字符串的长度。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str[50];
	int len;
		
	strcpy(str, "Have a good day!");	
	len = strlen(str);
	
   	printf("|%s| 的长度是 |%d|\n", str, len);

   	return 0;
}
```
编译并运行
```bash
|Have a good day!| 的长度是 |16|
```