---
title: 适配器模式
category: Java
author: JavaInterview.cn
categories: 
  - algorithm
tags: 
  - Java
  - 设计模式
  - 适配器模式
date: 2022-04-24 23:52:42
permalink: /pages/806a85/
---


## 概念
一种结构型设计模式

## 思想
把一个类的接口变换成客户端所期待的另一种接口，从而使原本因接口不匹配而无法在一起
工作的两个类能够在一起工作。

### 适配器模式涉及三种角色

    源（Adaptee）：需要被适配的对象或类型
    目标（Target）：期待得到的目标
    适配器（Adapter）：连接源和目标的中间对象


### 适配器模式包括3种形式

    类适配器模式
    对象适配器模式
    接口适配器模式
    
#### 类适配器模式

从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。
Adapter与Adaptee是继承关系，这决定了这是一个类适配器模式。
![](../../../media/pictures/designpattern/adapter_1.png)


代码实现：

源：

    public class Adaptee {
        public void method1(){
            System.out.println("method 1");
        }
    }

目标：

    public interface Target {
        void method1();
        void method2();
    }

适配器：

    public class Adapter extends Adaptee implements Target {
        @Override
        public void method2() {
            System.out.println("method 2");
        }
    }

// 测试

    class AdapterTest {
        public static void main(String[] args) {
            Adapter adapter = new Adapter();
            adapter.method1();
            adapter.method2();
        }
    }

运行结果：

    method 1
    method 2


#### 对象适配器模式

对象适配器模式是另外6种结构型设计模式的起源。
![](../../../media/pictures/designpattern/adapter_2.png)

从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。与类适配器模式一样，为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。
但这里我们不继承Adaptee，而是把Adaptee封装进Adapter里。这里Adaptee与Adapter是组合关系。
![](../../../media/pictures/designpattern/adapter_3.png)

代码实现：

Target和Adaptee和上面的类适配器一样，不再贴出。

适配器：

    public class Adapter implements Target {
    
        private Adaptee adaptee;
    
        public Adapter(Adaptee adaptee) {
            this.adaptee = adaptee;
        }
    
        @Override
        public void method1() {
            adaptee.method1();
        }
    
        @Override
        public void method2() {
            System.out.println("method 2");
        }
    
    }

    class AdapterTest {
        public static void main(String[] args) {
            Adapter adapter = new Adapter(new Adaptee());
            adapter.method1();
            adapter.method2();
        }
    }

运行结果：

    method 1
    method 2

类适配器与对象适配器的区别
类适配器使用的是继承的方式，直接继承了Adaptee，所以无法对Adaptee的子类进行适配。

对象适配器使用的是组合的方式，·所以Adaptee及其子孙类都可以被适配。另外，对象适配器对于增加一些新行为非常方便，而且新增加的行为同时适用于所有的源。

基于**组合/聚合优于继承**的原则，使用对象适配器是更好的选择。


#### 接口适配器模式（缺省适配模式）

思想是：为一个接口提供缺省实现，这样子类可以从这个缺省实现进行扩展，而不必从原有接口进行扩展。

这里提供一个例子。java.awt.KeyListener是一个键盘监听器接口，我们把这个接口的实现类对象注册进容器后，这个容器就会对键盘行为进行监听，像这样：

    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {}

            @Override
            public void keyPressed(KeyEvent e) {
                System.out.println("hey geek!");
            }

            @Override
            public void keyReleased(KeyEvent e) {
            }
        });
    }
    
可以看到其实我们只使用到其中一个方法，但必须要把接口中所有方法都实现一遍，如果接口里方法非常多，那岂不是非常麻烦。于是我们引入一个默认适配器，让适配器把接口里的方法都实现一遍，使用时继承这个适配器，把需要的方法实现一遍就好了。JAVA里也为java.awt.KeyListener提供了这样一个适配器：java.awt.KeyAdapter。我们使用这个适配器来改改上面的代码：

    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.addKeyListener(new KeyAdapter() {
            @Override
            public void keyPressed(KeyEvent e) {
                System.out.println("fxcku!");
            }
        });
    }
    
这样不必再把每个方法都实现一遍，代码看起来简洁多了。在任何时候，如果不准备实现一个接口里的所有方法时，就可以使用“缺省适配模式”制造一个抽象类，实现所有方法，这样，从这个抽象类再继承下去的子类就不必实现所有的方法，只要重写需要的方法就可以了。


### 优缺点

    优点：
        更好的复用性
        更好的扩展性
        
    缺点：
        会导致系统紊乱


