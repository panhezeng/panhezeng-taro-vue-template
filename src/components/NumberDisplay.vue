<template>
  <view>
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { storeKey } from "../store";
import { names as namesNumbers } from "../store/numbers";

export default {
  setup() {
    const store = useStore(storeKey);
    const getNumbers = computed(
      () =>
        store.getters[
          namesNumbers.module + "/" + namesNumbers.getters.GET_NUMBER
        ]
    );

    return {
      getNumbers,
    };
  },
};
</script>

<style>
.title {
  font-size: 40px;
}
</style>
