import { App } from "vue";
import Taro from "@tarojs/taro";

export function appMixin(app: App<Element>) {
  app.mixin({
    onLoad() {
      if (this.weappLifecycle && this.weappLifecycle.onLoad) {
        this.weappLifecycle.onLoad();
      }
    },
    onShow() {
      if (this.weappLifecycle && this.weappLifecycle.onShow) {
        this.weappLifecycle.onShow();
      }
    },
    onReady() {
      if (this.weappLifecycle && this.weappLifecycle.onReady) {
        this.weappLifecycle.onReady();
      }
    },
    onHide() {
      if (this.weappLifecycle && this.weappLifecycle.onHide) {
        this.weappLifecycle.onHide();
      }
    },
    methods: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      pt(size: number, designWidth?: number) {
        return Taro.pxTransform(size);
      },
    },
  });
}
