<template>
  <div>
    <h1>课程</h1>
    <ul>
    <li v-for= "item in courseList">
      <div>课程：{{item.name}}</div>
      <div>{{item.course_img}}</div>
      <div>课程简介：{{item.brief}}</div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      courseList: []
    }
  },
  mounted: function () {
    this.initCourse()
  },
  methods: {
    initCourse: function () {
      var that = this
      this.$axios.request({
        url: 'http://127.0.0.1:8000/course/',
        method: 'GET'
      }).then(function (response) {
        that.courseList = response.data.courseList
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
