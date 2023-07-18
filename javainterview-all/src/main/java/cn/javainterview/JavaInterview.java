package cn.javainterview;

import cn.javainterview.core.lang.ConsoleTable;
import cn.javainterview.core.util.ClassUtil;
import cn.javainterview.core.util.StrUtil;

import java.util.Set;

public class JavaInterview {

    public static final String AUTHOR = "JavaInterview";

    private JavaInterview() {
    }

    /**
     * 显示JavaInterview所有的工具类
     *
     * @return 工具类名集合
     * @since 5.5.2
     */
    public static Set<Class<?>> getAllUtils() {
        return ClassUtil.scanPackage("cn.javainterview",
                (clazz) -> (false == clazz.isInterface()) && StrUtil.endWith(clazz.getSimpleName(), "Util"));
    }

    /**
     * 控制台打印所有工具类
     */
    public static void printAllUtils() {
        final Set<Class<?>> allUtils = getAllUtils();
        final ConsoleTable consoleTable = ConsoleTable.create().addHeader("工具类名", "所在包");
        for (Class<?> clazz : allUtils) {
            consoleTable.addBody(clazz.getSimpleName(), clazz.getPackage().getName());
        }
        consoleTable.print();
    }

    public static void main(String[] args) {
        printAllUtils();
    }
}
