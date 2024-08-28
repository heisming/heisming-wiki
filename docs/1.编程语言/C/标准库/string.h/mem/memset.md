# memset

```c
void *memset(void *str, int c, size_t n)
```
- str -- 指向要填充的内存区域的指针。
- c -- 要设置的值，通常是一个无符号字符。
- n -- 要被设置为该值的字节数。

返回一个指向存储区 str 的指针。

- memset() 并不对指针 ptr 指向的内存区域做边界检查，因此使用时需要确保 ptr 指向的内存区域足够大，避免发生越界访问。
- memset() 的第二个参数 value 通常是一个 int 类型的值，但实际上只使用了该值的低8位。这意味着在范围 0 到 255 之外的其他值可能会产生未定义的行为。
- num 参数表示要设置的字节数，通常是通过 sizeof() 或其他手段计算得到的。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str[50];
	
	strcpy(str, "This is memset");
	puts(str);
	
	memset(str, '$', 7);
	puts(str);

	return 0;
}
```
编译并运行
```bash
This is memset
$$$$$$$ memset
```

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char buf[10];
	// 将 buf 数组的前5个字节设置为字符 'A'，并添加字符串终止符
	memset(buf, 'A', 5);
	buf[5] = '\0'; // 确保添加字符串终止符
	printf("buf after: %s\n", buf);
	
	// 将 buffer 数组清零，使用 '\0' 替代 0
	memset(buf, '\0', sizeof(buf)); // 使用'\0'确保一致性及可读性
	printf("buf after: %s\n", buf);

	return 0;
}
```
编译并运行
```bash
buf after: AAAAA
buf after: 
```
