<template>
  <div class="detail">
  <div class="detail_banner">
    <div class="pic"><img :src="list.img" alt=""></div><div class="detial_content"><h2>{{list.nm}}</h2><p>{{list.comingTitle}}</p><p>{{list.star}}</p><br><span class="after_watch">看过</span><span class="befor_watch">想看</span></div>
    </div>
    <div class="xiangkan"><h2><span>{{list.wish}}</span>想看</h2></div>
    <div class="title"><h3>简介</h3><p>{{list.title}}</p></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      list: {},
    };
  },
  mounted() {
   this.get_topic()
   this.get_topic1()
  },
  methods: {
    get_topic(){
       let { id } = this.$route.params;
    console.log(id);
    this.$axios.get("http://localhost:3000/dybanner/"+ id).then((res) => {
        this.list=res.data
      console.log(this.list);
      
    });
    },
    get_topic1(){
       let { id } = this.$route.params;
    console.log(id);
    this.$axios.get("http://localhost:3000/dylist/"+ id).then((res) => {
        this.list=res.data
      console.log(this.list);
      
    });
    }
  },
};
</script>

<style scoped>
h1{font-size: 100px;}
.detail{background:#2A2740;height: 1000px;}
.detail_banner{width: 100%;margin-top: 114px;display: flex;height: 160px;}
.pic{height:138px;width:100px;position: relative;margin-left: 30px;margin-top: 10px;}
.pic img{width: 100%;height: 100%;}
.detial_content{margin-left: 15px;margin-top: 20px;width: 240px;}
.detial_content>p{margin-top: 10px;}
.after_watch,.befor_watch{
  float: left;
  display: flex;
    justify-content: center;
    align-items: center;
    background: hsla(0,0%,100%,.35);
    margin-left: 10px;
    border-radius: 4px;
    font-size: 16px;
    width:80px;
    height: 30px;
    color: #fff;
}
.xiangkan{width: 343px;height: 128px;margin: 15px auto;}
.xiangkan h2 {line-height: 128px;text-align: center;font-size: 28px;   }
.xiangkan h2 span{ color: #ffbb29;}
.title{width: 90%;margin: 10px auto;}
h3{margin-bottom: 5px;font-size: 24px;}
.title p{font-size: 16px;color: #fff; line-height: 24px;}
</style>
