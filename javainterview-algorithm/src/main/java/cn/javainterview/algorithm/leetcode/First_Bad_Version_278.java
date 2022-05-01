package cn.javainterview.algorithm.leetcode;

/**
 * @author JavaInterview.cn
 * @email 1091938307@qq.com
 * @created 2022-04-13
 * @timed 00:04
 */
public class First_Bad_Version_278 {
//    你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
//    假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
//    你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

//    示例 1：
//    输入：n = 5, bad = 4
//    输出：4
//    解释：
//    调用 isBadVersion(3) -> false
//    调用 isBadVersion(5) -> true
//    调用 isBadVersion(4) -> true
//    所以，4 是第一个错误的版本。

//    示例 2：
//    输入：n = 1, bad = 1
//    输出：1

//    思路：
//    二分，注意边界。
//
//    不能写 int mid = (lo + hi) / 2; 要写 int mid = lo + (hi - lo) / 2;
//    这个题目，返回 lo 或者 hi 都行，因为终止条件是 lo == hi.
//            这是二分里比较难的题目了吧，找的是分割点，不是某个值。
//            [********########] 就像这样的有序数组，找第一个 ## 号。
//    二分搜索的演化版本，查找某个值，返回其索引，如果找不到，返回其本来应该所在的位置（比如上面 ## 号的位置）。遇到这种二分搜索，就拿这个 bad version 来套就行了。

    public int firstBadVersion(int n) {
        int lo = 1;
        int hi = n;

        while(lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (isBadVersion(mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return hi;

    }
    boolean isBadVersion(int index){
        //题目给的
        return true;
    }


}
