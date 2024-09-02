# exit

```c
void exit(int status)
```
立即终止调用进程。任何属于该进程的打开的文件描述符都会被关闭，该进程的子进程由进程 1 继承，初始化，且会向父进程发送一个 SIGCHLD 信号。

- status -- 返回给父进程的状态值。

```c
#include <stdio.h>
#include <stdlib.h>

int main ()
{
   printf("程序的开头....\n");
   
   printf("退出程序....\n");
   exit(0);

   printf("程序的结尾....\n");

   return 0;
}
```
编译并执行
```bash
程序的开头....
退出程序....
```

exit(0) 之后并不是返回被调函数，而是退出了这个可执行文件。

```c
#include <stdio.h>
#include <stdlib.h>

int exit_fn()
{
    printf("被调函数输出1\n");
    exit(0);
    printf("被调函数输出2\n");
    
    return 0;
}

int main ()
{
   	printf("主函数输出1\n");
   	exit_fn( );
	printf("主函数输出2\n");
}
```
编译并执行
```bash
主函数输出1
被调函数输出1
```
