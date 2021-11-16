<template>
  <view class="index">
    <button @tap="goto">go to example-template-index-page</button>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { path } from "@/app.config";

function goto() {
  Taro.navigateTo({ url: path.example });
}
</script>

<style lang="less">
.index {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
