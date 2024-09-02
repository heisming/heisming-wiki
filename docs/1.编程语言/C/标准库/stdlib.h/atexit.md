# atexit

```c
int atexit(void (*func)(void))
```
当程序**正常终止**时，调用指定的函数 func。您可以在任何地方注册你的终止函数，但它会在程序终止的时候被调用。

- func -- 在程序终止时被调用的函数。

如果函数成功注册，则该函数返回零，否则返回一个非零值。

```c
#include <stdio.h>
#include <stdlib.h>

void fun()
{
	printf("这里是函数fun\n");
}

int main()
{
	// 注册终止函数
	atexit(fun);
	printf("启动主程序...\n");

   	printf("退出主程序...\n");
   	return 0;
}
```
编译并执行
```bash
启动主程序...
退出主程序...
这里是函数fun
```