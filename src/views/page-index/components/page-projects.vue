<template>
  <el-row>
    <el-col :span="6"
            style="display: flex; justify-content: center; align-items: center; padding: 10px">
      <el-card shadow="hover"
               class="card"
               @click="router.push('/WTK')">
        <el-image src="https://www.sanguosha.cn/storage/uploads/images/C6oeBaGMxPXnp6hCqoUhQfNHw9XCesCqJj4B18wU.jpeg" />
        <el-row justify="center"
                style="margin-top: 20px">
          <el-text size="large"
                   tag="bold">
            三国杀面杀武将技能
          </el-text>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style lang="less" scoped>
@import url("@/assets/variables.module.less");
.card {
  & {
    background-color: @color-light-grey;
    cursor: pointer;
    transition: 0.3s all;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
