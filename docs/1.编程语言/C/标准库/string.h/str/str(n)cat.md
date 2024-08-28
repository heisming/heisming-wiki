# strcat

```c
char *strcat(char *dest, const char *src)
```
把 src 所指向的字符串追加到 dest 所指向的字符串的结尾。
- dest -- 指向目标数组，该数组包含了一个 C 字符串，且足够容纳追加后的字符串。
- src -- 指向要追加的字符串，该字符串不会覆盖目标字符串。

返回一个指向最终的目标字符串 dest 的指针。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char src[50], dest[50];
	strcpy(src, "\tJob");
	strcpy(dest, "Good");
	
	strcat(dest, src);
	printf("Goal is : %s\n", dest);

	return 0;
}
```
编译并运行
```bash
Goal is : Good	Job
```

# strncat

```c
char *strncat(char *dest, const char *src, size_t n)
```
把 src 所指向的字符串追加到 dest 所指向的字符串的结尾，直到 n 字符长度为止。

- dest -- 指向目标数组，该数组包含了一个 C 字符串，且足够容纳追加后的字符串，包括额外的空字符。
- src -- 要追加的字符串。
- n -- 要追加的最大字符数。

返回一个指向最终的目标字符串 dest 的指针。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char src[50], dest[50];
	strcpy(src, "\tJob");
	strcpy(dest, "Good");
	
	strncat(dest, src, 4+1);
	printf("Goal is : %s\n", dest);

	return 0;
}
```
编译并运行
```bash
Goal is : Good	Job
```
