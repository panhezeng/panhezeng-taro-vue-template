export const path = {
  index: "/pages/index/index",
  example: "/pages/example/index",
};

export default {
  // entryPagePath: path.index.replace(/^\//, ""),
  entryPagePath: path.example.replace(/^\//, ""),
  pages: Object.values(path).map((value) => value.replace(/^\//, "")),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
