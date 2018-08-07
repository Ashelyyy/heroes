<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" class="form-control" v-model="formData.name" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" class="form-control" v-model="formData.gender" id="gender" placeholder="英雄性别">
      </div>

      <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  export default {
    data() {
      return {
        formData: {
          name: '',
          gender: ''
        }
      };
    },
    methods: {
      handleAdd() {
        // 发送请求
        axios
          .post('http://localhost:3000/heroes', this.formData)
          .then((response) => {
            if(response.status === 201) {
              // 跳转到列表页
              this.$router.push('/heroes')
            } else {
              alert('添加失败');
            }
          })
          .catch((err) => {
            console.log(err);;
          })
      }
    }
  };

</script>

<style type="text/css">

</style>
