<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
  <!-- 头部 -->
  <el-header style="text-align: right; font-size: 12px; background-color: #606266; color: #fff;">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>欢迎</span>
    <el-container>
      <!-- 侧边栏 -->
      <div class="aside">
      <el-aside width="200px" style=" margin-top: -0.05rem; margin-left: -1.25rem;">
      <el-menu :default-openeds="['1']"
      router
      text-color="#000"
      active-text-color="#ffd04b">
      <span class="ab"><i class="el-icon-tickets"></i> 番剧管理</span>
        <el-submenu index="1">

          <el-menu-item-group>
            <el-menu-item index="/bli/create"><i class="el-icon-plus"></i>新增番剧</el-menu-item>
            <el-menu-item index="/bli/list/jp"><i class="el-icon-tickets"></i>日漫番剧</el-menu-item>
            <el-menu-item index="/bli/list/ch"><i class="el-icon-tickets"></i>国漫番剧</el-menu-item>
            <el-menu-item index="/bli/search"><i class="el-icon-search"></i>搜索番剧</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    </div>
    <!-- 内容栏 -->
      <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
  </el-header>

</el-container>

</template>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .aside .el-submenu .el-menu-item{
    padding: 0 70px
  }
  .ab{
    position: absolute;
    top: 0;
    left: 3.5rem;
    font-size: 16px;
    height: 100%;
    color:#000
  }
  .el-aside {
    color: #333;
  }
</style>
