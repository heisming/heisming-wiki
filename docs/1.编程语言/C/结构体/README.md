# 结构体

C**数组**允许定义可存储相同类型数据项的变量

**结构**是一种用户自定义的可用的数据类型，**允许存储不同类型的数据项。**

结构体中的数据成员可以是基本数据类型（如 int、float、char 等），也可以是其他结构体类型、指针类型等。

## 定义
```c
struct tag {
  member-list1;
  member-list2;
  member-list3;
  // ...
} variable-list;
```
- tag 是结构体标签。
- member-list 是标准的变量定义，例`int num;`。
- variable-list 结构变量，定义在结构的末尾，最后一个分号之前，您可以指定一个或多个结构变量。

```c
struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int bood_id;
} book;
```
> 在一般情况下，`tag、member-list、variable-list` 这 3 部分至少要出现 2 个。

```c
struct // 这个结构体并没有标明其标签
{
	/* 此声明声明了拥有3个成员的结构体，
	分别为整型的a，字符型的b和双精度的c */
	int a;
	char b; 
	double c;
} s1; // 同时又声明了结构体变量s1

struct SIMPLE
{
	/* 此声明声明了拥有3个成员的结构体，
	分别为整型的a，字符型的b和双精度的c */
	int a;
	char b; 
	double c;
}; // 结构体的标签被命名为,没有声明变量

//用SIMPLE标签的结构体，另外声明了变量t1、t2、t3
struct SIMPLE t1, t2[20], *t3; 

// 也可以用typedef创建新类型
typedef struct
{
	int a;
	char b;
	double c;
} Simple;
// 现在可以用Simple作为类型声明新的结构体变量
Simple u1, u2[20], *u3;
```
在上面的声明中，第一个和第二声明被编译器当作两个完全不同的类型，即使他们的成员列表是一样的，如果令 `t3=&s1`，则是非法的。

**结构体的成员可以包含其他结构体**，也可以**包含指向自己结构体类型的指针**，而通常这种指针的应用是为了实现一些更高级的数据结构如链表和树等。

```c
struct SIMPLE
{
	int a;
}; 

// 此结构体的声明包含了其他的结构体
struct COMPLEX
{
	char string[100];
	struct SIMPLE s;
}

// 此结构体的声明包含了指向自己类型的指针
struct NODE
{
	char string[100];
	struct NODE *child;
}
```
如果两个结构体互相包含，则需要对其中一个结构体进行不完整声明。
```c
struct B; // 对结构体B进行不完整声明

struct A
{
	struct B *partner; // 结构体A中包含指向结构体B的指针
}; 

// 结构体B中包含指向结构体A的指针，在A声明完后，B也随之进行声明
struct B
{
	struct A *partner;
}
```

## 结构体变量的初始化
```c
#include <stdio.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C Language", "Barry", "Program", 1};

int main()
{
	printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", book.title, book.author, book.subject, book.book_id);
   	return 0;
}
```
编译并执行
```bash
title : C Language
author: Barry
subject: Program
book_id: 1
```

## 访问结构成员
> 使用成员访问运算符`.`
```c
#include <stdio.h>
#include <string.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C Language", "Barry", "Program", 1};

int main()
{
	struct Books Book1; /* 声明 Book1，类型为 Books */

	strcpy(Book1.title, "C Programming");
    // strcpy(Book1.author, "Nuha Ali");
   	strcpy(Book1.subject, "C Programming Tutorial");
	Book1.book_id = 6495407;

	printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", Book1.title, Book1.author, Book1.subject, Book1.book_id);
   	return 0;
}
```
编译并执行
```bash
title : C Programming
author: 
subject: C Programming Tutorial
book_id: 6495407
```

## 指向结构的指针
定义指向结构的指针，方式与定义指向其他类型变量的指针相似
```c
struct Books *struct_pointer;
```
可以在定义的指针变量中存储结构变量的地址
```c
struct_pointer = &Book1;
```
为了使用指向该结构的指针访问结构的成员，必须使用 `->`运算符
```c
struct_pointer->title;
```
```C
#include <stdio.h>
#include <string.h>

struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C Language", "Barry", "Program", 1};

// 函数声明(参数为指向Books结构的指针)
void printBook(struct Books *book);
int main()
{
	struct Books Book1; /* 声明 Book1，类型为 Books */
	
	strcpy(Book1.title, "C Programming");
   	// strcpy(Book1.author, "Nuha Ali");
    strcpy(Book1.subject, "C Programming Tutorial");
	Book1.book_id = 6495407;
	
	/* 通过传 Book1 的地址来输出 Book1 信息 */
	printBook(&Book1);
		
   	return 0;
}

void printBook(struct Books *book)
{
	printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", book->title, book->author, book->subject, book->book_id);
}
```
编译并执行
```bash
title : C Programming
author: 
subject: C Programming Tutorial
book_id: 6495407
```
> 更加抽象化

## 大小的计算
> 使用 `sizeof` 运算符来计算结构体的给定类型或变量的字节大小

对于结构体，sizeof 将返回结构体的总字节数，包括所有成员变量的大小以及可能的填充字节。
```C
#include <stdio.h>

struct Books
{
   char  title[50]; // 50个字节
   char  author[50];// 50个字节
   char  subject[100];// 100个字节
   int   book_id;// 4个字节
} book = {"C Language", "Barry", "Program", 1};

int main()
{
	struct Books Book1; /* 声明 Book1，类型为 Books */
	
	printf("Book1 大小：%zu 字节\n", sizeof(Book1));
		
   	return 0;
}
```
编译并执行
```bash
Book1 大小：204 字节
```
>❗注意，结构体的大小可能会受到编译器的优化和对齐规则的影响，编译器可能会在结构体中插入一些额外的填充字节以对齐结构体的成员变量，以提高内存访问效率。因此，结构体的实际大小可能会大于成员变量大小的总和，如果你需要确切地了解结构体的内存布局和对齐方式，可以使用 `offsetof` 宏和 `__attribute__((packed))` 属性等进一步控制和查询结构体的大小和对齐方式。

### 结构体内存大小对齐原则

- 结构体变量的首地址能够被其最宽基本类型成员的大小所整除。
- 结构体每个成员相对于结构体首地址的偏移量(offset)都是成员大小的整数倍，如有需要编译器会在成员之间加上填充字节(internal adding)。即结构体成员的末地址减去结构体首地址(第一个结构体成员的首地址)得到的偏移量都要是对应成员大小的整数倍。
- 结构体的总大小为结构体最宽基本类型成员大小的整数倍，如有需要编译器会在成员末尾加上填充字节。
- 成员变量内存相对起始位置为数据类型所占内存的整数倍（例如：int 类型数据相对起始位置必须是结构体中4字节的整数倍），若不足则需要对齐不足部分的内存(内存补充给前一个变量)。
- 结构体所占总内存为其成员变量中所占空间最大数据类型的整数倍。
- 结构体中每个成员相对于结构体起始地址的偏移量必须是该成员大小的倍数。

其中，最宽基本类型指的是 `long double`、`double` 和 `long long` 中占用空间最大的类型。如果结构体中没有这些类型的成员，则以 `int` 或者 `char` 作为最宽基本类型。

以下是一个示例，展示了一个结构体的内存对齐过程：
```c
struct Example {
    char a;       // 1 byte
    int b;        // 4 bytes
    double c;     // 8 bytes
    short d;      // 2 bytes
};
```
根据内存对齐规则，该结构体中的成员变量将按照以下方式进行排列：
```c
------------------------|------------------------|
|  char a                |  padding (3 bytes)      |
|------------------------|------------------------|
|  int b                 |                        |
|------------------------|------------------------|
|  double c              |                        |
|------------------------|------------------------|
|  short d               |  padding (6 bytes)      |
|------------------------|------------------------
```
由于 `int` 和 `double` 的大小都是 4 的倍数和 8 的倍数，因此它们的偏移量和结构体总大小都可以被 4 和 8 整除，而 short 的大小为 2，因此需要填充 6 个字节以满足偏移量为 8 的要求。

**验证**
```C
#include <stdio.h>
int main()
{
	struct Example Example1;
	
	printf("Example1 大小：%zu 字节\n", sizeof(Example1));
		
   	return 0;
}
```
编译并运行
```bash
Example1 大小：24 字节
```

## 双向循环链表

## 结构体数组