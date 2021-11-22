<template>
  <view ref="rootElement" class="example-template-index-page">
    <button @tap="goto">go to index page</button>
    <view>页面名：template-index</view>
    <view>rootElementTagName:{{ rootElementTagName }}</view>
    <template-comp v-bind="compProps" @template-comp-danger="eventHandler" />
    <view>stateExample:{{ example }}</view>
    <view>eventTip:{{ eventTip }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, getCurrentInstance } from "vue";

import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

import { path } from "@/app.config";
import {
  StateType as StateTypeExample,
  names as namesExample,
} from "@/store/example-module";

import TemplateComp from "@/components/example/TemplateComp.vue";
import { Todo } from "@/components/example/models";

/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);
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
  Taro.navigateTo({ url: path.index });
}

onMounted(() => {
  const taroInstance = Taro.getCurrentInstance();
  const router = taroInstance.router!;
  Taro.nextTick(() => {
    // console.log("nextTick");
  });
  Taro.eventCenter.on(router.onShow, () => {
    // console.log("onShow");
  });
  Taro.eventCenter.on(router.onReady, () => {
    // console.log("onReady");
  });

  // console.log("pages onMounted ==============");
  // console.log(rootElement.value);
  if (rootElement.value) {
    rootElementTagName.value = rootElement.value.tagName;
  }
});
</script>
<style lang="less">
.example-template-index-page {
}
</style>
