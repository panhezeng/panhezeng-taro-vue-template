import Taro from "@tarojs/taro";

export default function () {
  const pages = Taro.getCurrentPages();
  if (Array.isArray(pages) && pages.length) {
    return pages[pages.length - 1];
  }
  return null;
}
