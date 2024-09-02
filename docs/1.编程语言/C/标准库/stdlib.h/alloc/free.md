# free

```c
void free(void *ptr)
```

> 用于释放由 `malloc(), calloc(), realloc()` 等动态分配函数分配的内存, 可以避免内存泄漏，确保程序有效地管理内存。

ptr -- 指针指向一个要释放的动态分配内存的内存块，如果传递的参数是一个空指针，则不会执行任何动作。

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

- **释放正确的内存**：只能释放通过动态内存分配函数分配的内存，不能释放由其他方式分配的内存（例如局部变量或全局变量）。
- **避免重复释放**：同一个内存块不能多次释放，否则可能导致未定义行为。
- **释放后指针处理👍**：释放内存后，指针仍然指向已释放的内存位置。为了避免悬空指针，可以将指针设为 NULL。
  - `free(str); str = NULL;`
- **检查空指针**：调用 free() 前最好检查指针是否为空，以确保程序稳定性。
  - `if (str = NULL) { free(str); str = NULL; }`

## 内存泄漏与悬空指针
- **内存泄漏**：如果动态分配的内存没有被释放或丢失了对其的引用，内存将无法再被程序使用，造成内存泄漏。
- **悬空指针**：指向已释放内存的指针称为悬空指针。如果悬空指针被再次访问，会导致未定义行为，可能引起程序崩溃或数据损坏。

> 在调用 free() 之后，将指针设置为 NULL。

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	char *str;
	
	// 动态分配内存
	str = (char *)malloc(100 * sizeof(char));
	if (str == NULL)
	{
		printf("内存分配失败\n");
		return 1;
	}
	
	// 使用分配的内存
	snprintf(str, 100, "Hello,Ming!");
	printf("String = %s, Address = %p\n", str, str);
	
	free(str); // 释放已分配的内存
	
	printf("Address = %p\n", str); // 依然指向分配的地址
	
	// 将指针设置为 NULL，避免悬空指针
	str = NULL;
	if (str == NULL)
	{
		printf("str is NULL\n");
	}
	
   	return 0;
}
```
编译并运行
```bash
String = Hello,Ming!, Address = 0x56357fd972a0
Address = 0x56357fd972a0
str is NULL
```
