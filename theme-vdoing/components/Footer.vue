<template>
  <div class="footer">
    <div
      class="icons"
      v-if="social && social.icons"
    >
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>
    <!--<div>-->
    <!--  本站总访问量<span id="busuanzi_value_site_pv"></span>次 | 您是本站第<span id="busuanzi_value_site_uv"></span>位访问者-->
    <!--</div>-->
    <template>
      <div class="busuanzi">
    <span id="busuanzi_container_site_pv" style="display:none">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
        <span id="busuanzi_container_site_uv" style="display:none">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
      </div>
    </template>
    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    <!--Theme by-->
    <!--<a-->
    <!--  href="https://github.com/xugaoyi/vuepress-theme-vdoing"-->
    <!--  target="_blank"-->
    <!--  title="本站主题"-->
    <!--&gt;Vdoing</a>-->
    <template v-if="footer">
      Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
      <span
        v-html="footer.copyrightInfo"
      ></span>
    </template>
  </div>
</template>

<script>
// export default {
//   computed: {
//     social () {
//       return this.$themeConfig.social
//     },
//     footer () {
//       return this.$themeConfig.footer
//     }
//   }
// }

let script;
export default {
  mounted() {
    script = require("busuanzi.pure.js");
  },
  computed: {
    social() {
      return this.$themeConfig.social
    },
    footer() {
      return this.$themeConfig.footer
    }
  },watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        script.fetch();
      }
    }
  }
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  color #ffffff // 页脚颜色
  //color #121212 // 页脚颜色
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color var(--accentColor)
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
</style>
