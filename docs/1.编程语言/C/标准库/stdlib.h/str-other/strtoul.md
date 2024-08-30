# strtoul

```c
unsigned long int strtoul(const char *str, char **endptr, int base)
```
把参数 str 所指向的字符串根据给定的 base 转换为一个无符号长整数（类型为 unsigned long int 型）。

- str -- 要转换为无符号长整数的字符串。
- endptr -- 对类型为 char* 的对象的引用，其值由函数设置为 str 中数值后的下一个字符。
- base -- 基数，必须介于 2 和 36（包含）之间，或者是特殊值 0。

返回转换后的长整数，如果没有执行有效的转换，则返回一个零值。

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str[30] = "20240830 ming";
	char *p; 
	long ret;
	
	ret = strtoul(str, &p, 10);
	printf("数字（无符号长整数）是: %lu\n", ret);
   	printf("字符串部分是: %s", p);

   	return 0;
}
```
编译并运行
```bash
数字（无符号长整数）是: 20240830
字符串部分是:  ming
```