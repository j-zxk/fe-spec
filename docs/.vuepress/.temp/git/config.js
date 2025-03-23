import { GitContributors } from "/Users/zhangxiaokun/workBase/personal/fe-spec/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.85_typescript@5.8.2_vuepress@2.0.0-rc.20_@vuepress+bundle_ada25dde25d1c5d47107e378cbc24ceb/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/zhangxiaokun/workBase/personal/fe-spec/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.85_typescript@5.8.2_vuepress@2.0.0-rc.20_@vuepress+bundle_ada25dde25d1c5d47107e378cbc24ceb/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
