<template>
  <view class="auth-comp">
    <view class="box">
      <view class="txt">需要您通过授权_____ </view>
      <button class="btn" type="warn" @tap="deny">拒绝</button>
      <template v-if="typeof wx !== 'undefined'">
        <button
          v-if="canIUseGetUserProfile"
          class="btn"
          type="primary"
          @tap="getUserProfile"
        >
          授权
        </button>
        <button
          v-else
          class="btn"
          type="primary"
          open-type="getUserInfo"
          @getuserinfo="getUserInfo"
        >
          授权
        </button>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
export const eventName = {
  deny: "deny",
  agree: "agree",
};
export default {};
</script>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";
import { names as namesUserInfo, UserProfileType } from "@/store/user-info";

/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars,@typescript-eslint/require-await */
const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);
/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars,@typescript-eslint/require-await */

const emit = defineEmits(Object.values(eventName));

function deny() {
  emit(eventName.deny);
}

const canIUseGetUserProfile = ref(
  !!(typeof wx !== "undefined" && wx.getUserProfile)
);

function agree(data?: null | UserProfileType) {
  if (data && data.encryptedData && data.iv) {
    emit(eventName.agree, data);
  } else {
    Taro.showToast({
      title: "授权失败，请重新授权",
      icon: "none",
      duration: 5000,
    });
  }
}

function getUserProfile(event: CustomEvent) {
  Taro.getUserProfile({
    desc: "确认授权关联您的军职账号", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      agree(res);
    },
  });
}

function getUserInfo(event: CustomEvent) {
  agree(event.detail);
}
</script>

<style lang="less">
.auth-comp {
  width: 100%;
  height: 100%;
  background: #000;

  .box {
    width: 100%;
    height: 250px;
    background: #000;
    color: #fff;
    text-align: center;
  }

  .txt {
    padding: 20px 50px;
    text-align: left;
  }

  .btn {
    width: 200px;
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
