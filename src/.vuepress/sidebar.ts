import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "语文",
      prefix: "语文/",
      icon:"/assets/icon/chinese.svg",
      children: "structure",
    },
    {
      text: "数学",
      icon: "/assets/icon/math.svg",
      prefix: "数学/",
      children: "structure",
    },
    {
      text: "英语",
      icon: "/assets/icon/english.svg",
      prefix: "英语/",
      children: "structure",
    },
    {
      text: "物理",
      icon: "/assets/icon/physics.svg",
      prefix: "物理/",
      children: "structure",
    },
    {
      text: "化学",
      icon: "/assets/icon/chemistry.svg",
      prefix: "化学/",
      children: "structure",
    },
    {
      text: "生物",
      icon: "/assets/icon/biology.svg",
      prefix: "生物/",
      children: "structure",
    }
  ],
});
