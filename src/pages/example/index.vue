<template>
  <view ref="rootElement" class="example-page">
    <button @tap="goto">go to index page</button>
    <view>页面名：template-index</view>
    <view>rootElementTagName:{{ rootElementTagName }}</view>
    <template-comp v-bind="compProps" @template-comp-danger="eventHandler" />
    <view>stateExample:{{ example }}</view>
    <view>eventTip:{{ eventTip }}</view>
    <example-view />
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, getCurrentInstance } from "vue";

import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

import { path } from "@/app.config";
import gotoPage from "@/utils/go-to-page";

import {
  StateType as StateTypeExample,
  names as namesExample,
} from "@/store/example-module";

import TemplateComp from "@/components/example/TemplateComp.vue";
import { Todo } from "@/components/example/models";
import useWeappLifecycle from "@/utils/use-weapp-lifecycle";

/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);
const taroInstance = Taro.getCurrentInstance();
const router = taroInstance.router!;
/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */

const stateExample = computed<StateTypeExample>(
  () => store.state[namesExample.module]
);

// store.commit(namesExample.module + "/" + namesExample.mutations.SOME_MUTATION)
// store.dispatch(namesExample.module + "/" + namesExample.actions.SOME_ACTION)

const rootElement = ref<HTMLElement | null>(null);
const rootElementTagName = ref("");
const compProps = {
  user: {
    firstName: "s",
    lastName: "b",
  },
  todos: [{ id: 1, content: "一" }] as Todo[],
};

const example = ref(stateExample.value.example);
const eventTip = ref("");
function eventHandler(event: Event) {
  eventTip.value = JSON.stringify(event);
}

function goto() {
  gotoPage({ url: path.index });
}

const { onShow, onReady, weappLifecycle } = useWeappLifecycle();
onShow(() => {
  // console.log("example-page onShow");
});
onReady(() => {
  // console.log("example-page onReady");
});

// Vue 的虚拟 DOM 树渲染为 Taro 的虚拟 DOM 之后触发 ，这时无法通过 createSelectorQuery 等方法获取小程序渲染层 DOM 节点
onMounted(() => {
  // console.log("example-page onMounted ==============");
  // console.log(rootElement.value);
  if (rootElement.value) {
    rootElementTagName.value = rootElement.value.tagName;
  }
  Taro.nextTick(() => {
    // console.log("nextTick", !!getElement());
  });
});
</script>
<style lang="less">
.example-page {
}
</style>
