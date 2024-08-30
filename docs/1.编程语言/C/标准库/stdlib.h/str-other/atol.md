# atol

```c
long int atol(const char *str)
```
把参数 str 所指向的字符串转换为一个长整数（类型为 long int 型）。

- str -- 要转换为长整数的字符串。

返回转换后的长整数，如果没有执行有效的转换，则返回零。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	long val;
	char str[20];
	
	strcpy(str, "976236");
	val = atoi(str);
   	printf("字符串值 = %s, 长整型值 = %ld\n", str, val);

	strcpy(str, "heisming");
	val = atoi(str);
	printf("字符串值 = %s, 长整型值 = %ld\n", str, val);

   	return 0;
}
```
编译并运行
```bash
字符串值 = 976236, 长整型值 = 976236
字符串值 = heisming, 长整型值 = 0
```