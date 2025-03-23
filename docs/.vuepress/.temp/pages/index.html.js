import comp from "/Users/zhangxiaokun/workBase/personal/fe-spec/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1742716589000,\"contributors\":[{\"name\":\"urs.18768167070@163.com\",\"username\":\"\",\"email\":\"18768167070@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"6882b7dcbcf2b371a77e91f7355bfdbb6443ac12\",\"time\":1742716589000,\"email\":\"18768167070@163.com\",\"author\":\"urs.18768167070@163.com\",\"message\":\"feat: markdownlint-0.0.0 commitlint-0.0.0\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
