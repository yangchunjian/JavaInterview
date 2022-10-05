---
title: C++代码示例
date: 2022-10-05 11:49:58
permalink: /pages/9e68d1/
categories:
  - sourcecode
  - c
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---
## C++输入输出：

    #include <stdlib.h>
    #include <iostream>
    #include <string>
    using namespace std;
    
    /**
     * C++输入输出demo
     */
    int main() {
        int x, y;
    
        cout << "C++";
        cout << "666666" << endl;
        cout << "006030 -> " << 3 + 0 + 6 << endl;
        cin >> x >> y;
        cin >> x >> y;
        cin >> y;
        cout << "x + y -> " << x + y << endl;
    
        return 0;
    }


## C++新特性：

    #include <iostream>
    using namespace std;
    
    int main() {
    //	1、新的数据类型
        bool flag = true;
        if(flag){
            cout << flag << endl;
            cout << boolalpha << flag << endl;
        }
    //	2、直接初始化
        int i(32);
        cout << i << endl;
        const j(10);
        cout << j << endl;
    //	3、随用随定义跟Java类似
        return 0;
    }


## C++数据类型的引用：

    #include <iostream>
    using namespace std;
    
    typedef struct {
        int x;
        int y;
    } Coor;
    
    // 用指针交换两个数
    void fun(int *a, int *b) {
        int c = 0;
        c = *a;
        *a = *b;
        *b = c;
    }
    
    // 用C++引用交换两个数
    void fun(int &a, int &b) {
        int c = 0;
        c = a;
        a = b;
        b = c;
    }
    
    // 普通常量不能实现交换
    void fun1(int a, int b) {
        int c = 0;
        c = a;
        a = b;
        b = c;
    }
    
    /**
     * 不管是变量的引用还是结构体或者其它都必须要先初始化
     */
    int main() {
        // 1、变量的引用
        int a = 3;
        //b就相当于是a的别名，即是另外一个引用方式，操作b即是操作了a，操作a即是操作了b
        int &b = a; //必须要初始化引用
        cout << "b = " << b << endl;
        b = 10;
        cout << "a = " << a << endl;
    //2、结构体的引用
        Coor c1;
        Coor &c = c1; //必须要初始化引用
        c.x = 10;
        c.y = 20;
        cout << "c1.x = " << c1.x << endl;
        cout << "c1.y = " << c1.y << endl;
    //	3、指针类型的引用
    //	类型  *&指针引用名  = 指针变量
        int x = 10;
        int *p = &x; //必须要初始化引用
        int *&q = p; // 这边赋值的仍然是一个地址，即是q是一个地址
        *q = 20;
        cout << "q = " << q << endl;
        cout << "x = " << x << endl;
    
        *p = 30;
        cout << "p = " << p << endl; // p代表的是地址
        cout << "*p = " << *p << endl; // *p代表的是指向这个内存地址的值
    
        int v = 15, f = 10;
        fun(&v, &f);
        cout << "v = " << v << endl;
        cout << "f = " << f << endl;
    
        fun(v, f);
        cout << "v = " << v << endl;
        cout << "f = " << f << endl;
    
        fun1(v, f);
        cout << "v = " << v << endl;
        cout << "f = " << f << endl;
        return 0;
    }


## C++命名空间：

    #include <stdlib.h>
    #include <iostream>
    #include <string>
    using namespace std;
    
    namespace myNameSpace {
    int A;
    
    class Liu{
    public:
        void setA(){
            A = 20;
        }
    };
    
    void print(){
        cout << "A ：" << A << endl;
    }
    
    int getMax(int num) {
        return num;
    }
    }
    
    using namespace myNameSpace;
    
    int main() {
        myNameSpace::A = 10;
        myNameSpace::print();
        myNameSpace::Liu liu;
        liu.setA();
        print();
        std::cout << "命名空间的使用：" << myNameSpace::getMax(9) << std::endl;
    
        return 0;
    }



## C++内存管理：

    #include <iostream>
    using namespace std;
    
    /**
     * 	           什么是内存管理？
     * 内存本质是什么？       	资源
     * 谁掌管内存资源？		操作系统
     * 我们能做什么？		申请/归还
     * 	   申请/归还内存资源就是内存管理
     */
    
    /**	一、	对象是如何存储在内存中的？
     * 			内存分区
     * 1、栈区 	int i = 1;定义一个变量
     * 2、堆区	int *p = new int[10];
     * 3、全局区	存储的全局变量和静态变量
     * 4、常量区	string str = "c++"
     * 5、代码区	存储逻辑代码的二进制
     */
    
    int main() {
        /**
         * 	C语言内存申请和释放
         * 	void *malloc(size_t size)
         * 	void free(void *memblock)
         */
    
        /**
         * C++中内存申请和释放使用关键字new和delete，需要配套使用
         */
        //申请
        int *p = new int(10);
        if (NULL == p) {
            system("pause");
            return 0;
        }
        //释放
        delete p;
        p = NULL;
    
        //如何申请和释放内存块？
        int *arr = new int[1000];
        //假设内存申请失败
        if (NULL == arr) {
            system("pause");
            return 0;
        }
        delete[] arr;//如果不加[]，则只会释放arr[0]的内存
        arr = NULL;
    
        cout << "C++内存管理" << endl;
        return 0;
    }


## C++堆栈内存使用方式：

    #include <stdlib.h>
    #include <iostream>
    using namespace std;
    
    class Tv {
    public:
        int x = 10;
        int y = 20;
        void px() {
            cout << x << endl;
        }
        void py() {
            cout << y << endl;
        }
    };
    
    int main() {
        Tv tv;
    
        cout << tv.x << endl; //在内存开辟一块栈空间，不需要主动释放
        tv.px();
        tv.py();
    
    //	Tv *tvNew;
        Tv *tvNew = new Tv(); // 向内存申请一块堆空间
        if (NULL == tvNew) {
            system("pause");
            return 0;
        }
        // 类似于C语言的写法
        cout << (*tvNew).x << endl;
        (*tvNew).px();
        (*tvNew).py();
        // 类似于NDK编程的写法
        cout << tvNew->x << endl;
        tvNew->px();
        tvNew->py();
    
        delete tvNew; // 在内存中申请的堆空间，需要主动释放
        tvNew = NULL;
        return 0;
    }



## C++类对象的定义与使用：

    #include <iostream>
    using namespace std;
    
    class Tv {
    public:
        int x = 10;
        int y = 20;
        void px() {
            cout << x << endl;
        }
        void py() {
            cout << y << endl;
        }
    };
    
    int main() {
        Tv tv;//在内存开辟一块栈空间，不需要主动释放
        Tv tvs[10]; //申请一块连续的内存空间
        cout << tv.x << endl;
        tv.px();
        tv.py();
    
        //	Tv *tvNew;
        Tv *tvNew = new Tv(); // 向内存申请一块堆空间
        if (NULL == tvNew) {
            system("pause");
            return 0;
        }
    
        // 类似于C语言的写法
        cout << (*tvNew).x << endl;
        (*tvNew).px();
        (*tvNew).py();
        // 类似于NDK编程的写法
        cout << tvNew->x << endl;
        tvNew->px();
        tvNew->py();
    
        delete tvNew; // 在内存中申请的堆空间，需要主动释放
        tvNew = NULL;
    
        Tv *tvss = new Tv[10];
        if(NULL == tvss){
            return 0;
        }
        delete []tvss;//删除栈区所有的Tv对象
        tvss = NULL;
        return 0;
    }



## C++函数新特性：

    #include <iostream>
    using namespace std;
    
    //函数默认值规则：有默认参数值的参数 ，必须要在参数列表的最右端
    //给函数参数默认值时推荐声明函数时给出，不推荐定义函数时再给，因为函数声明时给出则可通过所有编译器，而函数定义时给出可能过不了某些编译器
    /**
     * 函数声明
     */
    void fun(int i, int k = 5, int j = 10);
    //void fun(int i,int k = 5, int j);// 编译出错
    
    /**
     * 函数定义
     */
    void fun(int i, int k, int j) {
        cout << i << k << j << endl;
    }
    
    /**
     * 声明内联函数 inline关键字:内联函数编译器处理时相当于只调用方法体里面的逻辑，好处省时，适用于循环调用该函数时用
     *
     * 为什么不把所有函数都写成内联函数？
     * 1、内联编译时建议性的，由编译器决定
     * 2、逻辑简单，调用频繁的函数建议使用内联
     * 3、递归函数无法使用内联方式，编译器会把递归函数当成普通函数处理
     */
    inline int getMax(int i, int j, int k);
    int getMax(int i, int j, int k) {
        int max = 0;
        if(i>j){
            max = i;
        }else{
            if(j>k){
                max = j;
            }else{
                max = k;
            }
        }
        return max;
    }
    
    /**
     * 1、函数参数默认值
     * 2、函数重载
     * 3、内联函数
     */
    int main() {
        // 无实参值则用默认参数值，否则实参值覆盖函数默认值
        fun(20);
        fun(20, 30);
        fun(20, 30, 40);
        // 内联函数使用：
        int i = 1, j = 2, k = 3, max;
        max = getMax(i, j, k);
        cout << "max = " << max << endl;
        return 0;
    }
    
    /*************函数重载***********************/
    // 在相同作用域内，函数名称相同，参数个数，参数类型或者返回值不同的称之为函数重载
    int getMax(int i, int j) {
        // to do
        return 0;
    }
    
    float getMax(float i, float j) {
        // to do
        return 0;
    }
    
    double getMax(double i, double j) {
        // to do
        return 0;
    }



## C++string类型的使用：

    #include <iostream>
    #include <string>//引入头文件
    using namespace std;
    
    int main() {
        string name = "liugx";
        string age("27");//直接初始化
        string s1(name);
        string s2(5,'c');
        cout << name << age << endl;
        cout << s1 << s2 << endl;
    
        if(!name.empty())
            cout << s1 << s2 << endl;
        s1 = name + age;
        name = age;
    
        /**
         * 0、与java不同，string类型是小写s开头
         * 1、与java不同，要取字符串中的某个字符直接数组下标方式获取
         * 2、与java不同，判断两个字符串相等不用equeals（）方法
         * 3、与java不同，两个固定字符串不能相加，中间需要加上一个变量字符串才能相加-------------特别注意
         * string s3 = "hello"+"hailo" 错误方式
         * string s3 = "hello"+ name +"hailo" 正确方式
         */
        cout << name[0] << endl;
    
        if(s1 == s2){
    
        }else if(s1 != s2){
    
        }
    
        return 0;
    }


## C++关键字const的使用：

    #include <iostream>
    using namespace std;
    
    #define X 3 //宏定义常量跟const常量的区别   宏定义编译器不会检查语法错误，而const则会检查语法问题
    
    /**
     * const与java中的final类似，被修饰的基本变量是不能改变其内容的
     */
    int main() {
        // 1、const修饰基本变量
        const int x = 3; // x的值不能再被改变
    
        // 2、const修饰指针变量
        // 这两种完全等价
        const int *p = NULL;
        int const *p = NULL;
        // 此时修饰的是*p *p不能赋值，但是p可以赋值
    
        int * const p = NULL;
        // 此时修饰的是p p不能赋值，但是*p可以赋值
    
        // 这两种完全等价
        const int * const p = NULL;
        int const * const p = NULL;
        // 此时修饰的是*p和p，*p和p都不能赋值
    
        // 3、const修饰别名引用
        int x = 3;
        const int &y = x;
    //	此时修饰的是引用y，y不能再赋值，x可以赋值
    
        const int x = 3;
        int *y = &x;
        // 用可变的*y去操作不可变的x，权限大-权限小 编译器出错
        int x = 3;
        const int *y = &x;
        // *y不可变，x可变，权限小-权限大  正确写法
    
    //	cout << "C++" << endl;
        return 0;
    }
    
    void fun(const int &a,const int &b){
        // 被const修饰过的形参a和b不能改变其值
    }
    
    
    //常对象
    //
    //如果在声明对象的时候用const修饰，则称被声明的对象为常对象。常对象的数据成员值在对象的整个生命周期内不能被改变。
    //
    //定义：类名 const 对象名[(参数表)]或者const 类名 对象名[(参数表)]
    //
    //在定义对象时必须进行初始化，而且不能被更新，C++不允许直接或间接的更改常对象的数据成员。
    //
    //常对象成员
    //
    //（1）　常数据成员
    //
    //类的数据成员可以是常量或常引用，使用const说明的数据成员称为常数据成员。如果在一个类中声明了常数据成员，那么构造函数就只能通过初始化列表对该数据成员进行初始化，而任何其他的函数都不能对该成员函数赋值。
    //
    //（2）　常成员函数
    //
    //在类中使用关键字const的函数称为常成员函数，常成员函数的格式如下：
    //
    //返回类型 函数名(参数表)const;
    //
    //const是函数类型的组成部分，所以在函数的实现部分也要带关键字const。
    //如：
    void showDate() const;       // 声明
    void showDate() const       // 实现
    {
        printf(“year”);
    }
    //说明：
    //
    //　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。
    //
    //　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。



## C++关键字const常指针和常引用：

    #include <iostream>
    using namespace std;
    
    class Coordinate {
    public:
        Coordinate(int x, int y);
        void print();
        void println() const;
        void setX(int x);
        void changeX() const; //常成员函数
        void changeX();
        // 以上两个changeX()函数互为重载
    
    //	const Coordinate coor;
    //	coor.changeX();//此时调用的为常成员函数
    
    //	Coordinate coor;
    //	coor.changeX();//此时调用的为普通成员函数
    
        //说明：
        //
        //　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。
        //
        //　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。
    
    private:
        int mX;
        int mY;
    };



    #include "Coordinate.h"
    
    Coordinate::Coordinate(int x,int y):mX(x),mY(y){
        cout << "Coordinate()" << endl;
    }
    
    void Coordinate::print(){
        cout << "mx = " << mX << endl;
        cout << "my = " << mY << endl;
    }
    
    void Coordinate::setX(int x){
        mX = x;
    }
    
    void Coordinate::changeX() const{// 常成员函数不能修改数据成员的值
    //	mX = 20;
    }
    
    void Coordinate::changeX() {
        mX = 20;
    }
    
    void Coordinate::println() const{
        cout << "调用常成员函数" << endl;
        cout << "mx = " << mX << endl;
        cout << "my = " << mY << endl;
    }




    #include "Coordinate.h"
    #include <iostream>
    using namespace std;
    
    int main() {
        Coordinate coor(1, 2);
        coor.println();
    
    //	Coordinate &coor2(coor);
    //	coor2.println();
    //
    //	Coordinate *pcoor = &coor;
    //	pcoor->println();
    
        const Coordinate &coor2(coor);
        coor2.println();
    //	coor2.setX(0);//出错
        // 常对象成员，常指针，常引用只能调用常成员函数，不能调用普通函数
        const Coordinate *pcoor = &coor;
        pcoor->println();
        pcoor->setX(0);// 出错：注意const修饰的位置，此时pcoor为常对象，只能调用常成员函数
    
        Coordinate * const pcoor1 = &coor;// 注意const修饰的位置，此时pcoor1为常指针，pcoor1指针只能指向coor
        pcoor1->setX(0);// 不出错
        pcoor1->println();
        pcoor1 = &coor2;// 编译出错
        return 0;
    }
    



## C++关键字const常对象成员和常成员函数：

    #include <iostream>
    #include "Coordinate.h"
    using namespace std;
    
    class Line {
    public:
    //	Line();
        Line(int x1, int y1, int x2, int y2);
        ~Line();
    //	void setA(int x,int y);
    //	void setB(int x,int y);
        Coordinate getCoorA();
        Coordinate getCoorB();
        void changeA() const; //常成员函数
        void changeB();
    private:
        const Coordinate m_A; //常成员对象
        const Coordinate m_B;
    };
    



    #include "Line.h"
    
    //Line::Line(){
    //	cout << "Line()" << endl;
    //}
    
    Line::Line(int x1, int y1, int x2, int y2) :
            m_A(x1, y1), m_B(x2, y2) {
        cout << "Line()" << endl;
    }
    Line::~Line() {
        cout << "~Line()" << endl;
    }
    
    Coordinate Line::getCoorA() {
        return m_A;
    }
    Coordinate Line::getCoorB() {
        return m_B;
    }
    
    void Line::changeA() const { // 常成员函数不能修改数据成员的值
    //	m_A...
    }
    void Line::changeB() {
    
    }




    #include <iostream>
    using namespace std;
    
    class Coordinate {
    public:
        Coordinate(int x, int y);
        void print();
        void setX(int x);
        void changeX() const; //常成员函数
        void changeX();
        // 以上两个changeX()函数互为重载
    
    //	const Coordinate coor;
    //	coor.changeX();//此时调用的为常成员函数
    
        //	Coordinate coor;
        //	coor.changeX();//此时调用的为普通成员函数
    
        //说明：
        //
        //　　a.　如果将一个对象声明为常对象，则通过该对象只能调用它的常成员函数，而不能调用普通的成员函数。常成员函数是常对象的唯一的对外接口。
        //
        //　　b.　常成员函数不能更新对象的数据成员，也不能调用该类中的普通成员函数，这就保证了在常成员函数中绝对不会更新数据成员的值。
        void println() const;
    private:
        int mX;
        int mY;
    };




    #include "Coordinate.h"
    
    Coordinate::Coordinate(int x,int y):mX(x),mY(y){
        cout << "Coordinate()" << endl;
    }
    
    void Coordinate::print(){
        cout << "mx = " << mX << endl;
        cout << "my = " << mY << endl;
    }
    
    void Coordinate::setX(int x){
        mX = x;
    }
    
    void Coordinate::changeX() const{// 常成员函数不能修改数据成员的值
    //	mX = 20;
    }
    
    void Coordinate::changeX() {
        mX = 20;
    }
    
    void Coordinate::println() const{
        cout << "调用常成员函数" << endl;
        cout << "mx = " << mX << endl;
        cout << "my = " << mY << endl;
    }




    #include <iostream>
    using namespace std;
    #include "Line.h"
    
    /**
     * 1、常成员对象的值不能被修改
     *
     * 2、常成员函数不能修改数据成员的值
     */
    int main() {
        Line line(1, 3, 5, 8);
        line.getCoorA().println();
        line.getCoorB().print();
        return 0;
    }

