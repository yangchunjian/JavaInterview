(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1062:function(a,e,l){"use strict";l.r(e);var t=l(10),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h2",{attrs:{id:"解答"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[a._v("#")]),a._v(" 解答")]),a._v(" "),l("p",[a._v("zmalloc.c文件的内容如下：")]),a._v(" "),l("p",[a._v("主要函数")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("zmalloc()\nzfree()\nzcalloc()\nzrelloc()\nzstrdup()\n")])])]),l("h3",{attrs:{id:"字长与字节对齐"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#字长与字节对齐"}},[a._v("#")]),a._v(" 字长与字节对齐")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("    CPU一次性能读取数据的二进制位数称为 字长，也就是我们通常所说的32位系统（字长4个字节）、64位系统（字长8个字节）的由来。所谓的8字节对齐，就是指变量的起始地址是8的倍数。比如程序运行时（CPU）在读取long型数据的时候，只需要一个总线周期，时间更短，如果不是8字节对齐的则需要两个总线周期才能读完数据。\n    本文中我提到的8字节对齐是针对64位系统而言的，如果是32位系统那么就是4字节对齐。实际上Redis源码中的字节对齐是软编码，而非硬编码。里面多用sizeof(long)或sizeof(size_t)来表示。size_t（gcc中其值为long unsigned int）和long的长度是一样的，long的长度就是计算机的字长。这样在未来的系统中如果字长（long的大小）不是8个字节了，该段代码依然能保证相应代码可用。\n")])])]),l("h3",{attrs:{id:"zmalloc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zmalloc"}},[a._v("#")]),a._v(" zmalloc")]),a._v(" "),l("p",[a._v("辅助的函数：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("malloc()\nzmalloc_oom_handler【函数指针】\nzmalloc_default_oom()【被上面的函数指针所指向】\nupdate_zmalloc_stat_alloc()【宏函数】\nupdate_zmalloc_stat_add()【宏函数】\n")])])]),l("p",[a._v("zmalloc()和malloc()有相同的函数接口（参数，返回值）。")]),a._v(" "),l("h3",{attrs:{id:"zmalloc-源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zmalloc-源码"}},[a._v("#")]),a._v(" zmalloc()源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void *zmalloc(size_t size) {\n    void *ptr = malloc(size+PREFIX_SIZE);\n \n    if (!ptr) zmalloc_oom_handler(size);\n#ifdef HAVE_MALLOC_SIZE\n    update_zmalloc_stat_alloc(zmalloc_size(ptr));\n    return ptr;\n#else\n    *((size_t*)ptr) = size;\n    update_zmalloc_stat_alloc(size+PREFIX_SIZE);\n    return (char*)ptr+PREFIX_SIZE;\n#endif\n}\n")])])]),l("p",[a._v("参数size是我们 需要分配的内存大小。实际上我们调用malloc 实际分配的大小是size+PREFIX_SIZE。PREFIX_SIZE是一个条件编译的宏，不同的平台有不同的结果，在Linux中其值是sizeof(size_t)，所以我们多分配了一个字长(8个字节)的空间（后面代码可以看到多分配8个字节的目的是用于储存size的值）。\n如果ptr指针为NULL（内存分配失败），调用zmalloc_oom_handler（size）。该函数实际上是一个函数指针指向函数zmalloc_default_oom，其主要功能就是打印错误信息并终止程序。\n// oom是out of memory（内存不足）的意思")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v('static void zmalloc_default_oom(size_t size) {\n    fprintf(stderr, "zmalloc: Out of memory trying to allocate %zu bytes\\n",\n        size);\n    fflush(stderr);\n    abort();\n}\n')])])]),l("p",[a._v("接下来是宏的条件编译，我们聚焦在#else的部分。")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("*((size_t*)ptr) = size;\nupdate_zmalloc_stat_alloc(size+PREFIX_SIZE);\nreturn (char*)ptr+PREFIX_SIZE;\n")])])]),l("p",[a._v("第一行就是在已分配空间的第一个字长（前8个字节）处存储 需要分配的字节大小（size）。")]),a._v(" "),l("p",[a._v("第二行调用了update_zmalloc_stat_alloc()【宏函数】，它的功能是更新全局变量used_memory（已分配内存的大小）的值（源码解读见下一节）。")]),a._v(" "),l("p",[a._v("第三行返回的（char *）ptr+PREFIX_SIZE。就是将已分配内存的起始地址向右偏移PREFIX_SIZE * sizeof(char)的长度（即8个字节），此时得到的新指针指向的内存空间的大小就等于size了。")]),a._v(" "),l("p",[a._v("接下来，分析一下update_zmalloc_stat_alloc的源码")]),a._v(" "),l("h3",{attrs:{id:"update-zmalloc-stat-alloc源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#update-zmalloc-stat-alloc源码"}},[a._v("#")]),a._v(" update_zmalloc_stat_alloc源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("#define update_zmalloc_stat_alloc(__n) do { \\\n    size_t _n = (__n); \\\n    if (_n&(sizeof(long)-1)) _n += sizeof(long)-(_n&(sizeof(long)-1)); \\\n    if (zmalloc_thread_safe) { \\\n        update_zmalloc_stat_add(_n); \\\n    } else { \\\n        used_memory += _n; \\\n    } \\\n} while(0)\n")])])]),l("p",[a._v("这个宏函数最外圈有一个do{...}while(0)循环看似毫无意义，实际上大有深意。这部分内容不是本文讨论的重点，这里不再赘述。具体请看网上的这篇文章  http://www.spongeliu.com/415.html。\n因为 sizeof(long) = 8 【64位系统中】，所以上面的第一个if语句，可以等价于以下代码：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v(" if(_n&7) _n += 8 - (_n&7);\n")])])]),l("p",[a._v("这段代码就是判断分配的内存空间的大小是不是8的倍数。如果内存大小不是8的倍数，就加上相应的偏移量使之变成8的倍数。_n&7 在功能上等价于 _n%8，不过位操作的效率显然更高。\n"),l("code",[a._v("malloc()本身能够保证所分配的内存是8字节对齐的")]),a._v("：如果你要分配的内存不是8的倍数，那么malloc就会多分配一点，来凑成8的倍数。所以update_zmalloc_stat_alloc函数（或者说zmalloc()相对malloc()而言）真正要实现的功能 并不是进行8字节对齐（malloc已经保证了），它的真正目的是使变量used_memory精确的维护实际已分配内存的大小。"),l("br"),a._v("\n第2个if的条件是一个整型变量zmalloc_thread_safe。顾名思义，它的值表示操作是否是线程安全的，如果不是线程安全的（else），就给变量used_memory加上n。used_memory是zmalloc.c文件中定义的全局静态变量，表示已分配内存的大小。如果是内存安全的就使用update_zmalloc_stat_add来给used_memory加上n。\nupdate_zmalloc_stat_add也是一个宏函数（Redis效率之高，速度之快，这些宏函数可谓功不可没）。它也是一个条件编译的宏，依据不同的宏有不同的定义，这里我们来看一下#else后面的定义的源码【zmalloc.c有多处条件编译的宏，为了把精力都集中在内存管理的实现算法上，这里我只关注Linux平台下使用glibc的malloc的情况】。")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("#define update_zmalloc_stat_add(__n) do { \\\n    pthread_mutex_lock(&used_memory_mutex); \\\n    used_memory += (__n); \\\n    pthread_mutex_unlock(&used_memory_mutex); \\\n} while(0)\n")])])]),l("p",[a._v("pthread_mutex_lock()和pthread_mutex_unlock()使用互斥锁（mutex）来实现线程同步，前者表示加锁，后者表示解锁，它们是POSIX定义的线程同步函数。当加锁以后它后面的代码在多线程同时执行这段代码的时候就只会执行一次，也就是实现了线程安全。")]),a._v(" "),l("h3",{attrs:{id:"zfree"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zfree"}},[a._v("#")]),a._v(" zfree")]),a._v(" "),l("p",[a._v("zfree()和free()有相同的编程接口，它负责清除zmalloc()分配的空间。\n辅助函数:")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("free()\nupdate_zmalloc_free()【宏函数】\nupdate_zmalloc_sub()【宏函数】\nzmalloc_size()\n")])])]),l("h3",{attrs:{id:"zfree-源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zfree-源码"}},[a._v("#")]),a._v(" zfree()源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void zfree(void *ptr) {\n#ifndef HAVE_MALLOC_SIZE\n    void *realptr;\n    size_t oldsize;\n#endif\n \n    if (ptr == NULL) return;\n#ifdef HAVE_MALLOC_SIZE\n    update_zmalloc_stat_free(zmalloc_size(ptr));\n    free(ptr);\n#else\n    realptr = (char*)ptr-PREFIX_SIZE;\n    oldsize = *((size_t*)realptr);\n    update_zmalloc_stat_free(oldsize+PREFIX_SIZE);\n    free(realptr);\n#endif\n}\n")])])]),l("p",[a._v("重点关注#else后面的代码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("realptr = (char *)ptr - PREFIX_SIZE;\n")])])]),l("p",[a._v("表示的是ptr指针向前偏移8个字节的长度，即回退到最初malloc返回的地址，这里称为realptr。然后")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("oldsize = *((size_t*)realptr);\n")])])]),l("p",[a._v("先进行类型转换再取指针所指向的值。通过zmalloc()函数的分析，可知这里存储着我们最初需要分配的内存大小（zmalloc中的size），这里赋值个oldsize")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("update_zmalloc_stat_free(oldsize+PREFIX_SIZE);\n")])])]),l("p",[a._v("update_zmalloc_stat_free()也是一个宏函数，和zmalloc中update_zmalloc_stat_alloc()大致相同，唯一不同之处是前者在给变量used_memory减去分配的空间，而后者是加上该空间大小。\n最后free(realptr)，清除空间")]),a._v(" "),l("h3",{attrs:{id:"update-zmalloc-free源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#update-zmalloc-free源码"}},[a._v("#")]),a._v(" update_zmalloc_free源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("#define update_zmalloc_stat_free(__n) do { \\\n    size_t _n = (__n); \\\n    if (_n&(sizeof(long)-1)) _n += sizeof(long)-(_n&(sizeof(long)-1)); \\\n    if (zmalloc_thread_safe) { \\\n        update_zmalloc_stat_sub(_n); \\\n    } else { \\\n        used_memory -= _n; \\\n    } \\\n} while(0)\n")])])]),l("p",[a._v("其中的函数update_zmalloc_sub与zmalloc()中的update_zmalloc_add相对应，但功能相反，提供线程安全地used_memory减法操作。")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("#define update_zmalloc_stat_sub(__n) do { \\\n    pthread_mutex_lock(&used_memory_mutex); \\\n    used_memory -= (__n); \\\n    pthread_mutex_unlock(&used_memory_mutex); \\\n} while(0)\n")])])]),l("h3",{attrs:{id:"zcalloc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zcalloc"}},[a._v("#")]),a._v(" zcalloc")]),a._v(" "),l("p",[a._v("zcalloc()的实现基于calloc()，但是两者编程接口不同。看一下对比：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void *calloc(size_t nmemb, size_t size);\nvoid *zcalloc(size_t size);\n")])])]),l("p",[a._v("calloc()的功能是也是分配内存空间，与malloc()的不同之处有两点：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("它分配的空间大小是 size * nmemb。比如calloc(10,sizoef(char)); // 分配10个字节\ncalloc()会对分配的空间做初始化工作（初始化为0），而malloc()不会\n")])])]),l("p",[a._v("辅助函数")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("calloc()\nupdate_zmalloc_stat_alloc()【宏函数】\nupdate_zmalloc_stat_add()【宏函数】\n")])])]),l("p",[a._v("zcalloc()源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void *zcalloc(size_t size) {\n    void *ptr = calloc(1, size+PREFIX_SIZE);\n \n    if (!ptr) zmalloc_oom_handler(size);\n#ifdef HAVE_MALLOC_SIZE\n    update_zmalloc_stat_alloc(zmalloc_size(ptr));\n    return ptr;\n#else\n    *((size_t*)ptr) = size;\n    update_zmalloc_stat_alloc(size+PREFIX_SIZE);\n    return (char*)ptr+PREFIX_SIZE;\n#endif\n}\n")])])]),l("p",[a._v("zcalloc()中没有calloc()的第一个函数nmemb。因为它每次调用calloc(),其第一个参数都是1。也就是说zcalloc()功能是每次分配 size+PREFIX_SIZE 的空间，并初始化。\n其余代码的分析和zmalloc()相同，也就是说：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("    zcalloc()和zmalloc()具有相同的编程接口，实现功能基本相同，唯一不同之处是zcalloc()会做初始化工作，而zmalloc()不会。\n")])])]),l("p",[a._v("zrealloc\nzrealloc()和realloc()具有相同的编程接口：\nvoid *realloc (void *ptr, size_t size);\nvoid *zrealloc(void *ptr, size_t size);\nrealloc()要完成的功能是给首地址ptr的内存空间，重新分配大小。如果失败了，则在其它位置新建一块大小为size字节的空间，将原先的数据复制到新的内存空间，并返回这段内存首地址【原内存会被系统自然释放】。\nzrealloc()要完成的功能也类似。\n辅助函数：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("zmalloc()\nzmalloc_size()\nrealloc()\nzmalloc_oom_handler【函数指针】\nupdate_zmalloc_stat_free()【宏函数】\nupdate_zmalloc_stat_alloc()【宏函数】\n")])])]),l("h3",{attrs:{id:"zrealloc-源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zrealloc-源码"}},[a._v("#")]),a._v(" zrealloc()源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void *zrealloc(void *ptr, size_t size) {\n#ifndef HAVE_MALLOC_SIZE\n    void *realptr;\n#endif\n    size_t oldsize;\n    void *newptr;\n \n    if (ptr == NULL) return zmalloc(size);\n#ifdef HAVE_MALLOC_SIZE\n    oldsize = zmalloc_size(ptr);\n    newptr = realloc(ptr,size);\n    if (!newptr) zmalloc_oom_handler(size);\n \n    update_zmalloc_stat_free(oldsize);\n    update_zmalloc_stat_alloc(zmalloc_size(newptr));\n    return newptr;\n#else\n    realptr = (char*)ptr-PREFIX_SIZE;\n    oldsize = *((size_t*)realptr);\n    newptr = realloc(realptr,size+PREFIX_SIZE);\n    if (!newptr) zmalloc_oom_handler(size);\n \n    *((size_t*)newptr) = size;\n    update_zmalloc_stat_free(oldsize);\n    update_zmalloc_stat_alloc(size);\n    return (char*)newptr+PREFIX_SIZE;\n#endif\n}\n")])])]),l("p",[a._v("经过前面关于zmalloc()和zfree()的源码解读，相信您一定能够很轻松地读懂zrealloc()的源码，这里我就不赘述了。")]),a._v(" "),l("h3",{attrs:{id:"zstrdup"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zstrdup"}},[a._v("#")]),a._v(" zstrdup")]),a._v(" "),l("p",[a._v("从这个函数名中，很容易发现它是string duplicate的缩写，即字符串复制。它的代码比较简单。先看一下声明：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("char *zstrdup(const char *s);\n")])])]),l("p",[a._v("功能描述：复制字符串s的内容，到新的内存空间，构造新的字符串【堆区】。并将这段新的字符串地址返回。")]),a._v(" "),l("h3",{attrs:{id:"zstrdup源码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#zstrdup源码"}},[a._v("#")]),a._v(" zstrdup源码")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("char *zstrdup(const char *s) {\n    size_t l = strlen(s)+1;\n    char *p = zmalloc(l);\n \n    memcpy(p,s,l);\n    return p;\n}\n")])])]),l("p",[a._v("首先，先获得字符串s的长度，新闻strlen()函数是不统计'\\0'的，所以最后要加1。\n然后调用zmalloc()来分配足够的空间，首地址为p。\n调用memcpy来完成复制。\n然后返回p。\n简单介绍一下memcpy")]),a._v(" "),l("h3",{attrs:{id:"memcpy"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#memcpy"}},[a._v("#")]),a._v(" memcpy")]),a._v(" "),l("p",[a._v("这是标准C【ANSI C】中用于内存复制的函数，在头文件<string.h>中（gcc）。声明如下：")]),a._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[a._v("void *memcpy(void *dest, const void *src, size_t n);\n")])])]),l("p",[a._v("dest即目的地址，src是源地址。n是要复制的字节数。")])])}),[],!1,null,null,null);e.default=s.exports}}]);