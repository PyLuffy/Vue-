import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组建中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://127.0.0.1:8000/api/v1/auth/',
      courses: 'http://127.0.0.1:8000/api/v1/course/',
      pricePolicy: 'http://127.0.0.1:8000/api/v1/price_policy/',
      shopCar: 'http://127.0.0.1:8000/api/v1/shop_car/'
    }
  },
  getters: {
    // 组建中通过this.$store.getters.uuuu 调用
    isLogin: function (state) {
      return state.token
    }
  },
  mutations: {
    // 组建中将this.$store.commit(参数)
    saveToken: function (state, data) {
      state.username = data.username
      state.token = data.token
      Cookie.set('username', data.username, '20min')
      Cookie.set('token', data.token, '20min')
    },
    clearToken: function (state, data) {
      state.username = null
      state.token = null
      Cookie.remove('username')
      Cookie.set('token')
    }
  },
  actions: {
    actionFunction1 (context, params) {
      // context
    },
    actionFunction2 ({commit}, params) {
      // context
    }
  },
  modules: {
    a: {
      state: {},
      getters: {}
    },
    b: {
      state: {},
      getter: {}
    }
  }
})
