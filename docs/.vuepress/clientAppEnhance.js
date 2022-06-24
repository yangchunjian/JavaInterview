import { defineClientAppEnhance } from '@vuepress/client'
import Footer from './components/Footer.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Footer', Footer)
})