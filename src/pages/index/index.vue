<template>
  <view class="index">
    <NumberDisplay />
    <NumberSubmit />
  </view>
</template>

<script>
import NumberDisplay from "../../components/NumberDisplay.vue";
import NumberSubmit from "../../components/NumberSubmit.vue";

export default {
  name: "Index",
  components: {
    NumberDisplay,
    NumberSubmit,
  },
};
</script>

<style>
.index {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
