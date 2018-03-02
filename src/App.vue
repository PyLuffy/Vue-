<template>
  <div id="app">
    <heads></heads>
    <router-view/>
    <foot></foot>
    </div>
    <!--<div class="header">-->
      <!--<router-link to="/index">首页</router-link>-->
      <!--<router-link to="/course">课程</router-link>-->
      <!--<router-link to="/degree">Luffy学位</router-link>-->
      <!--<router-link to="/technology">深科技</router-link>-->
    <!--<div>-->
      <!--<div v-if="this.$store.state.username">-->
        <!--<a>{{this.$store.state.username}}</a>-->
        <!--<a @click="logout">注销</a>-->
      <!--</div>-->
      <!--<router-link v-else to="/login">登录</router-link>-->
    <!--</div>-->
      <!--</div>-->
     <!--<router-view/>-->
  <!--</div>-->
</template>

<script>
import heads from './components/header/head.vue'
import foot from './components/foot/foot.vue'
export default {
  components: {
    heads,
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
