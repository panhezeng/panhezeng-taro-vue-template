<template>
  <view ref="rootElement" class="example-template-index-page">
    <button @tap="goto">go to index page</button>
    <view>页面名：example-template-index-page</view>
    <view>rootElementTagName:{{ rootElementTagName }}</view>
    <template-comp
      :user="compProps.user"
      @template-comp-increment="eventHandler"
    />
    <view>stateExample:{{ example }}</view>
    <view>eventTip:{{ eventTip }}</view>
  </view>
</template>

<!--<script lang="ts">-->
<!--import {-->
<!--  defineComponent,-->
<!--  ref,-->
<!--  computed,-->
<!--  onMounted,-->
<!--  getCurrentInstance,-->
<!--} from "vue";-->

<!--import { useStore } from "vuex";-->
<!--import { storeKey } from "@/store";-->

<!--import Taro from "@tarojs/taro";-->

<!--import { path } from "@/app.config";-->
<!--import {-->
<!--  StateType as StateTypeExample,-->
<!--  names as NamesExample,-->
<!--} from "@/store/example-module";-->

<!--import TemplateComp from "@/components/example/TemplateComp.vue";-->

<!--export default defineComponent({-->
<!--  components: {-->
<!--    TemplateComp,-->
<!--  },-->
<!--  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */-->
<!--  setup(props, context) {-->
<!--    const internalInstance = getCurrentInstance()!;-->
<!--    const publicInstance = internalInstance.proxy;-->
<!--    const store = useStore(storeKey);-->
<!--    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */-->

<!--    const state = computed<StateTypeExample>(-->
<!--      () => store.state[NamesExample.module]-->
<!--    );-->

<!--    // store.commit(NamesExample.module + "/" + NamesExample.mutations.SOME_MUTATION)-->
<!--    // store.dispatch(NamesExample.module + "/" + NamesExample.actions.SOME_ACTION)-->

<!--    const rootElement = ref<HTMLElement | null>(null);-->
<!--    const rootElementTagName = ref("");-->
<!--    const compProps = {-->
<!--      user: {-->
<!--        firstName: "s",-->
<!--        lastName: "b",-->
<!--      },-->
<!--    };-->

<!--    const example = ref(state.value.example);-->
<!--    const eventTip = ref("");-->
<!--    function eventHandler(event: Event) {-->
<!--      eventTip.value = JSON.stringify(event);-->
<!--    }-->

<!--    function goto() {-->
<!--      Taro.navigateTo({ url: path.index });-->
<!--    }-->

<!--    onMounted(() => {-->
<!--      const taroInstance = Taro.getCurrentInstance();-->
<!--      const router = taroInstance.router!;-->
<!--      Taro.nextTick(() => {-->
<!--        // console.log("nextTick");-->
<!--      });-->
<!--      Taro.eventCenter.on(router.onReady, () => {-->
<!--        // console.log("onReady");-->
<!--      });-->
<!--      Taro.eventCenter.on(router.onShow, () => {-->
<!--        // console.log("onShow");-->
<!--      });-->

<!--      // console.log("pages onMounted ==============");-->
<!--      // console.log(rootElement.value);-->
<!--      if (rootElement.value) {-->
<!--        rootElementTagName.value = rootElement.value.tagName;-->
<!--      }-->
<!--    });-->

<!--    return {-->
<!--      rootElement,-->
<!--      rootElementTagName,-->
<!--      compProps,-->
<!--      example,-->
<!--      eventTip,-->
<!--      eventHandler,-->
<!--      goto,-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<script setup lang="ts">
import { ref, computed, onMounted, getCurrentInstance } from "vue";

import { useStore } from "vuex";
import { storeKey } from "@/store";

import Taro from "@tarojs/taro";

import { path } from "@/app.config";
import {
  StateType as StateTypeExample,
  names as NamesExample,
} from "@/store/example-module";

import TemplateComp from "@/components/example/TemplateComp.vue";

const internalInstance = getCurrentInstance()!;
const publicInstance = internalInstance.proxy;
const store = useStore(storeKey);

const state = computed<StateTypeExample>(
  () => store.state[NamesExample.module]
);

// store.commit(NamesExample.module + "/" + NamesExample.mutations.SOME_MUTATION)
// store.dispatch(NamesExample.module + "/" + NamesExample.actions.SOME_ACTION)

const rootElement = ref<HTMLElement | null>(null);
const rootElementTagName = ref("");
const compProps = {
  user: {
    firstName: "s",
    lastName: "b",
  },
};

const example = ref(state.value.example);
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
  Taro.eventCenter.on(router.onReady, () => {
    // console.log("onReady");
  });
  Taro.eventCenter.on(router.onShow, () => {
    // console.log("onShow");
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
