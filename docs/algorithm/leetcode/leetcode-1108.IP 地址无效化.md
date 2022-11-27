

## 题目

给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

 

示例 1：

    输入：address = "1.1.1.1"
    输出："1[.]1[.]1[.]1"
示例 2：

    输入：address = "255.100.50.0"
    输出："255[.]100[.]50[.]0"
 

提示：

- 给出的 address 是一个有效的 IPv4 地址

## 思路

    
    /**
     * 这一题没啥好说的，用replace没有sb的快。简单暴力
     * 
     * @param address
     * @return String
     */

## 解法
```java

class Solution {
    
    /**
     * 这一题没啥好说的，用replace没有sb的快。简单暴力
     * 
     * @param address
     * @return String
     */
    public String defangIPaddr(String address) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < address.length(); i++) {
            if (address.charAt(i) == '.') {
                sb.append("[.]");
                continue;
            }
            sb.append(address.charAt(i));
        }
        return sb.toString();

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
