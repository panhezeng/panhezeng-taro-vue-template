<template>
  <view class="index">
    <NumberDisplay />
    <NumberSubmit />
  </view>
</template>

<script setup lang="ts">
import NumberDisplay from "@/components/NumberDisplay.vue";
import NumberSubmit from "@/components/NumberSubmit.vue";
</script>

<style lang="less">
.index {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
