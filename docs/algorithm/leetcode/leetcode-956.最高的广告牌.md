

## 题目

你正在安装一个广告牌，并希望它高度最大。这块广告牌将有两个钢制支架，两边各一个。每个钢支架的高度必须相等。

你有一堆可以焊接在一起的钢筋 rods。举个例子，如果钢筋的长度为 1、2 和 3，则可以将它们焊接在一起形成长度为 6 的支架。

返回 广告牌的最大可能安装高度 。如果没法安装广告牌，请返回 0 。

 

示例 1：

    输入：[1,2,3,6]
    输出：6
    解释：我们有两个不相交的子集 {1,2,3} 和 {6}，它们具有相同的和 sum = 6。
示例 2：

    输入：[1,2,3,4,5,6]
    输出：10
    解释：我们有两个不相交的子集 {2,3,5} 和 {4,6}，它们具有相同的和 sum = 10。
示例 3：

    输入：[1,2]
    输出：0
    解释：没法安装广告牌，所以返回 0。
 

提示：

- 0 <= rods.length <= 20
- 1 <= rods[i] <= 1000
- sum(rods[i]) <= 5000

## 思路

        //key(左右高度差(左侧-右侧)) ; value (左侧高度)
        Map<Integer, Integer> res = new HashMap<>();
        Map<Integer, Integer> copy = new HashMap<>();

## 解法
```java

class Solution {
    
    public int tallestBillboard(int[] rods) {
        //key(左右高度差(左侧-右侧)) ; value (左侧高度)
        Map<Integer, Integer> res = new HashMap<>();
        Map<Integer, Integer> copy = new HashMap<>();
        res.put(0, 0);
        for (int h : rods) {
            copy.clear();
            copy.putAll(res);//获取当前支架之前的所有支架，构成的所有高度差
            for (Integer key : copy.keySet()) {//对之前每种情况进行当前支架的选择更新
                //将当前支架放在左侧
                //（判断当前高度差是否存在，若存在，更新左侧高（取较大值），若不存在，添加新的键值对）
                res.put(key + h, Math.max(res.getOrDefault(key + h, 0), copy.get(key) + h));
                //将当前支架放在右侧
                //（判断当前高度差是否存在，若存在，更新左侧高（取较大值），若不存在，添加新的键值对）
                res.put(key - h, Math.max(res.getOrDefault(key - h, 0), copy.get(key)));
                //放弃当前支架，则res保持不变
            }
        }
        //返回最后高度差为0的左侧高度
        return res.get(0);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
