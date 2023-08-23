<template>
  <div id="top-bar"
       style="position: relative">
    <el-menu :default-active="$route.path"
             class="menu"
             mode="horizontal"
             :background-color="colorVariables.colorBlack"
             :text-color="colorVariables.colorWhite"
             :active-text-color="colorVariables.colorLightBlue"
             router>
      <el-menu-item index="/page-index/projects">
        <el-icon><Lightning /></el-icon>
        项目
      </el-menu-item>
      <el-menu-item index="/page-index/display">
        <el-icon><MilkTea /></el-icon>
        展示
      </el-menu-item>
    </el-menu>
    <el-row class="rows-container">
      <el-dropdown class="row-item">
        <el-avatar :size="avatarSizeRef"
                   shape="square"
                   src="https://web.sanguosha.com/220/h5_2/res/runtime/pc/Achievement/image/605.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-drop-down-item style="padding: 5px">
              <el-link href="https://baike.baidu.com/item/%E5%8F%B8%E9%A9%AC%E6%87%BF/9367?fromModule=lemma_search-box"
                       target="_blank">
                晋宣帝百科
              </el-link>
            </el-drop-down-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="row-item">
        <el-avatar :size="avatarSizeRef"
                   shape="square"
                   src="https://web.sanguosha.com/220/h5_2/res/runtime/pc/Achievement/image/236.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-drop-down-item style="padding: 5px">
              <el-link href="https://baike.baidu.com/item/%E6%9B%B9%E6%93%8D/6772?fromModule=lemma_search-box"
                       target="_blank">
                魏武帝百科
              </el-link>
            </el-drop-down-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="row-item">
        <el-avatar :size="avatarSizeRef"
                   shape="square"
                   src="https://web.sanguosha.com/220/h5_2/res/runtime/pc/Achievement/image/667.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-drop-down-item style="padding: 5px">
              <el-link href="https://baike.baidu.com/item/%E5%88%98%E5%A4%87/30564?fromModule=lemma_sense-layer#viewPageContent"
                       target="_blank">
                汉昭烈帝百科
              </el-link>
            </el-drop-down-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="row-item">
        <el-avatar :size="avatarSizeRef"
                   shape="square"
                   src="https://web.sanguosha.com/220/h5_2/res/runtime/pc/Achievement/image/956.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-drop-down-item style="padding: 5px">
              <el-link href="https://baike.baidu.com/item/%E5%AD%99%E6%9D%83/17337?fromModule=lemma_search-box"
                       target="_blank">
                吴大帝百科
              </el-link>
            </el-drop-down-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-row>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import colorVariables from "@/assets/variables.module.less";

const $route = useRoute();
const avatarSizeRef = ref(30);
</script>
<style lang="less" scoped>
#top-bar {
  & {
    height: 100%;
  }

  .menu {
    height: 100%;
  }
}
.rows-container {
  & {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  .row-item {
    margin-right: 20px;
  }
}
</style>
