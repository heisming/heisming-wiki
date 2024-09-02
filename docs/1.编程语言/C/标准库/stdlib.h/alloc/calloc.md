# calloc
```c
void *calloc(size_t nitems, size_t size)
```
分配所需的内存空间，并返回一个指向它的指针。

malloc 和 calloc 之间的不同点是，
malloc 不会设置内存为零，而 calloc 会设置分配的内存为零。

> ❗calloc() 函数将分配的内存全部初始化为零。如果不需要初始化，可以使用 malloc() 函数代替。另外，使用 calloc() 函数时需要注意，如果分配的内存块过大，可能会导致内存不足的问题。

- nitems -- 要被分配的元素个数。
- size -- 元素的大小。

返回一个指针，指向已分配的内存。如果请求失败，则返回 `NULL`。

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	int i, n;
	int *a;
	
   	printf("要输入的元素个数：");
	scanf("%d", &n);
	
	a = (int *)calloc(n, sizeof(int));
	printf("输入 %d 个数字: \n", n);
	for (i = 0; i < n; i++)
	{
		scanf("%d", &a[i]);
	}
	
	printf("输入的数字为：");
	for (i = 0; i < n; i++)
	{
		printf("%d", a[i]);
	}
	free(a);
	
   	return 0;
}
```
编译并运行
```bash
要输入的元素个数：3
输入 3 个数字：
22
55
14
输入的数字为：22 55 14
```