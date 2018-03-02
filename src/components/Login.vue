<template>
  <div class="login">
    <form>
      <div class="login-row">
        <label>用户名：</label>
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="login-row">
        <label>密码: </label><input v-model="password" type="password" placeholder="请输入密码"/>
      </div>
      <div class="login-row">
        <a class="btn" @click="doLogin">登陆</a>
        <span class="error" v-text="error"></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
//  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    doLogin: function () {
      var that = this
      this.error = ''
      var name = this.username
      var pwd = this.password
      this.$axios.request({
        url: this.$store.state.apiList.auth,
        method: 'POST',
        data: {
          username: name,
          password: pwd
        },
        responseType: 'json'
      }).then(function (response) {
        if (response.data.code === 1000) {
          that.error = response.data.errors
        } else if (response.data.code === 1001) {
          that.error = response.data.errors
        } else if (response.data.code === 1002) {
          that.$store.commit('saveToken', response.data)
          var backUrl = that.$route.query.backUrl
          if (backUrl) {
            that.$store.push({path: backUrl})
          } else {
            that.$router.push('/index')
          }
        } else {
          that.error = response.data.errors
        }
      }).catch(function (response) {
        that.error = response
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    padding: 60px;
    width: 340px;
    margin: 0 auto;
    min-height: 300px;
  }

  .login .login-row {
    padding: 20px 0;
  }

  .login label {
    width: 70px;
    text-align: right;
    display: inline-block;
    margin-right: 10px;
  }

  .login input[type='text'], input[type='password'] {
    width: 250px;
    height: 28px;
  }

  .login .btn {
    float: right;
    display: inline-block;
    border: 1px solid #dddd;
    padding: 5px 15px;
    background: #7ed321;
    color: white;
    font-size: 14px;
  }

  .login .error {
    float: right;
    display: inline-block;
    padding: 5px;
  }
</style>
