
## 题目

给定一个表示分数加减运算的字符串 expression ，你需要返回一个字符串形式的计算结果。 

这个结果应该是不可约分的分数，即最简分数。 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。所以在上述例子中, 2 应该被转换为 2/1。

 

示例 1:

    输入: expression = "-1/2+1/2"
    输出: "0/1"
 示例 2:

    输入: expression = "-1/2+1/2+1/3"
    输出: "1/3"
示例 3:

    输入: expression = "1/3-1/2"
    输出: "-1/6"
 

提示:

- 输入和输出字符串只包含 '0' 到 '9' 的数字，以及 '/', '+' 和 '-'。 
- 输入和输出分数格式均为 ±分子/分母。如果输入的第一个分数或者输出的分数是正数，则 '+' 会被省略掉。
- 输入只包含合法的最简分数，每个分数的分子与分母的范围是  [1,10]。 如果分母是1，意味着这个分数实际上是一个整数。
- 输入的分数个数范围是 [1,10]。
- 最终结果的分子与分母保证是 32 位整数范围内的有效整数。



## 思路

    // 将"-"替换为"+-",方便拆分
    // 根据"+"拆分成字符串数组
    // 数组中相邻字符串，两两解析计算，结果覆盖到数组原始位置中
    // 数组最后一项即为结果

## 解法
```java

class Solution {
    public String fractionAddition(String expression) {
        expression = expression.replaceAll("-", "+-"); 
        String[] values = expression.split("\\+");//数值均为最简，因此此处假设不存在"-1/-1"情况
        int prevNume = 0;
        int prevDeno = 0;
        for (int i = 0; i < values.length; i++) {
            if (values[i].length() == 0) continue;//滤除空串
            String[] arr = values[i].split("/");
            int nume = Integer.valueOf(arr[0]), deno = Integer.valueOf(arr[1]);
            if (prevNume == 0 && prevDeno == 0) {
                prevNume = nume;
                prevDeno = deno;
            } else {
                nume = prevNume * deno + nume * prevDeno;//分子分母交叉相乘再相加 -> 新分子
                deno *= prevDeno;//分母相乘 -> 新分母
                final int gcd = gcd(nume, deno);//最大公约数
                prevNume = nume / gcd;
                prevDeno = deno / gcd;
                values[i] = String.format("%d/%d", prevNume, prevDeno);
            }
        }
        return values[values.length - 1];
    }

    private int gcd(int numerator, int denominator) {
        final int res = numerator == 0 ? denominator : gcd(denominator % numerator, numerator);
        return Math.max(1, Math.abs(res));//确保最小公约数为 >=1
    }
}


// 将"-"替换为"+-",方便拆分
// 根据"+"拆分成字符串数组
// 数组中相邻字符串，两两解析计算，结果覆盖到数组原始位置中
// 数组最后一项即为结果
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
