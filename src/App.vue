<template>
<div id="app">
  <div>
      <h1>
      <img src = "./assets/logo.png" width = "50px" height ="50px" align="middle"/>    你好！Vue世界!!!</h1>

  </div>
  <hr/>
  <div style="float:left">

    <ol>
      <van-button type="primary">
        <router-link to="/first">第一页</router-link>
      </van-button>
      <br/><br/>
      <van-button type="info">
        <router-link to="/second">第二页</router-link>
      </van-button>
        <br/><br/>
      <van-button type="default">
        <router-link to="/third">第三页</router-link>
      </van-button>
        <br/><br/>
      <van-button type="default">
        <router-link to="/four">第四页</router-link>
      </van-button>
    </ol>

  </div>

  <router-view class="view"></router-view>
  <!-- <iframe class="iframe" src="html/frame_b.html" frameborder="0" width="1080" height="1920" />  -->
</div>
</template>

<script>
import firstcomponent from './component/first_component.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello World!!! Hello Vue!'
    }
  },
  components: {
    firstcomponent
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

h1,
h2 {
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
