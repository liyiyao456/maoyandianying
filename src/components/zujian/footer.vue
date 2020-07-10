<template>
    <div :v-if="show">
  <ul class="footer">
    <router-link :to="'/home'"><li>电影/影院</li></router-link>
    <router-link :to="'/movie'"><li>视频</li></router-link>
    <router-link :to="'/smallmovie'"><li>小视频</li></router-link>
    <router-link :to="'/show'"><li>演出</li></router-link>
    <router-link :to="'/login'"><li>我的</li></router-link></ul>
    </div>
</template>

<script>
import showVue from '../show.vue'
    export default {
        name:"footers",
        data(){
          return{
              show:true
          }
        }
        
    }
</script>

<style>
.footer{
 z-index: 5; width: 100%;height: 50px;position: fixed;bottom: 0px;display: flex;justify-content: space-around;align-items: center; background: yellowgreen;
}
</style>