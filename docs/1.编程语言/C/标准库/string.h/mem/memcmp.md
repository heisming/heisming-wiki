# memcmp

```c
int memcmp(const void *str1, const void *str2, size_t n);
```
把存储区 str1 和存储区 str2 的前 n 个字节进行比较。

- str1 -- 指向内存块的指针。
- str2 -- 指向内存块的指针。
- n -- 要被比较的字节数。

|返回值|表示|
|-|-|
|< 0| str1 < str2 |
|> 0| str1 > str2 |
|= 0| str1 = str2 |

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[15];	
	char str2[15];
	int ret;
	
	memcpy(str1, "abcdef", 6);
	memcpy(str2, "ABCDEF", 6);

	ret = memcmp(str1, str2, 5);
   	printf("ret = %d\n", ret);

	return 0;
}
```
编译并运行
```bash
ret = 32
```