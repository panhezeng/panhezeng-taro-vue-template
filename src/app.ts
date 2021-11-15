import { createApp } from "vue";
import store, { storeKey } from "@/store";
import "@/app.less";
import "@/utils/request";

const App = createApp({
  // onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store, storeKey);

export default App;
