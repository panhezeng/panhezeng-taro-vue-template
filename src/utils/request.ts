import Taro from "@tarojs/taro";
import store from "@/store";
import {
  names as namesUserInfo,
  StateType as StateTypeUserInfo,
} from "@/store/user-info";

const interceptor = function (chain) {
  const requestParams = chain.requestParams;

  requestParams.url =
    String(process.env.API_BASE_URL) + String(requestParams.url);

  const stateUserInfo = store.state[namesUserInfo.module] as StateTypeUserInfo;

  if (stateUserInfo.token) {
    requestParams.header = Object.assign({}, requestParams.header, {
      Authorization: `Bearer ${stateUserInfo.token}`,
    });
  }

  // const { method, data, url } = requestParams;

  // console.log(`http ${method || "GET"} --> ${url} data: `, data);

  return chain.proceed(requestParams).then((res) => {
    // console.log(`http <-- ${url} result:`, res);
    return res;
  });
};
Taro.addInterceptor(interceptor);
