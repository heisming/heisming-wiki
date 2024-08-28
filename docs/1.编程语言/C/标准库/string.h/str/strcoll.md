# strcoll

```c
int strcoll(const char *str1, const char *str2)
```
把 str1 和 str2 进行比较，结果取决于 `LC_COLLATE` 的位置设置。

- str1 -- 要进行比较的第一个字符串。
- str2 -- 要进行比较的第二个字符串。

|返回值|表示|
|-|-|
|< 0| str1 < str2 |
|> 0| str1 > str2 |
|= 0| str1 = str2 |

```c
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[15];	
	char str2[15];
	int ret;
	
	strcpy(str1, "abc");
	strcpy(str2, "AAB");
	
	ret = strcoll(str1, str2);

   	printf("ret = %d\n", ret);

	return 0;
}
```
编译并运行
```bash
ret = 32
```

## 与strcmp的区别

strcoll和strcmp都是C语言标准库中的字符串比较函数，但它们在功能和行为上存在一些关键区别。

功能概述

- strcmp：字符串比较函数（string compare）的缩写，用于比较两个字符串并根据比较结果返回整数。它是根据ASCII值逐字符比较两个字符串，直到出现不同的字符或遇到字符串结束符\0为止。如果两个字符串相等，则返回0；如果第一个字符串小于第二个字符串，则返回负数；如果第一个字符串大于第二个字符串，则返回正数。
- strcoll：也是用于比较两个字符串的函数，但它会根据程序当前的语言环境（locale）中的LC_COLLATE设置来比较字符串。LC_COLLATE决定了字符串的比较和排序规则。默认情况下（即LC_COLLATE为"POSIX"或"C"时），strcoll的行为与strcmp相同，即按ASCII值比较。但在其他语言环境下，如简体中文环境，strcoll可能会按照拼音或其他特定规则来比较字符串。
- 
主要区别

比较规则：
- strcmp始终按ASCII值比较字符串。
- strcoll则根据LC_COLLATE的设置来比较字符串，可能包括按照拼音、笔划或其他特定语言规则进行比较。

语言环境依赖性：
- strcmp不依赖于语言环境，其行为在所有情况下都是一致的。
strcoll的行为受当前语言环境（locale）的LC_COLLATE设置影响，因此在不同的语言环境下可能会有不同的行为。

用途：
- strcmp适用于不需要考虑语言特定排序规则的一般字符串比较场景。
- strcoll适用于需要按照特定语言或地区的排序规则来比较字符串的场景，如国际化软件中的字符串排序和比较。
示例
假设有两个字符串"apple"和"Apple"，以及当前的LC_COLLATE设置为简体中文环境（可能支持按拼音排序）：

使用strcmp比较时，由于"a"的ASCII值小于"A"，因此strcmp("apple", "Apple")将返回负数。
使用strcoll比较时，如果LC_COLLATE设置为支持按拼音排序的规则，那么"apple"和"Apple"可能会被视为相同的字符串（忽略大小写差异），从而返回0；或者如果规则严格区分大小写，则可能返回负数或正数，具体取决于实现。但无论如何，strcoll的比较结果都会受到LC_COLLATE设置的影响。
结论
strcoll和strcmp的主要区别在于它们如何根据当前的语言环境来比较字符串。选择哪个函数取决于你的具体需求，是否需要考虑语言特定的排序规则。
