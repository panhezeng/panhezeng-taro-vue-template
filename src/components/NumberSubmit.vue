<template>
  <input v-model="number" type="number" class="input" />
  <button @tap="addNumber">Add new number</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { storeKey } from "@/store";
import { names as namesNumbers } from "@/store/numbers";

const store = useStore(storeKey);
const number = ref(0);

function addNumber() {
  store.dispatch(
    namesNumbers.module + "/" + namesNumbers.actions.ADD_NUMBER,
    Number(number.value)
  );
}
</script>

<style lang="less">
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
