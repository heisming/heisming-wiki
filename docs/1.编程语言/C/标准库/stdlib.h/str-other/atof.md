# atof

```c
double atof(const char *str)
```
把参数 str 所指向的字符串转换为一个浮点数（类型为 double 型）。

- str -- 要转换为浮点数的字符串。

返回转换后的双精度浮点数，如果没有执行有效的转换，则返回零（0.0）。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	float val;
	char str[20];
	
	strcpy(str, "976236");
	val = atof(str);
   	printf("字符串值 = %s, 浮点值 = %f\n", str, val);

	strcpy(str, "heisming");
	val = atof(str);
	printf("字符串值 = %s, 浮点值 = %f\n", str, val);

   	return 0;
}
```
编译并运行
```bash
字符串值 = 976236, 浮点值 = 976236.000000
字符串值 = heisming, 浮点值 = 0.000000
```
