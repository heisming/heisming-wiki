# strtod

```c
double strtod(const char *str, char **endptr)
```
把参数 str 所指向的字符串转换为一个浮点数（类型为 double 型）。

如果 endptr 不为空，则指向转换中最后一个字符后的字符的指针会存储在 endptr 引用的位置。


- str -- 要转换为双精度浮点数的字符串。
- endptr -- 对类型为 char* 的对象的引用，其值由函数设置为 str 中数值后的下一个字符。

返回转换后的双精度浮点数，如果没有执行有效的转换，则返回零（0.0）。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char str[30] = "20.240830 Test";
	char *p;
	double ret;
	
	ret = strtod(str, &p);
   	printf("数字是 = %lf\n", ret);
	printf("字符串值 = %s\n", p);

   	return 0;
}
```
编译并运行
```bash
数字是 = 20.240830
字符串值 =  Test
```