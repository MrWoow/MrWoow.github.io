<template>
  <div id="WTK-admin">
    <el-image class="background"
              fit="cover"
              src="https://sgs-default.oss-cn-shanghai.aliyuncs.com/16319493599811631949360657.jpg" />
    <el-container style="width: 100%; height: 100%">
      <el-aside width="300px">
        <side-bar />
      </el-aside>
      <el-main height="" />
    </el-container>
  </div>
</template>

<script setup>
import SideBar from "./components/SideBar.vue";
</script>
<style lang="less" scoped>
#WTK-admin {
  & {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .background {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.4;
  }
}
</style>
