<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="http://localhost:8080/html/hello.html">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
    }
  }
}
</script>

<style>
</style>
