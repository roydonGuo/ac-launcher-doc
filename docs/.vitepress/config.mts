import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ac-launcher-doc",
  description: "ac-launcher-doc",
  // 设置base
  base: "/",
  themeConfig: {
    logo: "/images/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "操作手册", link: "/articles/operate-doc" },
    ],

    // sidebar: [
    //   {
    //     text: "操作手册",
    //     items: [
    //       { text: "操作手册", link: "/articles/operate-doc" },
    //       // { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/roydonGuo" },
    // ],
  },
});
