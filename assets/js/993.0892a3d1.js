(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{2180:function(n,t,e){"use strict";e.r(t);var i=e(12),o=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"c-输入输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-输入输出"}},[n._v("#")]),n._v(" C++输入输出：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <stdlib.h>\n#include <iostream>\n#include <string>\nusing namespace std;\n\n/**\n * C++输入输出demo\n */\nint main() {\n    int x, y;\n\n    cout << "C++";\n    cout << "666666" << endl;\n    cout << "006030 -> " << 3 + 0 + 6 << endl;\n    cin >> x >> y;\n    cin >> x >> y;\n    cin >> y;\n    cout << "x + y -> " << x + y << endl;\n\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-新特性"}},[n._v("#")]),n._v(" C++新特性：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("#include <iostream>\nusing namespace std;\n\nint main() {\n//\t1、新的数据类型\n    bool flag = true;\n    if(flag){\n        cout << flag << endl;\n        cout << boolalpha << flag << endl;\n    }\n//\t2、直接初始化\n    int i(32);\n    cout << i << endl;\n    const j(10);\n    cout << j << endl;\n//\t3、随用随定义跟Java类似\n    return 0;\n}\n")])])]),e("h2",{attrs:{id:"c-数据类型的引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-数据类型的引用"}},[n._v("#")]),n._v(" C++数据类型的引用：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\ntypedef struct {\n    int x;\n    int y;\n} Coor;\n\n// 用指针交换两个数\nvoid fun(int *a, int *b) {\n    int c = 0;\n    c = *a;\n    *a = *b;\n    *b = c;\n}\n\n// 用C++引用交换两个数\nvoid fun(int &a, int &b) {\n    int c = 0;\n    c = a;\n    a = b;\n    b = c;\n}\n\n// 普通常量不能实现交换\nvoid fun1(int a, int b) {\n    int c = 0;\n    c = a;\n    a = b;\n    b = c;\n}\n\n/**\n * 不管是变量的引用还是结构体或者其它都必须要先初始化\n */\nint main() {\n    // 1、变量的引用\n    int a = 3;\n    //b就相当于是a的别名，即是另外一个引用方式，操作b即是操作了a，操作a即是操作了b\n    int &b = a; //必须要初始化引用\n    cout << "b = " << b << endl;\n    b = 10;\n    cout << "a = " << a << endl;\n//2、结构体的引用\n    Coor c1;\n    Coor &c = c1; //必须要初始化引用\n    c.x = 10;\n    c.y = 20;\n    cout << "c1.x = " << c1.x << endl;\n    cout << "c1.y = " << c1.y << endl;\n//\t3、指针类型的引用\n//\t类型  *&指针引用名  = 指针变量\n    int x = 10;\n    int *p = &x; //必须要初始化引用\n    int *&q = p; // 这边赋值的仍然是一个地址，即是q是一个地址\n    *q = 20;\n    cout << "q = " << q << endl;\n    cout << "x = " << x << endl;\n\n    *p = 30;\n    cout << "p = " << p << endl; // p代表的是地址\n    cout << "*p = " << *p << endl; // *p代表的是指向这个内存地址的值\n\n    int v = 15, f = 10;\n    fun(&v, &f);\n    cout << "v = " << v << endl;\n    cout << "f = " << f << endl;\n\n    fun(v, f);\n    cout << "v = " << v << endl;\n    cout << "f = " << f << endl;\n\n    fun1(v, f);\n    cout << "v = " << v << endl;\n    cout << "f = " << f << endl;\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-命名空间"}},[n._v("#")]),n._v(" C++命名空间：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <stdlib.h>\n#include <iostream>\n#include <string>\nusing namespace std;\n\nnamespace myNameSpace {\nint A;\n\nclass Liu{\npublic:\n    void setA(){\n        A = 20;\n    }\n};\n\nvoid print(){\n    cout << "A ：" << A << endl;\n}\n\nint getMax(int num) {\n    return num;\n}\n}\n\nusing namespace myNameSpace;\n\nint main() {\n    myNameSpace::A = 10;\n    myNameSpace::print();\n    myNameSpace::Liu liu;\n    liu.setA();\n    print();\n    std::cout << "命名空间的使用：" << myNameSpace::getMax(9) << std::endl;\n\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-内存管理"}},[n._v("#")]),n._v(" C++内存管理：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\n/**\n * \t           什么是内存管理？\n * 内存本质是什么？       \t资源\n * 谁掌管内存资源？\t\t操作系统\n * 我们能做什么？\t\t申请/归还\n * \t   申请/归还内存资源就是内存管理\n */\n\n/**\t一、\t对象是如何存储在内存中的？\n * \t\t\t内存分区\n * 1、栈区 \tint i = 1;定义一个变量\n * 2、堆区\tint *p = new int[10];\n * 3、全局区\t存储的全局变量和静态变量\n * 4、常量区\tstring str = "c++"\n * 5、代码区\t存储逻辑代码的二进制\n */\n\nint main() {\n    /**\n     * \tC语言内存申请和释放\n     * \tvoid *malloc(size_t size)\n     * \tvoid free(void *memblock)\n     */\n\n    /**\n     * C++中内存申请和释放使用关键字new和delete，需要配套使用\n     */\n    //申请\n    int *p = new int(10);\n    if (NULL == p) {\n        system("pause");\n        return 0;\n    }\n    //释放\n    delete p;\n    p = NULL;\n\n    //如何申请和释放内存块？\n    int *arr = new int[1000];\n    //假设内存申请失败\n    if (NULL == arr) {\n        system("pause");\n        return 0;\n    }\n    delete[] arr;//如果不加[]，则只会释放arr[0]的内存\n    arr = NULL;\n\n    cout << "C++内存管理" << endl;\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-堆栈内存使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-堆栈内存使用方式"}},[n._v("#")]),n._v(" C++堆栈内存使用方式：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <stdlib.h>\n#include <iostream>\nusing namespace std;\n\nclass Tv {\npublic:\n    int x = 10;\n    int y = 20;\n    void px() {\n        cout << x << endl;\n    }\n    void py() {\n        cout << y << endl;\n    }\n};\n\nint main() {\n    Tv tv;\n\n    cout << tv.x << endl; //在内存开辟一块栈空间，不需要主动释放\n    tv.px();\n    tv.py();\n\n//\tTv *tvNew;\n    Tv *tvNew = new Tv(); // 向内存申请一块堆空间\n    if (NULL == tvNew) {\n        system("pause");\n        return 0;\n    }\n    // 类似于C语言的写法\n    cout << (*tvNew).x << endl;\n    (*tvNew).px();\n    (*tvNew).py();\n    // 类似于NDK编程的写法\n    cout << tvNew->x << endl;\n    tvNew->px();\n    tvNew->py();\n\n    delete tvNew; // 在内存中申请的堆空间，需要主动释放\n    tvNew = NULL;\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-类对象的定义与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-类对象的定义与使用"}},[n._v("#")]),n._v(" C++类对象的定义与使用：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\nclass Tv {\npublic:\n    int x = 10;\n    int y = 20;\n    void px() {\n        cout << x << endl;\n    }\n    void py() {\n        cout << y << endl;\n    }\n};\n\nint main() {\n    Tv tv;//在内存开辟一块栈空间，不需要主动释放\n    Tv tvs[10]; //申请一块连续的内存空间\n    cout << tv.x << endl;\n    tv.px();\n    tv.py();\n\n    //\tTv *tvNew;\n    Tv *tvNew = new Tv(); // 向内存申请一块堆空间\n    if (NULL == tvNew) {\n        system("pause");\n        return 0;\n    }\n\n    // 类似于C语言的写法\n    cout << (*tvNew).x << endl;\n    (*tvNew).px();\n    (*tvNew).py();\n    // 类似于NDK编程的写法\n    cout << tvNew->x << endl;\n    tvNew->px();\n    tvNew->py();\n\n    delete tvNew; // 在内存中申请的堆空间，需要主动释放\n    tvNew = NULL;\n\n    Tv *tvss = new Tv[10];\n    if(NULL == tvss){\n        return 0;\n    }\n    delete []tvss;//删除栈区所有的Tv对象\n    tvss = NULL;\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-函数新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-函数新特性"}},[n._v("#")]),n._v(" C++函数新特性：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\n//函数默认值规则：有默认参数值的参数 ，必须要在参数列表的最右端\n//给函数参数默认值时推荐声明函数时给出，不推荐定义函数时再给，因为函数声明时给出则可通过所有编译器，而函数定义时给出可能过不了某些编译器\n/**\n * 函数声明\n */\nvoid fun(int i, int k = 5, int j = 10);\n//void fun(int i,int k = 5, int j);// 编译出错\n\n/**\n * 函数定义\n */\nvoid fun(int i, int k, int j) {\n    cout << i << k << j << endl;\n}\n\n/**\n * 声明内联函数 inline关键字:内联函数编译器处理时相当于只调用方法体里面的逻辑，好处省时，适用于循环调用该函数时用\n *\n * 为什么不把所有函数都写成内联函数？\n * 1、内联编译时建议性的，由编译器决定\n * 2、逻辑简单，调用频繁的函数建议使用内联\n * 3、递归函数无法使用内联方式，编译器会把递归函数当成普通函数处理\n */\ninline int getMax(int i, int j, int k);\nint getMax(int i, int j, int k) {\n    int max = 0;\n    if(i>j){\n        max = i;\n    }else{\n        if(j>k){\n            max = j;\n        }else{\n            max = k;\n        }\n    }\n    return max;\n}\n\n/**\n * 1、函数参数默认值\n * 2、函数重载\n * 3、内联函数\n */\nint main() {\n    // 无实参值则用默认参数值，否则实参值覆盖函数默认值\n    fun(20);\n    fun(20, 30);\n    fun(20, 30, 40);\n    // 内联函数使用：\n    int i = 1, j = 2, k = 3, max;\n    max = getMax(i, j, k);\n    cout << "max = " << max << endl;\n    return 0;\n}\n\n/*************函数重载***********************/\n// 在相同作用域内，函数名称相同，参数个数，参数类型或者返回值不同的称之为函数重载\nint getMax(int i, int j) {\n    // to do\n    return 0;\n}\n\nfloat getMax(float i, float j) {\n    // to do\n    return 0;\n}\n\ndouble getMax(double i, double j) {\n    // to do\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-string类型的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-string类型的使用"}},[n._v("#")]),n._v(" C++string类型的使用：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\n#include <string>//引入头文件\nusing namespace std;\n\nint main() {\n    string name = "liugx";\n    string age("27");//直接初始化\n    string s1(name);\n    string s2(5,\'c\');\n    cout << name << age << endl;\n    cout << s1 << s2 << endl;\n\n    if(!name.empty())\n        cout << s1 << s2 << endl;\n    s1 = name + age;\n    name = age;\n\n    /**\n     * 0、与java不同，string类型是小写s开头\n     * 1、与java不同，要取字符串中的某个字符直接数组下标方式获取\n     * 2、与java不同，判断两个字符串相等不用equeals（）方法\n     * 3、与java不同，两个固定字符串不能相加，中间需要加上一个变量字符串才能相加-------------特别注意\n     * string s3 = "hello"+"hailo" 错误方式\n     * string s3 = "hello"+ name +"hailo" 正确方式\n     */\n    cout << name[0] << endl;\n\n    if(s1 == s2){\n\n    }else if(s1 != s2){\n\n    }\n\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-关键字const的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-关键字const的使用"}},[n._v("#")]),n._v(" C++关键字const的使用：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\n#define X 3 //宏定义常量跟const常量的区别   宏定义编译器不会检查语法错误，而const则会检查语法问题\n\n/**\n * const与java中的final类似，被修饰的基本变量是不能改变其内容的\n */\nint main() {\n    // 1、const修饰基本变量\n    const int x = 3; // x的值不能再被改变\n\n    // 2、const修饰指针变量\n    // 这两种完全等价\n    const int *p = NULL;\n    int const *p = NULL;\n    // 此时修饰的是*p *p不能赋值，但是p可以赋值\n\n    int * const p = NULL;\n    // 此时修饰的是p p不能赋值，但是*p可以赋值\n\n    // 这两种完全等价\n    const int * const p = NULL;\n    int const * const p = NULL;\n    // 此时修饰的是*p和p，*p和p都不能赋值\n\n    // 3、const修饰别名引用\n    int x = 3;\n    const int &y = x;\n//\t此时修饰的是引用y，y不能再赋值，x可以赋值\n\n    const int x = 3;\n    int *y = &x;\n    // 用可变的*y去操作不可变的x，权限大-权限小 编译器出错\n    int x = 3;\n    const int *y = &x;\n    // *y不可变，x可变，权限小-权限大  正确写法\n\n//\tcout << "C++" << endl;\n    return 0;\n}\n\nvoid fun(const int &a,const int &b){\n    // 被const修饰过的形参a和b不能改变其值\n}\n\n\n//常对象\n//\n//如果在声明对象的时候用const修饰，则称被声明的对象为常对象。常对象的数据成员值在对象的整个生命周期内不能被改变。\n//\n//定义：类名 const 对象名[(参数表)]或者const 类名 对象名[(参数表)]\n//\n//在定义对象时必须进行初始化，而且不能被更新，C++不允许直接或间接的更改常对象的数据成员。\n//\n//常对象成员\n//\n//（1）　常数据成员\n//\n//类的数据成员可以是常量或常引用，使用const说明的数据成员称为常数据成员。如果在一个类中声明了常数据成员，那么构造函数就只能通过初始化列表对该数据成员进行初始化，而任何其他的函数都不能对该成员函数赋值。\n//\n//（2）　常成员函数\n//\n//在类中使用关键字const的函数称为常成员函数，常成员函数的格式如下：\n//\n//返回类型 函数名(参数表)const;\n//\n//const是函数类型的组成部分，所以在函数的实现部分也要带关键字const。\n//如：\nvoid showDate() const;       // 声明\nvoid showDate() const       // 实现\n{\n    printf(“year”);\n}\n//说明：\n//\n//　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。\n//\n//　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。\n')])])]),e("h2",{attrs:{id:"c-关键字const常指针和常引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-关键字const常指针和常引用"}},[n._v("#")]),n._v(" C++关键字const常指针和常引用：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\nusing namespace std;\n\nclass Coordinate {\npublic:\n    Coordinate(int x, int y);\n    void print();\n    void println() const;\n    void setX(int x);\n    void changeX() const; //常成员函数\n    void changeX();\n    // 以上两个changeX()函数互为重载\n\n//\tconst Coordinate coor;\n//\tcoor.changeX();//此时调用的为常成员函数\n\n//\tCoordinate coor;\n//\tcoor.changeX();//此时调用的为普通成员函数\n\n    //说明：\n    //\n    //　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。\n    //\n    //　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。\n\nprivate:\n    int mX;\n    int mY;\n};\n\n\n\n#include "Coordinate.h"\n\nCoordinate::Coordinate(int x,int y):mX(x),mY(y){\n    cout << "Coordinate()" << endl;\n}\n\nvoid Coordinate::print(){\n    cout << "mx = " << mX << endl;\n    cout << "my = " << mY << endl;\n}\n\nvoid Coordinate::setX(int x){\n    mX = x;\n}\n\nvoid Coordinate::changeX() const{// 常成员函数不能修改数据成员的值\n//\tmX = 20;\n}\n\nvoid Coordinate::changeX() {\n    mX = 20;\n}\n\nvoid Coordinate::println() const{\n    cout << "调用常成员函数" << endl;\n    cout << "mx = " << mX << endl;\n    cout << "my = " << mY << endl;\n}\n\n\n\n\n#include "Coordinate.h"\n#include <iostream>\nusing namespace std;\n\nint main() {\n    Coordinate coor(1, 2);\n    coor.println();\n\n//\tCoordinate &coor2(coor);\n//\tcoor2.println();\n//\n//\tCoordinate *pcoor = &coor;\n//\tpcoor->println();\n\n    const Coordinate &coor2(coor);\n    coor2.println();\n//\tcoor2.setX(0);//出错\n    // 常对象成员，常指针，常引用只能调用常成员函数，不能调用普通函数\n    const Coordinate *pcoor = &coor;\n    pcoor->println();\n    pcoor->setX(0);// 出错：注意const修饰的位置，此时pcoor为常对象，只能调用常成员函数\n\n    Coordinate * const pcoor1 = &coor;// 注意const修饰的位置，此时pcoor1为常指针，pcoor1指针只能指向coor\n    pcoor1->setX(0);// 不出错\n    pcoor1->println();\n    pcoor1 = &coor2;// 编译出错\n    return 0;\n}\n')])])]),e("h2",{attrs:{id:"c-关键字const常对象成员和常成员函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-关键字const常对象成员和常成员函数"}},[n._v("#")]),n._v(" C++关键字const常对象成员和常成员函数：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('#include <iostream>\n#include "Coordinate.h"\nusing namespace std;\n\nclass Line {\npublic:\n//\tLine();\n    Line(int x1, int y1, int x2, int y2);\n    ~Line();\n//\tvoid setA(int x,int y);\n//\tvoid setB(int x,int y);\n    Coordinate getCoorA();\n    Coordinate getCoorB();\n    void changeA() const; //常成员函数\n    void changeB();\nprivate:\n    const Coordinate m_A; //常成员对象\n    const Coordinate m_B;\n};\n\n\n\n\n#include "Line.h"\n\n//Line::Line(){\n//\tcout << "Line()" << endl;\n//}\n\nLine::Line(int x1, int y1, int x2, int y2) :\n        m_A(x1, y1), m_B(x2, y2) {\n    cout << "Line()" << endl;\n}\nLine::~Line() {\n    cout << "~Line()" << endl;\n}\n\nCoordinate Line::getCoorA() {\n    return m_A;\n}\nCoordinate Line::getCoorB() {\n    return m_B;\n}\n\nvoid Line::changeA() const { // 常成员函数不能修改数据成员的值\n//\tm_A...\n}\nvoid Line::changeB() {\n\n}\n\n\n\n\n#include <iostream>\nusing namespace std;\n\nclass Coordinate {\npublic:\n    Coordinate(int x, int y);\n    void print();\n    void setX(int x);\n    void changeX() const; //常成员函数\n    void changeX();\n    // 以上两个changeX()函数互为重载\n\n//\tconst Coordinate coor;\n//\tcoor.changeX();//此时调用的为常成员函数\n\n    //\tCoordinate coor;\n    //\tcoor.changeX();//此时调用的为普通成员函数\n\n    //说明：\n    //\n    //　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。\n    //\n    //　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。\n    void println() const;\nprivate:\n    int mX;\n    int mY;\n};\n\n\n\n\n#include "Coordinate.h"\n\nCoordinate::Coordinate(int x,int y):mX(x),mY(y){\n    cout << "Coordinate()" << endl;\n}\n\nvoid Coordinate::print(){\n    cout << "mx = " << mX << endl;\n    cout << "my = " << mY << endl;\n}\n\nvoid Coordinate::setX(int x){\n    mX = x;\n}\n\nvoid Coordinate::changeX() const{// 常成员函数不能修改数据成员的值\n//\tmX = 20;\n}\n\nvoid Coordinate::changeX() {\n    mX = 20;\n}\n\nvoid Coordinate::println() const{\n    cout << "调用常成员函数" << endl;\n    cout << "mx = " << mX << endl;\n    cout << "my = " << mY << endl;\n}\n\n\n\n\n#include <iostream>\nusing namespace std;\n#include "Line.h"\n\n/**\n * 1、常成员对象的值不能被修改\n *\n * 2、常成员函数不能修改数据成员的值\n */\nint main() {\n    Line line(1, 3, 5, 8);\n    line.getCoorA().println();\n    line.getCoorB().print();\n    return 0;\n}\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);