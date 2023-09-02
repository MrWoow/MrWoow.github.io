<template>
  <div id="WTK-main-container"
       class="center-flex">
    <right-top-button-container class="right-top-button-container"
                                @when-add-general-button-clicked="addGeneral()" />
    <el-drawer :key="changeKey"
               v-model="isShowGeneralDrawer"
               title="添加武将"
               direction="rtl"
               :size="300">
      <add-general-drawer />
    </el-drawer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import useStore from "@WTK/stores/DefaultStore.js";
import rightTopButtonContainer from "./RightTopButtonContainer.vue";
import AddGeneralDrawer from "./AddGeneralDrawer.vue";

const isShowGeneralDrawer = ref(false);
const changeKey = ref(1);
const defaultStore = useStore();
defaultStore.initialize();

const addGeneral = () => {
  changeKey.value += 1;
  isShowGeneralDrawer.value = true;
};
</script>
<style lang="less" scoped>
#WTK-main-container {
  & {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .right-top-button-container {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
