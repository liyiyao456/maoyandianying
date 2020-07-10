<template>
    <div>
    <router-view></router-view>
     <div class="video">
    <div class="banner_list">
    <span class="now"><router-link :to="'/movie/now'">首页</router-link></span>
    <span class="news"><router-link :to="'/movie/news'">新篇章</router-link></span></div> 
    <div class="video_list">
    <ul>
    <div>
    <li v-for="item of list" :key="item.id">
    <p>{{item.title}}</p>
    <video controls><source  :src="item.video.url" type="video/mp4"></video>
    <div class="title"><div class="video-img"><img :src="item.user.avatarurl" alt=""><span>{{item.user.nickName}}</span></div>
    <div class="video-kkk"><span>赞{{item.shareCount}}</span><span>{{item.upCount}}评论</span></div>
    </div>
    </li></div></ul>
    </div>
</div>
    </div>
</template>

<script>
import trans from "../../untils/transDate"
import axios from 'axios';
    export default {
        data(){
           return{
               list:[]
           }
        },

mounted() {
    this.get_topic()
},
   methods: {    
     get_topic(){
     axios({
       method:"get",
       url:" http://localhost:3000/newvideo",
     }).then((res)=>{
         this.list=res.data.data.feeds;
       console.log(this.list);
     })
   }  
        },
    }
</script>

<style scoped>
.banner_list{width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;}
.video{width: 100%;margin-top: 134px;}
ul{width: 100%;}
video{width: 374px;height: 211px;}
li{width: 100%;height:  257px; position: relative;border-bottom: 2px solid #cccc;background: white;}
p{
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;font-size: 24px;
    color: #fff;
    line-height: 30px;
    z-index: 1;}
.now{margin-left: 20px;}
.news{margin-left: 10px;font-size: 24px;}
.title{display: flex;width: 100%;justify-content: space-between;}
.title img {width: 22px;height: 22px;}
.video-img{display: flex;margin-left: 20px;}
.video-img>span{margin-left: 10px;}
.video-kkk{display: flex;height: 28px;margin-right: 10px;}
.video-kkk>span{height: 100%;margin-right: 20px;}

</style>