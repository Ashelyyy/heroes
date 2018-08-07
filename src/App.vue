<template>
  <div id="app">

    <!-- 网页的header -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">

        <!-- sidebar -->
        <app-side-bar></app-side-bar>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

        <!-- 占位置 -->
        <router-view></router-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 导入AppHeader组件
  import AppHeader from './components/AppHeader.vue';
  // 导入AppSideBar组件
  import AppSideBar from './components/AppSideBar.vue';
  // 导入routers.js
  // import Router from './routes/router.js'

  // 导出组件
  export default {
    components: {
      AppHeader,
      AppSideBar
    }
  }
</script>

<style>

</style>
