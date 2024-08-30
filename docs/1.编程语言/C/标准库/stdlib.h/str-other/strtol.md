# strtol

```c
long int strtol(const char *str, char **endptr, int base)
```
把参数 str 所指向的字符串根据给定的 base 转换为一个长整数（类型为 long int 型）。

- str -- 要转换为长整数的字符串。
- endptr -- 对类型为 char* 的对象的引用，其值由函数设置为 str 中数值后的下一个字符。
- base -- 基数，必须介于 2 和 36（包含）之间，或者是特殊值 0。如果 base 为 0，则会根据字符串的前缀来判断进制：如果字符串以 '0x' 或 '0X' 开头，则将其视为十六进制；如果字符串以 '0' 开头，则将其视为八进制；否则将其视为十进制。

返回被转换的长整型整数值。如果输入字符串不符合数字格式，strtol() 将返回 0。如果转换结果超出了 long 整数的表示范围，那么将产生溢出，并设置 errno 为 ERANGE。你可以使用 <errno.h> 头文件中的 errno 变量来检查是否有溢出发生。

```c
// 将字符串 "23426" 转换为长整型整数
#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str[] = "23426";
	char *endptr;
	long int num;
	
	num = strtol(str, &endptr, 10);
	if (*endptr != '\0')
	{
   		printf("转换失败：输入字符串不是一个有效的整数。\n");
	}
	else
	{
		printf("转换结果：%ld\n", num);
	}

   	return 0;
}
```
编译并运行
```bash
转换结果：23426
```
如果输入字符串不能被完全转换为整数，strtol() 函数将返回转换成功的部分，而 endptr 将指向未转换部分的第一个字符。在这个例子中，endptr 是指向字符串末尾的空字符 '\0'，表示整个输入字符串都被成功转换为整数。

如果输入字符串包含非数字字符，例如 "12ab"，那么 endptr 将指向 "ab" 的起始位置，指示转换失败。

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str[] = "96lm";
	char *endptr;
	long int num;
	
	num = strtol(str, &endptr, 10);
	if (*endptr != '\0')
	{
   		printf("转换失败：输入字符串不是一个有效的整数。未转换部分：%s\n", endptr);
	}
	else
	{
		printf("转换结果：%ld\n", num);
	}

   	return 0;
}
```
编译并运行
```bash
转换失败：输入字符串不是一个有效的整数。未转换部分：lm
```

## 实例
 解析命令行：
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int str2i(const char *str, char split, char **endptr)
{
	int ret = 0;
	ret = strtol(str, endptr, 10);
	if (*endptr != NULL && **endptr == split)
	{
		*endptr += 1;
	}
	return ret;
}

int main()
{
	char *test_str = "1,2,3,4,5";
	char *end = NULL;
	int res[5] = {0};
	char *p_shift = test_str;
	
	for (int i = 0; i < 5; i++)
	{
		res[i] = str2i(p_shift, ',', &end);
		p_shift = end;
	}
	
	for (int i = 0; i < 5; i++)
	{
		printf("%d ", res[i]);
	}

   	return 0;
}
```
编译并运行
```bash
1 2 3 4 5
```