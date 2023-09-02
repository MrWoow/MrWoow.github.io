<template>
  <el-form :model="addGeneralFormRef"
           label-position="right"
           label-width="70px">
    <el-form-item label="武将姓名">
      <el-input v-model="addGeneralFormRef.name" />
    </el-form-item>
    <el-form-item label="武将标签">
      <el-select v-model="addGeneralFormRef.tagList"
                 multiple
                 placeholder="暂无标签">
        <el-option-group v-for="tag1 in defaultStore.tagList"
                         :key="tag1.id"
                         :label="tag1.name">
          <el-option v-for="tag2 in tag1.children"
                     :key="tag2.id"
                     :label="tag2.name"
                     :value="`${tag1.id}-${tag2.id}`" />
        </el-option-group>
      </el-select>
    </el-form-item>
    <div v-for="skill in addGeneralFormRef.skillList"
         :key="skill.id">
      <el-form-item label="技能名">
        <el-input v-model="skill.name"
                  placeholder="请输入技能名" />
      </el-form-item>
      <el-form-item label="技能描述">
        <el-input v-model="skill.description"
                  autosize
                  type="textarea"
                  placeholder="请输入修改内容" />
      </el-form-item>
      <div class="center-flex">
        <el-button type="danger"
                   style="margin-bottom: 18px;">
          删除
        </el-button>
      </div>
    </div>
    <div class="center-flex">
      <el-button>添加技能</el-button>
      <el-button type="primary">
        提交
      </el-button>
    </div>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import useStore from "@WTK/stores/DefaultStore.js";

const addGeneralFormRef = reactive({
  "name": "",
  "tagList": [],
  "skillList": [
    {
      "name": "",
      "description": "",
      "id": 1
    },
    {
      "name": "",
      "description": ""
    }
  ]
});
const defaultStore = useStore();
</script>
<style lang="less" scoped></style>
