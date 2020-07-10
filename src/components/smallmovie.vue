<template>
  <div>
  
    <div class="video_list">
      <ul>
        <div class="clear">
          <li v-for="item of list" :key="item.id">
            <router-link :to="'/list/'+item.id"><p>{{item.title}}</p>
              <img :src="item.video.imgUrl" alt /></router-link>
            <div class="title">
              <div class="video-img">
                <img :src="item.user.avatarurl" alt />
                <span>{{item.user.nickName}}</span>
              </div>
              <div class="video-kkk">
                <span>赞{{item.shareCount}}</span>
              </div>
            </div>
          
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import trans from "../untils/transDate";
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.get_topic();
  },
  methods: {
    get_topic() {
      axios({
        method: "get",
        url: " http://localhost:3000/smallvideo"
      }).then(res => {
        this.list = res.data;
        console.log(this.list);
      });
    }
  }
};
</script>

<style scoped>
.video_list {
  margin-top: 114px;
}
ul {
  width: 100%;
  display: flex;
}
ul li {
  width: 187px;
  height: 300px;
  position: relative;
  border-bottom: 2px solid #cccc;
  background: white;
  float: left;
}
p {
  text-align: left;
  position: absolute;
  bottom: 40px;
  left: 10px;
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  z-index: 1;
}
img {
  width: 186px;
  height: 270px;
}
.title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.title img {
  width: 22px;
  height: 22px;
  margin-bottom: 5px;
}
.video-img {
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
}
.video-img > span {
  margin-left: 10px;
  margin-bottom: 5px;
}
.video-kkk {
  display: flex;
  height: 28px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.video-kkk > span {
  height: 100%;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>