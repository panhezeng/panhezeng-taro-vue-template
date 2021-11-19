<template>
  <view class="example-template-comp">
    <view>template-comp</view>
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

<!--import { Todo } from "src/components/example/models";-->

<!--function useClickCount() {-->
<!--  const clickCount = ref(0);-->

<!--  function increment() {-->
<!--    clickCount.value += 1;-->
<!--    return clickCount.value;-->
<!--  }-->

<!--  return { clickCount, increment };-->
<!--}-->

<!--function useDisplayTodo(todos: Ref<Todo[]>) {-->
<!--  const todoCount = computed(() => todos.value.length);-->
<!--  return { todoCount };-->
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
<!--    todos: {-->
<!--      type: Array as PropType<Todo[]>,-->
<!--      default: () => [] as Todo[],-->
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
<!--      ...useDisplayTodo(toRef(props, "todos"))-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<script setup lang="ts">
import {
  computed,
  ref,
  Ref,
  toRef,
  PropType,
  onMounted,
  getCurrentInstance,
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
const $store = useStore(storeKey);
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

const emit = defineEmits(["template-comp-danger"]);

const { clickCount, increment } = useClickCount();

const { todoCount } = useDisplayTodo(toRef(props, "todos"));

function danger(event: Event) {
  emit("template-comp-danger", event);
  // console.log(event:Event);
}

// function getElement() {
//   return Taro.createSelectorQuery().select(".example-template-comp");
// }

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
