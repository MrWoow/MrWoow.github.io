<template>
  <div class="side-bar" />
</template>

<script setup></script>
<style lang="less" scoped>
@import url('@/assets/variables.module.less');
.side-bar {
  & {
    width: 100%;
    height: 100%;
    background-color: ~'@{color-deep-grey}aa';
  }
}
</style>
