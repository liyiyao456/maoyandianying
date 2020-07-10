<template>
    <div>
    <h2>近期受期待</h2>
    <div class="dybanner"><ul>
    <li v-for="(item) in list" :key="item.id">
    <router-link :to="'/daiyingmovie/Detail/'+item.id"><img :src="item.img" alt="err"></router-link>
    <p class="name">{{item.nm}}</p>
    <p class="name">{{item.comingTitle}}</p></li></ul>
    </div>
    <div class="list">
    <ol class="dylist">
    <li v-for="(item) in list1" :key="item.id">
    <router-link :to="'/daiyingmovie/Detail/'+item.id">
    <div class="pic"><img :src="item.img" alt=""></div></router-link>
    <router-link :to="'/daiyingmovie/Detail/'+item.id">
    <div class="content"><p class="nm">{{item.nm}}</p><p class="wish"><span>{{item.wish}}</span>人想看</p><p class="star">主演:{{item.star}}</p><p class="rt">{{item.rt}}上映</p></div>
    <span class="button">想看</span></router-link>
    </li>
    </ol>
    </div>
    </div>
</template>

<script>

import axios from 'axios';
    export default {
        data(){
           return{
               list:[],
               list1:[]
           }
        },

mounted() {
    this.get_topic()
    this.get_topic1()
},
   methods: {    
     get_topic(){
     axios({
       method:"get",
       url:"  http://localhost:3000/dybanner",
     }).then((res)=>{
         this.list=res.data;
       console.log(this.list);
     })
   } ,
   get_topic1(){
     axios({
       method:"get",
       url:"http://localhost:3000/dylist",
     }).then((res)=>{
         this.list1=res.data;
       console.log(this.list1);
     })
   }  

        },
    }
</script>

<style scoped>
body{background: #cccc;}
h2{width: 100%;height: 30px;margin-left: 10px;background: white;}
.dybanner{width: 100%;overflow: auto;background: white;position: relative;}
ul{width: 250%; display: flex;margin-left: 10px;}
ul li{width: 85px;height: 158px;margin-right: 10px;}
ul li img{width: 100%;height: 115px;}
.name{font-size: 14px;line-height: 24px;text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;}
.dylist{margin-top: 20px; margin-left: 15px;width: 100%;height: 114px;margin-bottom: 20px;}
.dylist li{margin-bottom: 20px;display: flex;position: relative;}
.pic{width: 64px;height: 90px;margin-top: 10px;}
.pic img{width: 100%;height: 100%;}
.content{margin-top: 15px;margin-left:10px;}
.nm{font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    line-height: 24px;
    height: 24px;
    text-align: left;
    }   
.wish{font-size: 13px;
    display: inline-block;
    color: #666;text-align: left;}
span{color: #faaf00;margin-left: -20px;
    font-size: 15px;
    font-weight: 600;text-align: left;}
.star{font-size: 13px;line-height: 20px;
    color: #666;text-align: left;}
.rt{    font-size: 13px;
    color: #666;text-align: left;}
.button{    width: 47px;
    height: 27px;
    line-height: 24px;
    text-align: center;
   background-color: #faaf00;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;position: absolute;right: 30px;top: 40px;}
</style>