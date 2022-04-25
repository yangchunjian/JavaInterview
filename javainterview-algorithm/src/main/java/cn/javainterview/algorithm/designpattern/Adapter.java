package cn.javainterview.algorithm.designpattern;

/**
 * 适配器模式
 *
 * @author Yang Chunjian
 * @email 1091938307@qq.com
 * @created 2022-04-25
 * @timed 16:15
 */
//对象适配器
public class Adapter implements Target {

    Adaptee adaptee;

    public Adapter(Adaptee adaptee){
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

    public static void main(String[] args) {
        Adapter adapter = new Adapter(new Adaptee());
        adapter.method1();
        adapter.method2();
    }

}


////类适配器
//public class Adapter extends Adaptee implements Target {
//
//
//    @Override
//    public void method2() {
//        System.out.println("method 2");
//    }
//
//
//    public static void main(String[] args) {
//        Adapter adapter = new Adapter();
//        adapter.method1();
//        adapter.method2();
//    }
//}
//
interface Target {
    void method1();

    void method2();
}

class Adaptee {
    public void method1() {
        System.out.println("method 1");
    }
}


