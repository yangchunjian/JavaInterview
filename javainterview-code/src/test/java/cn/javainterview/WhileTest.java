package cn.javainterview;

public class WhileTest {

    public static void main(String[] args) throws Exception{
         int j = 10;

        for(int i=0;i<10;i++){
            System.out.println("for i="+i);
            testWhile(i);
        }


    }



    public static void testWhile(int j) throws Exception{
        System.out.println("start");
        int i = 0;
        while (true){
            System.out.println("while j="+j+";i="+i++);
        }


    }
}
