<template>
  <view class="example-template-comp">
    <view :style="`font-size: ${pt(30)}`">template-comp</view>
    <button type="warn" @tap="danger">danger</button>
    <view>{{ user.firstName + user.lastName }}</view>
    <view>
      <button v-for="todo in todos" :key="todo.id" @tap="increment">
        {{ todo.id }} - {{ todo.content }}
      </button>
      <view>Clicks on todos: {{ clickCount }}</view>
    </view>
  </view>
</template>

<script lang="ts">
export const eventNames = {
  danger: "template-comp-danger",
};
export default {};
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  Ref,
  toRef,
  PropType,
  onMounted,
  getCurrentInstance,
  onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

import { Todo } from "src/components/example/models";

function useClickCount() {
  const clickCount = ref(0);

  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

interface User {
  firstName: string;
  lastName: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars,@typescript-eslint/require-await */
const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);
const taroInstance = Taro.getCurrentInstance();
const router = taroInstance.router!;
/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars,@typescript-eslint/require-await */

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
  todos: {
    type: Array as PropType<Todo[]>,
    default: () => [] as Todo[],
  },
});

const emit = defineEmits(Object.values(eventNames));

const { clickCount, increment } = useClickCount();

const { todoCount } = useDisplayTodo(toRef(props, "todos"));

function danger(event: Event) {
  emit(eventNames.danger, event);
  // console.log(event:Event);
}

// function getElement() {
//   return Taro.createSelectorQuery().select(".example-template-comp");
// }

function onShow() {
  // console.log("example-template-comp onShow");
}

function onReady() {
  // console.log("example-template-comp onReady");
}

// Vue 的虚拟 DOM 树渲染为 Taro 的虚拟 DOM 之后触发 ，这时无法通过 createSelectorQuery 等方法获取小程序渲染层 DOM 节点
onMounted(() => {
  // console.log("example-template-comp onMounted ==============");
  Taro.nextTick(() => {
    // console.log("nextTick", !!getElement());
  });
  Taro.eventCenter.once(router.onShow, onShow);
  Taro.eventCenter.once(router.onReady, onReady);
});
onBeforeUnmount(() => {
  // console.log("example-template-comp onBeforeUnmount");
});
</script>

<style lang="less">
.example-template-comp {
}
</style>
