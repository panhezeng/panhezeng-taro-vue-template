<template>
  <view>
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { storeKey } from "@/store";
import { names as namesNumbers } from "@/store/numbers";

const store = useStore(storeKey);
const getNumbers = computed(
  () =>
    store.getters[namesNumbers.module + "/" + namesNumbers.getters.GET_NUMBER]
);
</script>

<style lang="less">
.title {
  font-size: 40px;
}
</style>
