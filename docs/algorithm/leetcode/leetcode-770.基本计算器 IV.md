---
title: 基本计算器 IV
date: 2022-10-07 17:29:07
permalink: /pages/55b948/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---


## 题目

给定一个表达式如 expression = "e + 8 - a + 5" 和一个求值映射，如 {"e": 1}（给定的形式为 evalvars = ["e"] 和 evalints = [1]），返回表示简化表达式的标记列表，例如 ["-1*a","14"]

- 表达式交替使用块和符号，每个块和符号之间有一个空格。
- 块要么是括号中的表达式，要么是变量，要么是非负整数。
- 变量是一个由小写字母组成的字符串（不包括数字）。请注意，变量可以是多个字母，并注意变量从不具有像 "2x" 或 "-x" 这样的前导系数或一元运算符 。

表达式按通常顺序进行求值：先是括号，然后求乘法，再计算加法和减法。

- 例如，expression = "1 + 2 * 3" 的答案是 ["7"]。

输出格式如下：

- 对于系数非零的每个自变量项，我们按字典排序的顺序将自变量写在一个项中。
- 例如，我们永远不会写像 “b*a*c” 这样的项，只写 “a*b*c”。
- 项的次数等于被乘的自变量的数目，并计算重复项。我们先写出答案的最大次数项，用字典顺序打破关系，此时忽略词的前导系数。
- 例如，"a*a*b*c" 的次数为 4。
- 项的前导系数直接放在左边，用星号将它与变量分隔开(如果存在的话)。前导系数 1 仍然要打印出来。
- 格式良好的一个示例答案是 ["-2*a*a*a", "3*a*a*b", "3*b*b", "4*a", "5*c", "-6"] 。
- 系数为 0 的项（包括常数项）不包括在内。
- 例如，“0” 的表达式输出为 [] 。

注意：你可以假设给定的表达式均有效。所有中间结果都在区间
[-2<sup>31</sup>, 2<sup>31</sup> - 1] 内。

 

示例 1：

    输入：expression = "e + 8 - a + 5", evalvars = ["e"], evalints = [1]
    输出：["-1*a","14"]
示例 2：

    输入：expression = "e - 8 + temperature - pressure",
    evalvars = ["e", "temperature"], evalints = [1, 12]
    输出：["-1*pressure","5"]
示例 3：

    输入：expression = "(e + 8) * (e - 8)", evalvars = [], evalints = []
    输出：["1*e*e","-64"]
 

提示：

- 1 <= expression.length <= 250
- expression 由小写英文字母，数字 '+', '-', '*', '(', ')', ' ' 组成
- expression 不包含任何前空格或后空格
- expression 中的所有符号都用一个空格隔开
- 0 <= evalvars.length <= 100
- 1 <= evalvars[i].length <= 20
- evalvars[i] 由小写英文字母组成
- evalints.length == evalvars.length
- -100 <= evalints[i] <= 100


## 思路

数字和符号分开

## 解法
```java

class Solution {
    public List<String> basicCalculatorIV(String expression, String[] evalvars, int[] evalints) {

        HashMap<String,Integer>map=new HashMap<>();
        for (int i = 0; i <evalvars.length ; i++) {
            map.put(evalvars[i],evalints[i]);
        }
        LinkedList<Expr> mainStack=new LinkedList();//存数字，变量
        LinkedList<String> opStack=new LinkedList<>();//存符号
        int i=0,len=expression.length();char [] str=expression.toCharArray();
        while (i<len)    
        {
            if (str[i]==' '){i++;continue;}
            else if (Character.isDigit(str[i])){ //获取数字
                int x=0;
                while (i<len&&Character.isDigit(str[i]))
                {x=10*x+str[i]-'0';i++;}//统计数字的常用模板
                 mainStack.push(new Expr(new Item(x)));
            }else  if (str[i]>='a'&&str[i]<='z')
            { 
                StringBuilder sb=new StringBuilder();
                while (i<len&&(str[i]>='a'&&str[i]<='z'))
                {sb.append(str[i]);i++;}
                String s=sb.toString();
                if (map.containsKey(s))//如果该变量有值
                {  //变量变数字
                    mainStack.push(new Expr(new Item(map.get(s))));
                }else {
                    //创建变量多项式
                    mainStack.push(new Expr(new Item(1,s)));
                }
                //左括号直接入栈
            }else if (str[i]=='('){opStack.push("(");i++;}
             else  if (str[i]==')'){
                 //遇到有括号，则不停出栈，运算，直到遇到左括号为止
                while (!opStack.isEmpty()&&!opStack.peek().equals("(")){
                        String op=opStack.pop();
                        Expr expr2=mainStack.pop();
                        Expr expr1=mainStack.pop();
                        mainStack.push(expr1.operate(expr2,op)); 
                } opStack.pop();i++;//左括号出栈，指针移动
            }else if (str[i]=='*'){
                while (!opStack.isEmpty()&&opStack.peek().equals("*"))
                {
                    //如果栈顶为乘号，先计算乘号，把乘法处理完
                    String op=opStack.pop();
                    Expr expr2=mainStack.pop();
                    Expr expr1=mainStack.pop();
                    mainStack.push(expr1.operate(expr2,op));
                }opStack.push("*");i++;//再入栈
            }else {  //把前驱的加减号处理完
                while (!opStack.isEmpty()&&(opStack.peek().equals("+")||
                        opStack.peek().equals("-")||opStack.peek().equals("*"))){
                    String op=opStack.pop();
                    Expr expr2=mainStack.pop();
                    Expr expr1=mainStack.pop();
                    mainStack.push(expr1.operate(expr2,op));
                }opStack.push(str[i]=='+'?"+":"-");i++;
            }
        }
        while (!opStack.isEmpty())
        {   //处理后缀表达式
            String op=opStack.pop();
            Expr expr2=mainStack.pop();
            Expr expr1=mainStack.pop();
            mainStack.push(expr1.operate(expr2,op));
        }
       List<String> res=new ArrayList<>();
        Expr expr=mainStack.pop();
         expr.clean();
        for (Item item:expr.items)res.add(item.toString());
        return res;

    }
}


//单项式
class Item implements  Comparable<Item>{
    int coeff;  //单项式系数
    ArrayList<String> factors;//单项式字母

    public Item(int coeff) {
        this.coeff = coeff;factors=new ArrayList<>();
    }

    public Item() {
        this.factors = new ArrayList<>();
        coeff=0;
    }

    public Item(int coeff, String f) {
        this.coeff = coeff;
        this.factors = new ArrayList<>();
        factors.add(f);
    }

    @Override
    public String toString() {
        StringBuilder sb=new StringBuilder();
        sb.append(coeff);
        for (String s:factors)
        {sb.append("*").append(s);}
        return sb.toString();
    }

    @Override
    public int compareTo(Item item) {
        if (this.factors.size()==item.factors.size())//如果两个单项式字母长度相等
        {
            int i=0,len=this.factors.size();//按照字典顺序比较
            while (i<len&&factors.get(i).compareTo(item.factors.get(i))==0)i++;
             return i==len?0:factors.get(i).compareTo(item.factors.get(i));
        }else {
            //按长度从大到小排位
            return item.factors.size()-factors.size();

        }
    }
    //单项式相乘
    Item mutil(Item item){
        Item res=new Item(); 
        res.coeff=coeff*item.coeff;//乘系数
        res.factors.addAll(factors);    
        res.factors.addAll(item.factors); //合并字母
        res.factors.sort(String::compareTo);//排序
        return res;
    }
}
//多项式：由多个单项式组成
class Expr{
    ArrayList<Item> items; //单项式列表

    public Expr(Item item) {
        this.items = new ArrayList<>();
        items.add(item);
    }
    void add(Expr expr){  //将另外多项式的项直接合并过来
        items.addAll(expr.items);   
        items.sort(Item::compareTo);//排序
        clean();//去除冗余项
    }
    void mul(Expr expr){
        ArrayList<Item> res=new ArrayList<>();
        for (Item item1:items)
            for (Item item2:expr.items)
                res.add(item1.mutil(item2)); //将每一项按乘法规则相乘
        this.items=res;
        items.sort(Item::compareTo);
        clean();
    }


    Expr clean(){  //去除冗余同项
        int i=0;
        for (; i <items.size();  i++) {
            //对于每个单项式，比较前后两个
            while (i+1<items.size()&&items.get(i).compareTo(items.get(i+1))==0)
            {
                //如果前后两个单项式字母相等，则合并，并删除靠后的一个
                items.get(i).coeff+=items.get(i+1).coeff;
                items.remove(i+1);
            }
            //如果单项式系数=0 删除该项
            if (i<items.size()&&items.get(i).coeff==0)
                items.remove(i--);
        }
        return this;
    }

    Expr  operate(Expr expr,String op){
        switch (op){
            case "*":mul(expr);break;
            case "+":add(expr);break;
            case "-": 
                    for (Item item:expr.items)
                        item.coeff*=-1;
                    add(expr);
                    ;break;
        }
        return this;

    }
 
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
