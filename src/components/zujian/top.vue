<template>
  <div class="headers">
    <div class="top">猫眼电影<span>三</span></div>
    <div class="banner"><img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/avatar.png"
           alt="">
      <div class="big">
        <h2>猫眼</h2>
        <p>在线选座，热门影讯，爱上看电影</p><button class="button">立刻打开</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top"
}
</script>

<style scoped>
.headers {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  background: white;
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
button {
  width: 68px;
  height: 30px;
  background: #ef4238;
  border-radius: 10px;
  position: absolute;
  right: 15px;
  top: 17px;
}
</style>