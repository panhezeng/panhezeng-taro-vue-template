import Taro from "@tarojs/taro";

/**
 * @param url 必填 跳转页面路由
 */
export default async function (
  option: Taro.navigateTo.Option & Taro.redirectTo.Option
) {
  if (!option.url) throw new Error("必须传url");

  const pages = Taro.getCurrentPages();
  const pagesLength = pages.length;
  // console.log("getCurrentPages-------------********************", pages);
  const path = option.url.split("?")[0];
  const index = pages.findIndex((page) => "/" + page.route === path);
  // 如果要前往的页面，不存在与已打开页面数组，则通过 navigateTo 或 redirectTo 前往，否则通过 navigateBack 前往
  if (index === -1) {
    // 如果已打开 10 个页面，则只能用 redirectTo 方式前往
    if (pagesLength > 9) {
      await Taro.redirectTo(option);
    } else {
      await Taro.navigateTo(option);
    }
  } else {
    const delta = pagesLength - 1 - index;
    // console.log("delta$$$$$$$$$$$$$$$$$$$$$$$********************", delta);
    if (delta > 0) {
      await Taro.navigateBack({
        ...option,
        delta: delta,
      });
      // console.log("toPage navigateBack", delta);
    } else {
      if (option.success) {
        option.success({ errMsg: "" });
      }
      if (option.complete) {
        option.complete({ errMsg: "" });
      }
      return Promise.resolve({ errMsg: "" });
    }
  }
}
