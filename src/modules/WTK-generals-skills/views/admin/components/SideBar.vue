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
    <el-tree :key="tempKey"
             default-expand-all
             :data="defaultStore.tagList"
             class="custom-el-tree"
             :expand-on-click-node="false">
      <template #default="{ node, data }">
        <div v-if="data.level === 1"
             class="tree-node first-level-tree-node">
          <span class="first-level-name">{{ data.name }}</span>
          <div class="button-container">
            <el-tooltip content="上移"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Top"
                         :disabled="data.isTop"
                         @click="moveUpThisItemInList(data, defaultStore.tagList, 'id')" />
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
                         :icon="Delete"
                         @click="deleteItemInList(data, defaultStore.tagList)" />
            </el-tooltip>
          </div>
        </div>
        <div v-if="data.level === 2"
             class="tree-node second-level-tree-node">
          <span class="second-level-name">{{ data.name }}</span>
          <div class="button-container">
            <el-tooltip content="上移"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Top"
                         :disabled="data.isTop"
                         @click="moveUpThisItemInList(data, node.parent.data.children, 'id')" />
            </el-tooltip>
            <el-tooltip content="编辑"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Edit"
                         @click="openModifyTagDialog(data, node.parent.data.children)" />
            </el-tooltip>
            <el-tooltip content="删除"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Delete"
                         @click="deleteItemInList(data, node.parent.data.children)" />
            </el-tooltip>
          </div>
        </div>
      </template>
    </el-tree>
    <div class="title-container">
      <span class="title">技能关键词</span>
      <div class="button-container">
        <el-tooltip content="添加"
                    placement="bottom"
                    :show-after="500"
                    :hide-after="0">
          <el-button style="padding: 4px; height: auto"
                     :icon="Plus"
                     @click="openAddKeywordDialog(defaultStore.keywordList)" />
        </el-tooltip>
      </div>
    </div>
    <el-tree :key="tempKey"
             default-expand-all
             :data="defaultStore.keywordList"
             class="custom-el-tree"
             :expand-on-click-node="false">
      <template #default="{ node, data }">
        <div class="tree-node first-level-tree-node">
          <span class="first-level-name">{{ data.name }}</span>
          <div class="button-container">
            <el-tooltip content="上移"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Top"
                         :disabled="data.isTop"
                         @click="moveUpThisItemInList(data, defaultStore.keywordList, 'id')" />
            </el-tooltip>
            <el-tooltip content="编辑"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Edit"
                         @click="openModifyKeywordDialog(data, defaultStore.keywordList)" />
            </el-tooltip>
            <el-tooltip content="删除"
                        placement="bottom"
                        :show-after="500"
                        :hide-after="0">
              <el-button style="padding: 4px; height: auto"
                         :icon="Delete"
                         @click="deleteItemInList(data, defaultStore.tagList)" />
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
  <el-dialog :key="tempKey"
             v-model="addOrModifyKeywordJSON.dialogVisible"
             title="关键词"
             align-center
             width="25%">
    <el-input ref="keywordNameInputRef"
              v-model="addOrModifyKeywordJSON.name"
              placeholder="请输入"
              @keyup.enter="addOrModifyKeywordJSON.whenDone" />
    <el-input v-model="addOrModifyKeywordJSON.value"
              autosize
              type="textarea"
              placeholder="请输入"
              @keyup.enter="addOrModifyKeywordJSON.whenDone" />
    <template #footer>
      <div class="button-container">
        <el-button @click="addOrModifyKeywordJSON.dialogVisible = false">
          取消
        </el-button>
        <el-button type="success"
                   @click="addOrModifyKeywordJSON.whenDone">
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
import { ElMessage, ElMessageBox } from "element-plus";

const defaultStore = useStore();
const tempKey = ref(1);
let addOrModifyTagJSON = reactive({
  "dialogVisible": false
});
let addOrModifyKeywordJSON = reactive({
  "dialogVisible": false
});
const tagNameInputRef = ref();
const keywordNameInputRef = ref();

const addKeywordToList = () => {
  if (isEmpty(addOrModifyKeywordJSON.name) || isEmpty(addOrModifyKeywordJSON.value)) {
    ElMessage({
      "message": "不能为空",
      "type": "error"
    });
    return;
  }
  if (isDuplicated(addOrModifyKeywordJSON.name, addOrModifyKeywordJSON.list, "name")) {
    ElMessage({
      "message": "不能重复",
      "type": "error"
    });
    return;
  }
  const tempKeyword = {
    "name": addOrModifyKeywordJSON.name,
    "value": addOrModifyKeywordJSON.value,
    "id": new Date().getTime().toString(),
    "isTop": addOrModifyKeywordJSON.list.length === 0
  };
  addOrModifyKeywordJSON.list.push(tempKeyword);
  addOrModifyKeywordJSON.dialogVisible = false;
  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const openAddKeywordDialog = (list) => {
  addOrModifyKeywordJSON = reactive({
    "name": "",
    "value": "",
    "list": list,
    "dialogVisible": true,
    "whenDone": addKeywordToList
  });
  tempKey.value += 1;
  nextTick(() => {
    keywordNameInputRef.value.focus();
  });
};
const modifyKeywordInList = () => {
  if (isEmpty(addOrModifyKeywordJSON.name) || isEmpty(addOrModifyKeywordJSON.value)) {
    ElMessage({
      "message": "不能为空",
      "type": "error"
    });
    return;
  }
  if (addOrModifyKeywordJSON.name === addOrModifyKeywordJSON.item.name && addOrModifyKeywordJSON.value === addOrModifyKeywordJSON.item.value) {
    ElMessage({
      "message": "无修改",
      "type": "warning"
    });
    return;
  }
  if (isDuplicated(addOrModifyKeywordJSON.name, addOrModifyKeywordJSON.list, "name")) {
    ElMessage({
      "message": "不能重复",
      "type": "error"
    });
    return;
  }
  addOrModifyKeywordJSON.item.name = addOrModifyKeywordJSON.name;
  addOrModifyKeywordJSON.item.value = addOrModifyKeywordJSON.value;
  addOrModifyKeywordJSON.dialogVisible = false;
  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const openModifyKeywordDialog = (item, list) => {
  addOrModifyKeywordJSON = reactive({
    "item": item,
    "name": item.name,
    "value": item.value,
    "list": list,
    "dialogVisible": true,
    "whenDone": modifyKeywordInList
  });
  tempKey.value += 1;
  nextTick(() => {
    keywordNameInputRef.value.focus();
  });
};
const isEmpty = (value) => {
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
  if (isEmpty(addOrModifyTagJSON.name)) {
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
const moveUpThisItemInList = (item, list, key) => {
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
  // 重新渲染el-tree
  tempKey.value += 1;

  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const modifyTagInList = () => {
  if (isEmpty(addOrModifyTagJSON.name)) {
    ElMessage({
      "message": "不能为空",
      "type": "error"
    });
    return;
  }
  if (addOrModifyTagJSON.name === addOrModifyTagJSON.item.name) {
    ElMessage({
      "message": "无修改",
      "type": "warning"
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
  addOrModifyTagJSON.item.name = addOrModifyTagJSON.name;
  addOrModifyTagJSON.dialogVisible = false;
  ElMessage({
    "message": "操作成功",
    "type": "success"
  });
};
const openModifyTagDialog = (item, list) => {
  addOrModifyTagJSON = reactive({
    "item": item,
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
const deleteItemInList = (item, list) => {
  ElMessageBox.confirm(`是否删除 ${item.name}`, "警告", {
    "confirmButtonText": "是",
    "cancelButtonText": "否",
    "type": "warning"
  }).then(() => {
    const itemIndex = findItemIndexInThisList(item, list, "id");
    if (itemIndex === undefined) {
      ElMessage({
        "message": "出错了",
        "type": "error"
      });
      return;
    }
    list.splice(itemIndex, 1);
    if (itemIndex === 0) {
      list[0].isTop = true;
    }
    ElMessage({
      "message": "操作成功",
      "type": "success"
    });
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

    :deep(.el-tree-node__content) {
      height: auto;
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

    .first-level-tree-node {
      height: 50px;
    }

    .second-level-tree-node {
      height: 35px;
    }
  }
}
</style>
