import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "bili985",
  description: "bilibili上的优秀网课分类整理",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
