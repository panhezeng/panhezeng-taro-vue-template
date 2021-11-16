declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development" | string;
    API_BASE_URL: string;
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}
