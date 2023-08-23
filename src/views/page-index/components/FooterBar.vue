<template>
  <el-text type="info"
           size="default">
    made by
    <el-popover placement="top-start"
                trigger="hover"
                :width="430"
                content="This is Mr.Wow from China. Wishing for world peace! 在暴力面前，每个普通人都弱得像待宰的羔羊，我们该怎么办，世界将怎么走">
      <template #reference>
        <el-text type="primary"
                 size="large">
          Mr.Wow
        </el-text>
      </template>
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-text size="large"
                     type="primary">
              这里是王昊
            </el-text>
          </el-row>
          <el-row>
            <el-col :span="2" />
            <el-col :span="20">
              <el-text>在暴力面前，每个普通人都弱得像待宰的羔羊，我们该怎么办，世界将怎么走？</el-text>
            </el-col>
          </el-row>
          <el-row>
            <el-text size="large"
                     type="primary">
              愿世界和平！
            </el-text>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-text size="large"
                     type="primary">
              This is Mr.Wow
            </el-text>
          </el-row>
          <el-row>
            <el-col :span="2" />
            <el-col :span="20">
              <el-text style="word-break: normal">
                In the face of violence, every ordinary person is as weak as a lamb to be slaughtered, what can we do, how will the world go?
              </el-text>
            </el-col>
          </el-row>
          <el-row>
            <el-text size="large"
                     type="primary"
                     style="word-break: normal">
              Wishing for world peace!
            </el-text>
          </el-row>
        </el-col>
      </el-row>
    </el-popover>
  </el-text>
</template>
