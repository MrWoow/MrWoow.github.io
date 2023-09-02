<template>
  <el-scrollbar class="side-bar">
    <div class="title-container">
      <span class="title">武将标签</span>
      <div class="button-container">
        <el-tooltip content="添加"
                    placement="bottom"
                    :show-after="500"
                    :hide-after="0">
          <el-button :icon="Plus"
                     style="padding: 4px; height: auto"
                     @click="openAddTagDialog(defaultStore.tagList, 1)" />
        </el-tooltip>
      </div>
    </div>
    <el-tree :key="tagListTreeKey"
             default-expand-all
             :data="defaultStore.tagList"
             class="custom-el-tree">
      <template #default="{ node, data }">
        <div v-if="data.level === 1"
             class="tree-node">
          <span class="first-level-name">{{ data.name }}</span>
          <div class="button-container">
            <el-tooltip content="上移"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Top"
                         :disabled="data.isTop"
                         @click="moveUpThisItem(data, defaultStore.tagList, 'id')" />
            </el-tooltip>
            <el-tooltip content="添加"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Plus"
                         @click="openAddTagDialog(data.children, 2)" />
            </el-tooltip>
            <el-tooltip content="编辑"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Edit"
                         @click="openModifyTagDialog(data, defaultStore.tagList)" />
            </el-tooltip>
            <el-tooltip content="删除"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Delete" />
            </el-tooltip>
          </div>
        </div>
        <div v-if="data.level === 2"
             class="tree-node">
          <span class="second-level-name">{{ data.name }}</span>
          <div class="button-container">
            <el-tooltip content="编辑"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Edit" />
            </el-tooltip>
            <el-tooltip content="删除"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Delete" />
            </el-tooltip>
          </div>
        </div>
      </template>
    </el-tree>
  </el-scrollbar>
  <el-dialog :key="tempKey"
             v-model="addOrModifyTagJSON.dialogVisible"
             title="标签"
             align-center
             width="20%">
    <el-input ref="tagNameInputRef"
              v-model="addOrModifyTagJSON.name"
              placeholder="请输入"
              @keyup.enter="addOrModifyTagJSON.whenDone" />
    <template #footer>
      <div class="button-container">
        <el-button @click="addOrModifyTagJSON.dialogVisible = false">
          取消
        </el-button>
        <el-button type="success"
                   @click="addOrModifyTagJSON.whenDone">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import useStore from "@WTK/stores/DefaultStore.js";
import { Plus, Edit, Delete, Top } from "@element-plus/icons-vue";
import { nextTick, reactive, ref } from "vue";
import { ElMessage } from "element-plus";

const defaultStore = useStore();
const tempKey = ref(1);
const tagListTreeKey = ref(1);
let addOrModifyTagJSON = reactive({
  "name": "",
  "level": 0,
  "list": [],
  "dialogVisible": false
});
const tagNameInputRef = ref();

const customIsEmpty = (value) => {
  return value === "" || value === null || value === undefined;
};
const isDuplicated = (value, list, key) => {
  for (const item of list) {
    if (item[key] === value) {
      return true;
    }
  }
  return false;
};
const addTagToList = () => {
  if (customIsEmpty(addOrModifyTagJSON.name)) {
    ElMessage({
      "message": "不能为空",
      "type": "error"
    });
    return;
  }
  if (isDuplicated(addOrModifyTagJSON.name, addOrModifyTagJSON.list, "name")) {
    ElMessage({
      "message": "不能重复",
      "type": "error"
    });
    return;
  }
  const tempTag = {
    "name": addOrModifyTagJSON.name,
    "id": new Date().getTime().toString(),
    "level": addOrModifyTagJSON.level,
    "isTop": addOrModifyTagJSON.list.length === 0,
    "children": []
  };
  addOrModifyTagJSON.list.push(tempTag);
  addOrModifyTagJSON.dialogVisible = false;
  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const openAddTagDialog = (list, level) => {
  addOrModifyTagJSON = reactive({
    "name": "",
    "level": level,
    "list": list,
    "dialogVisible": true,
    "whenDone": addTagToList
  });
  tempKey.value += 1;
  nextTick(() => {
    tagNameInputRef.value.focus();
  });
};
const findItemIndexInThisList = (item, list, key) => {
  for (let i = 0; i < list.length; i++) {
    if (item[key] === list[i][key]) {
      return i;
    }
  }
  return undefined;
};
const moveUpThisItem = (item, list, key) => {
  const itemIndex = findItemIndexInThisList(item, list, key);
  if (itemIndex === undefined || itemIndex === 0) {
    ElMessage({
      "message": "出错了，上移失败",
      "type": "error"
    });
    return;
  }
  const tempValue = list[itemIndex];
  list[itemIndex] = list[itemIndex - 1];
  list[itemIndex - 1] = tempValue;
  if (itemIndex === 1) {
    list[itemIndex].isTop = false;
    list[itemIndex - 1].isTop = true;
  }
  tagListTreeKey.value += 1;
  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const modifyTagInList = () => {

};
const openModifyTagDialog = (item, list) => {
  addOrModifyTagJSON = reactive({
    "name": item.name,
    "list": list,
    "dialogVisible": true,
    "whenDone": modifyTagInList
  });
  tempKey.value += 1;
  nextTick(() => {
    tagNameInputRef.value.focus();
  });
};
</script>
<style lang="less" scoped>
@import url("@/assets/variables.module.less");
.side-bar {
  & {
    width: 100%;
    height: 100%;
    background-color: ~"@{color-deep-grey}aa";
  }

  .title-container {
    & {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-between;
      padding: 10px;
      box-sizing: border-box;
    }

    .title {
      font-family: "楷体";
      font-size: 30px;
    }
  }

  .custom-el-tree {
    & {
      background-color: transparent;
    }

    .tree-node {
      & {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .first-level-name {
        font-family: "宋体";
        font-size: 25px;
      }

      .second-level-name {
        font-family: "宋体";
        font-size: 20px;
      }

      .button-container {
        & {
          margin-right: 10px;
        }

        .el-button + .el-button {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
