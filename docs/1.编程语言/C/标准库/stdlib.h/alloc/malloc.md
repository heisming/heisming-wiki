# malloc

```c
void *malloc(size_t size)
```
分配所需的内存空间，并返回一个指向它的指针。

- size -- 内存块的大小，以**字节**为单位。

返回一个指针，指向已分配大小的内存。如果请求失败，则返回 NULL。

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
