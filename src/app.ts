import { createApp } from "vue";
import store, { storeKey } from "@/store";
import "@/app.less";
import "@/utils/request";

const app = createApp({
  // onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

app.use(store, storeKey);

app.mixin({
  onShow() {
    if (this.weappLifecycle) {
      this.weappLifecycle.onShow();
    }
  },
  onReady() {
    if (this.weappLifecycle) {
      this.weappLifecycle.onReady();
    }
  },
});

export default app;
