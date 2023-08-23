<template>
  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center">
    <el-result icon="warning"
               title="出错了"
               :sub-title="`${countDownRef}s后将回到主页面`"
               style="padding-bottom: 350px" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const countDownRef = ref(3);
const router = useRouter();
const countDown = () => {
  setTimeout(() => {
    if (countDownRef.value === 0) {
      router.push("/");
    } else {
      countDownRef.value -= 1;
      countDown();
    }
  }, 1000);
};
countDown();
</script>
