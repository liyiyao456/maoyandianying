<template>
  <div>
    <top></top>
    <router-view></router-view>
    <footers :show="shows"></footers>

  </div>
</template>

<script>
import footers from "./components/zujian/footer.vue"
import top from "./components/zujian/top.vue"
export default {
  components: {
    top,
    footers
  },
  data () {
    return {
      shows: true
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  text-align: center;
  line-height: 29px;
}
ol {
  list-style: none;
  text-align: center;
  position: relative;
}
img {
  display: block;
}
a {
  text-decoration: none;
  color: #666666;
}
h1,
h2,
h3 {
  font-size: 16px;
}
.l {
  float: left;
}
.r {
  float: right;
}
.clear:after {
  content: "";
  clear: both;
  display: block;
}
.headers {
  width: 100%;
  position: fixed;
  top: 0px;
}
.top {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  position: relative;
}
.top span {
  position: absolute;
  right: 5px;
  font-size: 20px;
}
footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: yellowgreen;
}
.banner {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
}
.banner img {
  width: 44px;
  height: 44px;
  margin-left: 10px;
}
.banner .big {
  width: 180px;
  height: 64px;
  margin-left: 10px;
  margin-top: 18px;
}
.banner .big h2 {
  font-size: 18px;
}
.banner .big p {
  width: 180px;
  font-size: 12px;
}
.button {
  width: 68px;
  height: 30px;
  background: #ef4238;
  border-radius: 10px;
  position: absolute;
  right: 15px;
  top: 17px;
}
</style>
