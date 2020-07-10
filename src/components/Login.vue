<template>
  <div>
    <div class="login">
      <h1>{{ str }}</h1>
      <div class="username">
        用户名:
        <input type="text" v-model.trim="name" />
        <br />
      </div>
      <div class="password">
        密码:
        <input type="text" v-model.trim="pass" />
        <br />
      </div>
      <div class="qr" v-show="show">
        确认密码：
        <input type="text" v-model.trim="pass" />
        <br />
      </div>
      <button @click="click1">切换到登录</button>
      <button @click="click2">切换到注册</button>
      <br />
      <button @click="click3(str)">{{ str }}</button>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  data() {
    return {
      show: false,
      str: '登录/注册',
      name: '',
      pass: '',
      pass1: '',
    }
  },
  methods: {
    click1() {
      this.str = '登录'
      this.show = false
    },
    click2() {
      this.str = '注册'
      this.show = true
    },
    click3(str) {
      console.log(this.name, this.pass)

      if (str == '登录') {
        this.$axios({
          url: 'http://127.0.0.1:5418/login',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          method: 'post',
          data: qs.stringify({
            username: this.name,
            password: this.pass,
          }),
        }).then((res) => {
          console.log(res)
        })
      }
      if (str == '注册') {
        this.$axios({
          url: 'http://127.0.0.1:5418/register',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          method: 'post',
          data: qs.stringify({
            username: this.name,
            password: this.pass,
          }),
        }).then((res) => {
          console.log(res)
        })
      }
    },
  },
}
</script>

<style scoped>
.login {
  margin-top: 124px;
}
</style>
