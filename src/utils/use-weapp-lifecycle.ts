import { reactive } from "vue";

export default function useWeappLifecycle() {
  const weappLifecycle = reactive<{
    onLoad: null | (() => void);
    onShow: null | (() => void);
    onReady: null | (() => void);
    onHide: null | (() => void);
  }>({
    onLoad: null,
    onShow: null,
    onReady: null,
    onHide: null,
  });
  const onLoad = (cb: () => void) => {
    weappLifecycle.onLoad = cb;
  };
  const onShow = (cb: () => void) => {
    weappLifecycle.onShow = cb;
  };
  const onReady = (cb: () => void) => {
    weappLifecycle.onReady = cb;
  };
  const onHide = (cb: () => void) => {
    weappLifecycle.onHide = cb;
  };
  return { onLoad, onShow, onReady, onHide, weappLifecycle };
}
