# string.h
> 头文件定义了一个变量类型、一个宏和各种操作字符数组的函数。

## 库变量

|变量|描述|
|-|-|
|size_t|这是无符号整数类型，它是 sizeof 关键字的结果。|

## 库宏

|宏|描述|
|-|-|
|NULL|这个宏是一个空指针常量的值。|

## 库函数

|函数|描述|
|-|-|
|[void *memchr(const void *str, int c, size_t n)](../string.h/mem/memchr.md)|在参数 str 所指向的字符串的前 n 个字节中搜索第一次出现字符 c（一个无符号字符）的位置。|
|[int memcmp(const void *str1, const void *str2, size_t n)](../string.h/mem/memcmp.md)|把 str1 和 str2 的前 n 个字节进行比较。|
|[void *memcpy(void *dest, const void *src, size_t n)](../string.h/mem/memcpy.md)|从 src 复制 n 个字符到 dest。|
|[void *memmove(void *dest, const void *src, size_t n)](../string.h/mem/memmove.md)|另一个用于从 src 复制 n 个字符到 dest 的函数。|
|[void *memset(void *str, int c, size_t n)](../string.h/mem/memset.md)|将指定的值 c 复制到 str 所指向的内存区域的前 n 个字节中。|
|[char *strcat(char *dest, const char *src)](../string.h/str/str(n)cat.md#strcat)|把 src 所指向的字符串追加到 dest 所指向的字符串的结尾。|
|[char *strncat(char *dest, const char *src, size_t n)](../string.h/str/str(n)cat.md#strncat)|把 src 所指向的字符串追加到 dest 所指向的字符串的结尾，直到 n 字符长度为止。|
|[char *strchr(const char *str, int c)](../string.h/str/strchr.md)|在参数 str 所指向的字符串中搜索第一次出现字符 c（一个无符号字符）的位置。|
|[int strcmp(const char *str1, const char *str2)](../string.h/str/str(n)cmp.md#strcmp)|把 str1 所指向的字符串和 str2 所指向的字符串进行比较。|
|[int strncmp(const char *str1, const char *str2, size_t n)](../string.h/str/str(n)cmp.md#strncmp)|把 str1 和 str2 进行比较，最多比较前 n 个字节。|
|[int strcoll(const char *str1, const char *str2)](../string.h/str/strcoll.md)|把 str1 和 str2 进行比较，结果取决于 LC_COLLATE 的位置设置。|
|[char *strcpy(char *dest, const char *src)](../string.h/str/str(n)cpy.md#strcpy)|把 src 所指向的字符串复制到 dest。|
|[char *strncpy(char *dest, const char *src, size_t n)](../string.h/str/str(n)cpy.md#strncpy)|把 src 所指向的字符串复制到 dest，最多复制 n 个字符。|
|[size_t strcspn(const char *str1, const char *str2)](../string.h/str/str(c)spn.md#strcspn)|检索字符串 str1 开头连续有几个字符都不含字符串 str2 中的字符。|
|[char *strerror(int errnum)](../string.h/str/strerror.md)|从内部数组中搜索错误号 errnum，并返回一个指向错误消息字符串的指针。|
|[size_t strlen(const char *str)](../string.h/str/strlen.md)|计算字符串 str 的长度，直到空结束字符，但不包括空结束字符。|
|[char *strpbrk(const char *str1, const char *str2)](../string.h/str/strpbrk.md)|检索字符串 str1 中第一个匹配字符串 str2 中字符的字符，不包含空结束字符。也就是说，依次检验字符串 str1 中的字符，当被检验字符在字符串 str2 中也包含时，则停止检验，并返回该字符位置。|
|[char *strrchr(const char *str, int c)](../string.h/str/strrchr.md)|在参数 str 所指向的字符串中搜索最后一次出现字符 c（一个无符号字符）的位置。|
|[size_t strspn(const char *str1, const char *str2)](../string.h/str/str(c)spn.md#strspn)|检索字符串 str1 中第一个不在字符串 str2 中出现的字符下标。|
|[char *strstr(const char *haystack, const char *needle)](../string.h/str/strstr.md)|在字符串 haystack 中查找第一次出现字符串 needle（不包含空结束字符）的位置。|
|[char *strtok(char *str, const char *delim)](../string.h/str/strtok.md)|分解字符串 str 为一组字符串，delim 为分隔符。|
|[size_t strxfrm(char *dest, const char *src, size_t n)](../string.h/str/strxfrm.md)|根据程序当前的区域选项中的 LC_COLLATE 来转换字符串 src 的前 n 个字符，并把它们放置在字符串 dest 中。|