<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id" >
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to="'/heroes/' + item.id ">编辑</router-link>
              &nbsp;&nbsp;
              <a @click="hadleDelete(item.id)" href="javascript:void(0)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  // 导入axios模块
  import axios from 'axios';

  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      // 渲染列表页
      this.loadData();
    },
    methods: {
      // 渲染页面封装
      loadData() {
        axios
          .get('http://localhost:3000/heroes')
          .then((response) => {
            if(response.status === 200) {
              this.list = response.data;
            }
          })
          .catch((err) => {
            console.log(err);
        })
      },
      hadleDelete(id) {
        if(!confirm('是否要删除?')) {
          return;
        }
        // 发送请求,删除数据
        axios
          .delete(`http://localhost:3000/heroes/${ id }`)
          .then((response) => {
            if(response.status === 200) {
              // 重新渲染页面
              this.loadData();
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style type="text/css">

</style>
