<template>
  <view class="index-page">
    <button @tap="goto">go to example-page</button>
    <view v-if="stateUserInfo.token" class="user-info"> </view>
    <view v-else>
      <view>
        <text>登录后查看个人信息</text>
      </view>
      <view>
        <button
          size="mini"
          type="default"
          class="login-tip-btn"
          @tap="data.auth = true"
        >
          请登录
        </button>
      </view>
    </view>
  </view>
  <auth
    v-if="data.auth"
    class="index-page-auth"
    @deny="data.auth = false"
    @agree="agreeAuth"
  />
</template>

<script setup lang="ts">
import { getCurrentInstance, computed, reactive, onMounted } from "vue";

import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

import { path } from "@/app.config";
import gotoPage from "@/utils/go-to-page";

import {
  names as namesUserInfo,
  StateType as StateTypeUserInfo,
} from "@/store/user-info";

import Auth from "@/components/Auth.vue";
import useWeappLifecycle from "@/utils/use-weapp-lifecycle";

/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);
const taroInstance = Taro.getCurrentInstance();
const router = taroInstance.router!;
/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */

const stateUserInfo = computed<StateTypeUserInfo>(
  () => store.state[namesUserInfo.module]
);

const data = reactive({ auth: false });

function agreeAuth() {
  Taro.showLoading({
    title: "数据加载中...",
    mask: true,
  });
}

function goto() {
  gotoPage({ url: path.example });
}
const { onShow, onReady, weappLifecycle } = useWeappLifecycle();
onShow(() => {
  console.log("index-page onShow", data);
});
onReady(() => {
  console.log("index-page onReady");
});

onMounted(() => {
  console.log("index-page onMounted ==============");
});
</script>

<style lang="less">
.index-page {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.index-page-auth {
  position: fixed;
  top: 0;
  bottom: 100%;
  left: 0;
  right: 100%;
  z-index: 100;
  background: #000;
}
</style>
