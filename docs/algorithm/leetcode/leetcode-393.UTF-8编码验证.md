## 题目

给定一个表示数据的整数数组 data ，返回它是否为有效的 UTF-8 编码。

UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：

    对于 1 字节 的字符，字节的第一位设为 0 ，后面 7 位为这个符号的 unicode 码。
    对于 n 字节 的字符 (n > 1)，第一个字节的前 n 位都设为1，第 n+1 位设为 0 ，后面字节的前两位一律设为 10 。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。
这是 UTF-8 编码的工作方式：

          Number of Bytes  |        UTF-8 octet sequence
                           |              (binary)
       --------------------+---------------------------------------------
                1          | 0xxxxxxx
                2          | 110xxxxx 10xxxxxx
                3          | 1110xxxx 10xxxxxx 10xxxxxx
                4          | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
x 表示二进制形式的一位，可以是 0 或 1。

注意：输入是整数数组。只有每个整数的 最低 8 个有效位 用来存储数据。这意味着每个整数只表示 1 字节的数据。

 

示例 1：

    输入：data = [197,130,1]
    输出：true
    解释：数据表示字节序列:11000101 10000010 00000001。
    这是有效的 utf-8 编码，为一个 2 字节字符，跟着一个 1 字节字符。
示例 2：

    输入：data = [235,140,4]
    输出：false
    解释：数据表示 8 位的序列: 11101011 10001100 00000100.
    前 3 位都是 1 ，第 4 位为 0 表示它是一个 3 字节字符。
    下一个字节是开头为 10 的延续字节，这是正确的。
    但第二个延续字节不以 10 开头，所以是不符合规则的。
 

提示:

- 1 <= data.length <= 2 * 10<sup>4</sup>
- 0 <= data[i] <= 255



 
## 思路

移位操作

## 解法
```java

class Solution {
    public boolean validUtf8(int[] data) {

        int n = data.length;
        //0 <= data[i] <= 255(二进制中为11111111，8bit=1byte)，所以每个data[i]占1个字节
        //满足条件的头字节有：0xxxxxxx 110xxxxx 1110xxxx 11110xxx
        for (int i = 0 ; i < n ; ) {
            int t = data[i];
            //1.校验头字节
            int j = 7, cnt = 0; //cnt为头字节中开头1的数量
            while(j >= 0 && ((t >> j) & 1) == 1 && ++cnt >= 0) j--;
            //开头要么是0个1(即1个0)，要么是2-4个1
            if (cnt == 1 || cnt > 4) return false;
            //2.头字节后面的字节数小于 cnt-1个
            if (i + cnt - 1 >= n) return false;
            //3.判断头字节后的cnt-1个字节前两位开头是否为10
            for (int k = i + 1 ; k < i + cnt ; k++) {
                if (((data[k] >> 7) & 1) == 1 && ((data[k] >> 6) & 1) == 0) continue;
                return false;
            }
            //4.当前的字符满足规则，继续向后判断
            //如果cnt=0，即为题目说的1字节的字符，则当前data[i]为一个有效的unicode
            if (cnt == 0) i++;
            //cnt不为0，向后移动cnt个字符
            else i += cnt;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
