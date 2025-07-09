<template>
  <div>
    <h2>力扣题解目录</h2>
    <ul>
      <li v-for="item in leetcodeList" :key="item">
        <a :href="item">{{ getTitle(item) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// 注意：路径根据你的项目结构调整
import leetcodeList from '../config/sidebar/leetcode-index.js'

export default {
  name: 'LeetCodeList',
  data() {
    return {
      leetcodeList
    }
  },
  methods: {
    getTitle(path) {
      // 例：/algorithm/leetcode/19.删除链表的倒数第 N 个结点
      const match = path.match(/leetcode\/(.+)/)
      return match ? match[1] : path
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 1.2em;
}
li {
  margin: 0.2em 0;
}
a {
  text-decoration: none;
  color: #339af0;
}
a:hover {
  text-decoration: underline;
}
</style>