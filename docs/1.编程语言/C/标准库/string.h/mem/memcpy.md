# memcpy

```c
void *memcpy(void *str1, const void *str2, size_t n);
```
从存储区 str2 复制 n 个字节到存储区 str1。

- str1 -- 指向用于存储复制内容的目标数组，类型强制转换为 `void* 指针`
- str2 -- 指向要复制的数据源，类型强制转换为 `void* 指针`
- n -- 要被复制的字节数

返回一个指向目标存储区 str1 的指针。

```c
#include <stdio.h>
#include <string.h>

int main()
{
	const char src[50] = "http://www.liming.wiki";	
	char dest[50];
	
	memcpy(dest, src, strlen(src) + 1); // 多了一个反斜杠\0
	
   	printf("strlen(src) = %ld\n", strlen(src));
   	printf("dest = %s\n", dest);

	return 0;
}
```

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char *s = "http://www.liming.wiki";	
	char d[20];
	
	// 从第 11 个字符(r)开始复制，连续复制 6 个字符(runoob)
	memcpy(d, s + 11, 6);
	// 或者 memcpy(d, s + 11*sizeof(char), 6*sizeof(char));
	d[6] = '\0';	
   	printf("d = %s\n", d);

	return 0;
}
```

## 替换
覆盖原有部分数据:
```c
#include <stdio.h>
#include <string.h>

int main()
{
	char src[] = "***";	
	char dest[] = "abcdefg";
	
	printf("使用前：%s\n", dest);
	
	memcpy(dest, src, strlen(src));

   	printf("使用后：%s\n", dest);

	return 0;
}
```
编译并运行
```bash
使用前：abcdefg
使用后：***defg
```