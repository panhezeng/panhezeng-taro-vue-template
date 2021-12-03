import { createApp } from "vue";
import store, { storeKey } from "@/store";
import { appMixin } from "@/utils/mixin";
import "@/app.less";
import "@/utils/request";

const app = createApp({
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

app.use(store, storeKey);

appMixin(app);

export default app;
