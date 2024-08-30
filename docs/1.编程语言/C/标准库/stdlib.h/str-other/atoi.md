# atoi

```c
int atoi(const char *str)
```
把参数 str 所指向的字符串转换为一个整数（类型为 int 型）。

- str -- 要转换为整数的字符串。

返回转换后的长整数，如果没有执行有效的转换，则返回零。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	int val;
	char str[20];
	
	strcpy(str, "976236");
	val = atoi(str);
   	printf("字符串值 = %s, 整型值 = %d\n", str, val);

	strcpy(str, "heisming");
	val = atoi(str);
	printf("字符串值 = %s, 整型值 = %d\n", str, val);

   	return 0;
}
```
编译并运行
```bash
字符串值 = 976236, 整型值 = 976236
字符串值 = heisming, 整型值 = 0
```