package cn.javainterview.core.asm;

import jdk.internal.org.objectweb.asm.ClassReader;
import jdk.internal.org.objectweb.asm.util.ASMifier;
import jdk.internal.org.objectweb.asm.util.Printer;
import jdk.internal.org.objectweb.asm.util.Textifier;
import jdk.internal.org.objectweb.asm.util.TraceClassVisitor;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author JavaInterview.cn
 * @email 1091938307@qq.com
 * @created 2022-05-01
 * @timed 19:38
 */
public class ASMPrint {


    /**
     * 打印.class文件的asm码
     *
     * @param className      类的全名，例如：cn.javainterview.core.asm.hello.HelloWorld
     * @param parsingOptions 解析参数，例如：ClassReader.SKIP_FRAMES | ClassReader.SKIP_DEBUG
     * @param asmCode        打印形式 true用new ASMifier()，false用new Textifier()
     */
    public static void print(String className, int parsingOptions, boolean asmCode) throws IOException {
        // (1) 设置参数
//        String className = "cn.javainterview.core.asm.hello.HelloWorld";
//        int parsingOptions = ClassReader.SKIP_FRAMES | ClassReader.SKIP_DEBUG;
//        boolean asmCode = true;

        // (2) 打印结果
        Printer printer = asmCode ? new ASMifier() : new Textifier();
        PrintWriter printWriter = new PrintWriter(System.out, true);
        TraceClassVisitor traceClassVisitor = new TraceClassVisitor(null, printer, printWriter);
        new ClassReader(className).accept(traceClassVisitor, parsingOptions);
    }

    public static void main(String[] args) throws IOException {
        print("cn.javainterview.core.asm.hello.HelloWorld", ClassReader.SKIP_FRAMES | ClassReader.SKIP_DEBUG, true);
    }

}
