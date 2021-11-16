<template>
  <view class="example-template-comp">
    <view>template-comp</view>
    <button type="warn" @tap="increment">increment</button>
    <view>{{ user.firstName + user.lastName }}</view>
    <view>Clicks on todos: {{ clickCount }}</view>
  </view>
</template>

<!--<script lang="ts">-->
<!--import {-->
<!--  defineComponent,-->
<!--  ref,-->
<!--  PropType,-->
<!--  onMounted,-->
<!--  getCurrentInstance,-->
<!--  SetupContext,-->
<!--} from "vue";-->

<!--import { useStore } from "vuex";-->
<!--import { storeKey } from "@/store";-->

<!--import Taro from "@tarojs/taro";-->

<!--function useClickCount(context: SetupContext<any>) {-->
<!--  const clickCount = ref(0);-->

<!--  function increment(event: Event) {-->
<!--    context.emit("template-comp-increment", event);-->
<!--    clickCount.value += 1;-->
<!--    return clickCount.value;-->
<!--  }-->

<!--  return { clickCount, increment };-->
<!--}-->

<!--interface User {-->
<!--  firstName: string;-->
<!--  lastName: string;-->
<!--}-->

<!--export default defineComponent({-->
<!--  components: {},-->
<!--  props: {-->
<!--    user: {-->
<!--      type: Object as PropType<User>,-->
<!--      required: true,-->
<!--    },-->
<!--  },-->
<!--  emits: ["template-comp-danger"],-->
<!--  /* eslint-disable @typescript-eslsed-vars,no-unused-vars */-->
<!--  setup(props, context) {-->
<!--    const internalInstac  eCretntance()!;-->
<!--    const publicInstance = internalInstance.proxy;-->
<!--    const store = useStore(storeKey);-->
<!--    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */-->

<!--    function getElement() {-->
<!--      return Taro.createSelectorQuery().select(".example-template-comp");-->
<!--    }-->
<!--    // Vue 的虚拟 DOM 树渲染为 Taro 的虚拟 DOM 之后触发 ，这时无法通过 createSelectorQuery 等方法获取小程序渲染层 DOM 节点-->
<!--    onMounted(() => {-->
<!--      const taroInstance = Taro.getCurrentInstance();-->
<!--      const router = taroInstance.router!;-->
<!--      Taro.nextTick(() => {-->
<!--        // console.log("nextTick", !!getElement());-->
<!--      });-->
<!--      Taro.eventCenter.on(router.onReady, () => {-->
<!--        // console.log("onReady", !!getElement());-->
<!--      });-->
<!--      Taro.eventCenter.on(router.onShow, () => {-->
<!--        // console.log("onShow", !!getElement());-->
<!--      });-->
<!--    });-->

<!--    return {-->
<!--      ...useClickCount(context),-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<script setup lang="ts">
import { ref, PropType, onMounted, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
});

const emit = defineEmits(["template-comp-increment"]);

function useClickCount() {
  const clickCount = ref(0);

  function increment(event: Event) {
    emit("template-comp-increment", event);
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

interface User {
  firstName: string;
  lastName: string;
}

const { clickCount, increment } = useClickCount();

function getElement() {
  return Taro.createSelectorQuery().select(".example-template-comp");
}

// Vue 的虚拟 DOM 树渲染为 Taro 的虚拟 DOM 之后触发 ，这时无法通过 createSelectorQuery 等方法获取小程序渲染层 DOM 节点
onMounted(() => {
  const taroInstance = Taro.getCurrentInstance();
  const router = taroInstance.router!;
  Taro.nextTick(() => {
    // console.log("nextTick", !!getElement());
  });
  Taro.eventCenter.on(router.onReady, () => {
    // console.log("onReady", !!getElement());
  });
  Taro.eventCenter.on(router.onShow, () => {
    // console.log("onShow", !!getElement());
  });
});
</script>

<style lang="less">
.example-template-comp {
}
</style>
