# typedef
> 为类型取一个新的名字，声明一个新类型

```c
typedef unsigned char BYTE // 单字节数字定义了一个术语 BYTE
```

在这个类型定义之后，标识符 `BYTE` 可作为类型 `unsigned char` 的缩写
```c
BYTE b1, b2;
```
> 按照惯例，定义时会大写字母


对结构体使用 typedef 来定义一个新的数据类型
```c
#include <stdio.h>
#include <string.h>

typedef struct Books
{
   char  title[50]; // 50个字节
   char  author[50];// 50个字节
   char  subject[100];// 100个字节
   int   book_id;// 4个字节
} Book;
// Book = {"C Language", "Barry", "Program", 1};
// error: typedef 'Book' is initialized (use '__typeof__' instead)

int main()
{
	Book book;
	strcpy( book.author, "Barry"); 
	book.book_id = 222;
	
	printf( "书作者 : %s\n", book.author);
   	printf( "书 ID : %d\n", book.book_id);
   	return 0;
}
```
编译并运行
```bash
书作者 : Barry
书 ID : 222
```

## vs #define
#define 是 C 指令，用于为各种数据类型定义别名，与 typedef 类似，但是它们有以下几点不同：
- typedef 仅限于为类型定义符号名称，#define 不仅可以为类型定义别名，也能为数值定义别名，比如您可以定义 1 为 ONE。
- typedef 是由编译器执行解释的，#define 语句是由预编译器进行处理的。

```c
#include <stdio.h>
 
#define TRUE  1
#define FALSE 0
 
int main()
{
   printf( "TRUE 的值: %d\n", TRUE);
   printf( "FALSE 的值: %d\n", FALSE);
 
   return 0;
}
```