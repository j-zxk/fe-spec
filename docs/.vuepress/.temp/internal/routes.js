export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhangxiaokun/workBase/personal/fe-spec/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhangxiaokun/workBase/personal/fe-spec/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
