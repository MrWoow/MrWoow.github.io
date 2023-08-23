<template>
  <div style="width: 100%; height: 100%">
    <el-container style="width: 100%; height: 100%">
      <el-header class="header">
        <top-bar />
      </el-header>
      <el-main class="main">
        <div class="main-container">
          <router-view />
        </div>
      </el-main>
      <el-footer class="footer">
        <footer-bar />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import TopBar from "./components/TopBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>
<style lang="less" scoped>
@import url("@/assets/variables.module.less");

.header {
  padding: 0;
}

.main {
  & {
    background-color: @color-light-grey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-shadow:
      0 5px 5px 0 @color-black inset,
      0 -5px 5px 0 @color-black inset;
  }

  .main-container {
    width: 80%;
    height: 100%;
    background-color: @color-deep-grey;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 10px @color-black;
  }
}

.footer {
  background-color: @color-black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
