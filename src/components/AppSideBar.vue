<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li><a href="#">英雄列表</a></li>
      <li><a href="#">武器列表</a></li>
      <li><a href="#">装备列表</a></li> -->
      <router-link tag="li" to="/heroes">
        <a href="#">英雄列表</a>
      </router-link>
      <router-link tag="li" to="/equips">
        <a href="#">装备列表</a>
      </router-link>
      <router-link tag="li" to="/weapons">
        <a href="#">武器列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
  // 导出该组件
  export default {

  };
</script>

<style type="text/css">

</style>
