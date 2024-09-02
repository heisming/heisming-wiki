# abort

```c
void abort(void);
```
用于立即终止当前程序。该函数会导致程序异常终止，并产生一个核心转储文件（如果系统配置允许）

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
	int errno = 1;
	printf("Starting program...\n");
	// 检测到一个错误
	if (errno)
	{
		printf("Error detected, aborting program...\n");
		abort();
	}
	
	// pass
	printf("I am passed...\n");
	
   	return 0;
}
```
编译并运行
```bash
Starting program...
Error detected, aborting program...
```

**解释**
- abort 函数用于立即终止程序执行，并产生一个核心转储文件。
- 使用 `abort` 函数时，不会执行任何 `atexit` 注册的函数或对象析构函数。
- 通常用于在检测到不可恢复的错误时终止程序。

**注意事项**
- abort 函数会立即终止程序，不会进行任何清理工作。
- **如果希望在程序终止前执行一些清理操作，可以使用 exit 函数代替 abort。**
- 核心转储文件可以用于调试，帮助开发者分析程序异常终止的原因。