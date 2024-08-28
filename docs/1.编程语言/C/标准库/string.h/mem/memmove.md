# memmove

```c
void *memmove(void *str1, const void *str2, size_t n)
```
- str1 -- 指向用于存储复制内容的目标数组，类型强制转换为 void* 指针。
- str2 -- 指向要复制的数据源，类型强制转换为 void* 指针。
- n -- 要被复制的字节数。

从 str2 复制 n 个字符到 str1，但是在重叠内存块这方面，memmove() 是比 memcpy() 更安全的方法。
- 如果目标区域和源区域有重叠的话，memmove() 能够保证源串在被覆盖之前将重叠区域的字节拷贝到目标区域中，复制后源区域的内容会被更改。
- 如果目标区域与源区域没有重叠，则和 memcpy() 函数功能相同。

返回一个指向目标存储区 str1 的指针。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char dest[] = "oldstring";
	const char src[] = "newstring";	
	
	printf("使用前：dest = %s, src = %s\n", dest, src);
	
	memmove(dest, src, strlen(src));
	
	printf("使用前：dest = %s, src = %s\n", dest, src);

	return 0;
}
```
编译并运行
```bash
使用前：dest = oldstring, src = newstring
使用前：dest = newstring, src = newstring
```
