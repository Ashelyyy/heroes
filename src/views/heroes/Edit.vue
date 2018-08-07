<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" class="form-control" v-model="formData.name" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" class="form-control" v-model="formData.gender" id="gender" placeholder="英雄性别">
      </div>

      <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'],
    data() {
      return {
        formData: {
          name: '',
          gender: ''
        }
      }
    },
    // 编辑页面
    // 显示数据
    created() {
      axios
        .get(`http://localhost:3000/heroes/${ this.id }`)
        .then((response) => {
          if(response.status === 200) {
            this.formData = response.data;
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {
      handleEdit() {
        // 点击提交,发送修改请求,跳转到列表页
        axios
          .put(`http://localhost:3000/heroes/${ this.id }`, this.formData)
          .then((response) => {
            if(response.status === 200) {
              this.$router.push('/heroes');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>

<style>

</style>



