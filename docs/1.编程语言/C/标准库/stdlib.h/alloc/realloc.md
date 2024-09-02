# realloc

```c
void *realloc(void *ptr, size_t size)
```
尝试重新调整之前调用 `malloc` 或 `calloc` 所分配的 ptr 所指向的内存块的大小。

- ptr -- 指针指向一个要重新分配内存的内存块，该内存块之前是通过调用 malloc、calloc 或 realloc 进行分配内存的。如果为空指针，则会分配一个新的内存块，且函数返回一个指向它的指针。
- size -- 内存块的新的大小，以字节为单位。如果大小为 0，且 ptr 指向一个已存在的内存块，则 ptr 所指向的内存块会被释放，并返回一个空指针。

返回一个指针 ，指向重新分配大小的内存。如果请求失败，则返回 NULL。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	char *str;
	
	// 最初的内存分配
	str = (char *)malloc(15 * sizeof(char));
	strcpy(str, "HEISMING");
	printf("String = %s, Address = %p\n", str, str);
	
	// 重新分配内存
	str = (char *)realloc(str, 25*sizeof(char));
	strcat(str, ".com");
	printf("String = %s, Address = %p\n", str, str);

	free(str); // 释放已分配的内存
	
   	return 0;
}
```
编译并运行
```bash
String = HEISMING, Address = 0x5609427fd2a0
String = HEISMING.com, Address = 0x5609427fe2d0
```

> 那么重新分配内存是继续扩展地址还是重新分配更大的呢？

