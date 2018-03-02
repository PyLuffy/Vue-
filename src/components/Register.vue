<template>
  <div>
    <h1>注册页面</h1>
    <input type="text" v-model="username" placeholder="用户名">
    <input type="text" v-model="password" placeholder="密码">
    <a @click="doLogin">注册</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      var that = this
      this.$axios.request({
        url: 'http://127.0.0.1:8000/login/',
        method: 'POST',
        data: {
          username: this.username,
          password: this.password
        },
        responseType: 'json'
      }).then(function (response) {
        console.log(response.data)
        // 重定向
        that.$router.push('/index')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
