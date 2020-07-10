
<template>
  <div>
  <div class="tab">
 
  <ul><li>沈阳</li>
  <li><router-link :to="'/home'" activeClass="active">热映</router-link></li>
  <li><router-link :to="'/home/yingyuan'" activeClass="active">影院</router-link></li>
  <li><router-link :to="'/home/daiyingmovie'" activeClass="active">待映</router-link></li>
  <li><router-link :to="'/home/jingdian'" activeClass="active">精彩电影</router-link></li>
  </ul>
  </div> 
  <router-view></router-view>
  </div> 
</template>

<script>
import trans from "../untils/transDate"
import axios from 'axios';
export default {
 data(){
       return {
       
       }
  },
  mounted() {    
   
  },
  methods: {
   
    },
}
</script>

<style scoped>
.tab{margin-top: 114px;justify-content: space-around;}
ul,
ol li {
  list-style: none;
}
.ul{width: 100%;height: 60px; background: #d3d3d3;}
ul {
  display: flex;
  justify-content: space-around;
  height: 60px;
  width: 100%;
}
ul li {
  font-size: 16px;
  color: black;
  line-height: 50px;
  height: 50px;
  margin: 5px auto;
}
.active{font-size: 20px;
  color: black;
  line-height: 50px;
  height: 50px;
  margin: 5px auto;}




</style>