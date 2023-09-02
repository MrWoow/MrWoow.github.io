<template>
  <el-row>
    <el-col>
      <el-tooltip content="返回主页"
                  placement="bottom">
        <el-button type="primary"
                   :icon="House"
                   style="padding: 8px;"
                   @click="router.push('/')" />
      </el-tooltip>
      <el-tooltip content="添加武将"
                  placement="bottom">
        <el-button type="primary"
                   :icon="Plus"
                   style="padding: 8px;"
                   @click="$emit('whenAddGeneralButtonClicked')" />
      </el-tooltip>
      <el-tooltip content="下载数据"
                  placement="bottom">
        <el-button type="primary"
                   :icon="Download"
                   style="padding: 8px;"
                   @click="downloadData" />
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script setup>
import { House, Plus, Download } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { saveAs } from "file-saver";
import useStore from "@WTK/stores/DefaultStore.js";

const router = useRouter();
const $emit = defineEmits(["whenAddGeneralButtonClicked"]);
const defaultStore = useStore();
const downloadData = () => {
  let str = new Blob([JSON.stringify(defaultStore.generalList)], { "type": "text/plain;charset=utf-8" });
  saveAs(str, "general_list.json");
  str = new Blob([JSON.stringify(defaultStore.tagList)], { "type": "text/plain;charset=utf-8" });
  saveAs(str, "tag_list.json");
  str = new Blob([JSON.stringify(defaultStore.keywordList)], { "type": "text/plain;charset=utf-8" });
  saveAs(str, "keyword_list.json");
};
</script>
<style lang="less" scoped></style>
