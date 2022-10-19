(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{576:function(e,a,t){e.exports=t.p+"assets/img/adapter_1.11657bac.png"},577:function(e,a,t){e.exports=t.p+"assets/img/adapter_2.252d6320.png"},578:function(e,a,t){e.exports=t.p+"assets/img/adapter_3.b5e2c78f.png"},981:function(e,a,t){"use strict";t.r(a);var n=t(10),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),n("p",[e._v("一种结构型设计模式")]),e._v(" "),n("h2",{attrs:{id:"思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[e._v("#")]),e._v(" 思想")]),e._v(" "),n("p",[e._v("把一个类的接口变换成客户端所期待的另一种接口，从而使原本因接口不匹配而无法在一起\n工作的两个类能够在一起工作。")]),e._v(" "),n("h3",{attrs:{id:"适配器模式涉及三种角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式涉及三种角色"}},[e._v("#")]),e._v(" 适配器模式涉及三种角色")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("源（Adaptee）：需要被适配的对象或类型\n目标（Target）：期待得到的目标\n适配器（Adapter）：连接源和目标的中间对象\n")])])]),n("h3",{attrs:{id:"适配器模式包括3种形式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式包括3种形式"}},[e._v("#")]),e._v(" 适配器模式包括3种形式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("类适配器模式\n对象适配器模式\n接口适配器模式\n")])])]),n("h4",{attrs:{id:"类适配器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类适配器模式"}},[e._v("#")]),e._v(" 类适配器模式")]),e._v(" "),n("p",[e._v("从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。\nAdapter与Adaptee是继承关系，这决定了这是一个类适配器模式。\n"),n("img",{attrs:{src:t(576),alt:""}})]),e._v(" "),n("p",[e._v("代码实现：")]),e._v(" "),n("p",[e._v("源：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class Adaptee {\n    public void method1(){\n        System.out.println("method 1");\n    }\n}\n')])])]),n("p",[e._v("目标：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public interface Target {\n    void method1();\n    void method2();\n}\n")])])]),n("p",[e._v("适配器：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class Adapter extends Adaptee implements Target {\n    @Override\n    public void method2() {\n        System.out.println("method 2");\n    }\n}\n')])])]),n("p",[e._v("// 测试")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("class AdapterTest {\n    public static void main(String[] args) {\n        Adapter adapter = new Adapter();\n        adapter.method1();\n        adapter.method2();\n    }\n}\n")])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("method 1\nmethod 2\n")])])]),n("h4",{attrs:{id:"对象适配器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象适配器模式"}},[e._v("#")]),e._v(" 对象适配器模式")]),e._v(" "),n("p",[e._v("对象适配器模式是另外6种结构型设计模式的起源。\n"),n("img",{attrs:{src:t(577),alt:""}})]),e._v(" "),n("p",[e._v("从下面的结构图可以看出，Adaptee类并没有method2()方法，而客户端则期待这个方法。与类适配器模式一样，为使客户端能够使用Adaptee类，我们把Adaptee与Target衔接起来。\n但这里我们不继承Adaptee，而是把Adaptee封装进Adapter里。这里Adaptee与Adapter是组合关系。\n"),n("img",{attrs:{src:t(578),alt:""}})]),e._v(" "),n("p",[e._v("代码实现：")]),e._v(" "),n("p",[e._v("Target和Adaptee和上面的类适配器一样，不再贴出。")]),e._v(" "),n("p",[e._v("适配器：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public class Adapter implements Target {\n\n    private Adaptee adaptee;\n\n    public Adapter(Adaptee adaptee) {\n        this.adaptee = adaptee;\n    }\n\n    @Override\n    public void method1() {\n        adaptee.method1();\n    }\n\n    @Override\n    public void method2() {\n        System.out.println("method 2");\n    }\n\n}\n\nclass AdapterTest {\n    public static void main(String[] args) {\n        Adapter adapter = new Adapter(new Adaptee());\n        adapter.method1();\n        adapter.method2();\n    }\n}\n')])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("method 1\nmethod 2\n")])])]),n("p",[e._v("类适配器与对象适配器的区别\n类适配器使用的是继承的方式，直接继承了Adaptee，所以无法对Adaptee的子类进行适配。")]),e._v(" "),n("p",[e._v("对象适配器使用的是组合的方式，·所以Adaptee及其子孙类都可以被适配。另外，对象适配器对于增加一些新行为非常方便，而且新增加的行为同时适用于所有的源。")]),e._v(" "),n("p",[e._v("基于"),n("strong",[e._v("组合/聚合优于继承")]),e._v("的原则，使用对象适配器是更好的选择。")]),e._v(" "),n("h4",{attrs:{id:"接口适配器模式-缺省适配模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口适配器模式-缺省适配模式"}},[e._v("#")]),e._v(" 接口适配器模式（缺省适配模式）")]),e._v(" "),n("p",[e._v("思想是：为一个接口提供缺省实现，这样子类可以从这个缺省实现进行扩展，而不必从原有接口进行扩展。")]),e._v(" "),n("p",[e._v("这里提供一个例子。java.awt.KeyListener是一个键盘监听器接口，我们把这个接口的实现类对象注册进容器后，这个容器就会对键盘行为进行监听，像这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public static void main(String[] args) {\n    JFrame frame = new JFrame();\n    frame.addKeyListener(new KeyListener() {\n        @Override\n        public void keyTyped(KeyEvent e) {}\n\n        @Override\n        public void keyPressed(KeyEvent e) {\n            System.out.println("hey geek!");\n        }\n\n        @Override\n        public void keyReleased(KeyEvent e) {\n        }\n    });\n}\n')])])]),n("p",[e._v("可以看到其实我们只使用到其中一个方法，但必须要把接口中所有方法都实现一遍，如果接口里方法非常多，那岂不是非常麻烦。于是我们引入一个默认适配器，让适配器把接口里的方法都实现一遍，使用时继承这个适配器，把需要的方法实现一遍就好了。JAVA里也为java.awt.KeyListener提供了这样一个适配器：java.awt.KeyAdapter。我们使用这个适配器来改改上面的代码：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public static void main(String[] args) {\n    JFrame frame = new JFrame();\n    frame.addKeyListener(new KeyAdapter() {\n        @Override\n        public void keyPressed(KeyEvent e) {\n            System.out.println("fxcku!");\n        }\n    });\n}\n')])])]),n("p",[e._v("这样不必再把每个方法都实现一遍，代码看起来简洁多了。在任何时候，如果不准备实现一个接口里的所有方法时，就可以使用“缺省适配模式”制造一个抽象类，实现所有方法，这样，从这个抽象类再继承下去的子类就不必实现所有的方法，只要重写需要的方法就可以了。")]),e._v(" "),n("h3",{attrs:{id:"优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("优点：\n    更好的复用性\n    更好的扩展性\n    \n缺点：\n    会导致系统紊乱\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);