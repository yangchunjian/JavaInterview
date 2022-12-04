
## 题目

在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。

请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。

 

示例 1：

    输入：barcodes = [1,1,1,2,2,2]
    输出：[2,1,2,1,2,1]
示例 2：

    输入：barcodes = [1,1,1,1,2,2,3,3]
    输出：[1,3,1,3,2,1,2,1]
 

提示：

- 1 <= barcodes.length <= 10000
- 1 <= barcodes[i] <= 10000

## 思路

Map<Integer,Integer>

## 解法
```java

class Solution {
    public int[] rearrangeBarcodes(int[] barcodes) {
        int[] ans = new int[barcodes.length];
        int max = 0;
        int maxV = 0;
        Map<Integer,Integer> map = new HashMap<>(barcodes.length);
        for (int barcode : barcodes) {
            Integer cnt = map.getOrDefault(barcode, 0);
            cnt++;
            if (cnt > max){
                max = cnt;
                maxV = barcode;
            }
            map.put(barcode,cnt);
        }
        int index = 0;
        for (int i = 0; i < max; i++) {
            ans[index] = maxV;
            index += 2;
        }
        map.remove(maxV);
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int val = entry.getKey();
            int cnt = entry.getValue();
            for (int i = 0; i < cnt; i++) {
                if (index >= ans.length){
                    index = 1;
                }
                ans[index] = val;
                index+=2;
            }
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
