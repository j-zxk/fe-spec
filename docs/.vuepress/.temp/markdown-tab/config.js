import { CodeTabs } from "/Users/zhangxiaokun/workBase/personal/fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.85_markdown-it@14.1.0_typescript@5.8.2_vuepress@_7fd28f3a1aed617cec5e895507d00585/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhangxiaokun/workBase/personal/fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.85_markdown-it@14.1.0_typescript@5.8.2_vuepress@_7fd28f3a1aed617cec5e895507d00585/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhangxiaokun/workBase/personal/fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.85_markdown-it@14.1.0_typescript@5.8.2_vuepress@_7fd28f3a1aed617cec5e895507d00585/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
