export const path = {
  index: "/pages/index/index",
};

export default {
  entryPagePath: path.index.replace(/^\//, ""),
  pages: Object.values(path).map((value) => value.replace(/^\//, "")),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
