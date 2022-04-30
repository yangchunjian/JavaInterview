package cn.javainterview.core.jni;

/**
 * @author Yang Chunjian
 * @email 1091938307@qq.com
 * @created 2022-04-30
 * @timed 21:22
 */
public class JavaInterviewJNI {

    public native void print(String i);

    static {
        System.loadLibrary("javainterview");
        //需求生成的动态链接库名字(linux下为libjavainterview.so)
        //需求生成的动态链接库名字(mac下为libjavainterview.jnilib)

    }


    public static void main(String[] args) {
        System.out.println("java.library.path=" + System.getProperty("java.library.path")); //输出的值是以:分隔的，区分多个路径，生成的libjavainterview.jnilib文件放在任意一个路径下就行
        JavaInterviewJNI javaInterviewJNI = new JavaInterviewJNI();
        javaInterviewJNI.print("Hello JavaInterview ！！！");
    }
}
