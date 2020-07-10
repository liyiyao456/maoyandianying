<template>
  <div>
    <ul class="fenlei">
      <li>
        <router-link :to="'/showlist'"><img src="https://img.meituan.net/kylisean/b132e8d30be554486b8c909c7d16f7c15282.png"
               alt="" />
          <p>演唱会</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/showlist'"><img src="https://img.meituan.net/kylisean/5cc92a5a6bb19618f7d2b31433a2a2f24956.png"
               alt="" />
          <p>话剧歌剧</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/showlist'"><img src="https://img.meituan.net/kylisean/2b3d5971c31e8a39e181bd07f3c42d824737.png"
               alt="" />
          <p>休闲展览</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/showlist'"><img src="https://img.meituan.net/kylisean/8d6764a0cee35332f44976f84b188c444767.png"
               alt="" />
          <p>戏曲相声</p>
        </router-link>
      </li>
      <li>
        <router-link :to="'/showlist'"><img src="https://img.meituan.net/kylisean/cce8a904f6489abeff04f9d9555dd77f4052.png"
               alt="" />
          <p>亲子/艺术</p>
        </router-link>
      </li>
    </ul>

    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
      <van-swipe-item><img src="https://img.meituan.net/kylisean/11449127480a6a0eb753fd840329d5db97936.jpg"
             alt="" /></van-swipe-item>
      <van-swipe-item><img src="https://img.meituan.net/kylisean/3d0dedd5ae58f624b11af0004c81c96945033.jpg"
             alt="" /></van-swipe-item>
      <van-swipe-item><img src="https://img.meituan.net/kylisean/542dea35b97e02305e743e0973dd24e547399.jpg"
             alt="" /></van-swipe-item>
      <van-swipe-item><img src="https://img.meituan.net/kylisean/11449127480a6a0eb753fd840329d5db97936.jpg"
             alt="" /></van-swipe-item>
    </van-swipe>
    <div class="star">
      <h2>大咖新动态</h2>
      <ul class="star_ul">
        <li v-for="item in list1"
            :key="item.id">
          <div class="star_pic">
            <router-link :to="'/stardetail/'+item.id"><img :src="item.headUrl"
                   alt="" /></router-link>
          </div>
          <p>{{ item.celebrityName }}</p>
          <p>{{ item.recommendTag }}</p>
        </li>
      </ul>
    </div>
    <div class="star_list">
      <ol>
        <li v-for="item in list2"
            :key="item.id">
          <a :href="item.shareLink">
            <div class="list_pic">
              <img :src="item.posterUrl"
                   alt="" /></div>
          </a>
          <div class="list_content">
            <p class="pleace">{{ item.name }}</p>
            <p class="time">{{ item.showTimeRange }}</p>
            <span class="money">￥{{ item.priceRange }}起</span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      list1: [],
      list2: [],
    }
  },
  mounted () {
    this.get_topic()
    this.get_topic1()
    this.get_topic2()
  },
  methods: {
    get_topic () {
      axios({
        method: 'get',
        url: ' http://localhost:3000/listjtt',
      }).then((res) => {
        this.list = res.data.data
        console.log(this.list)
      })
    },
    get_topic1 () {
      axios({
        method: 'get',
        url: ' http://localhost:3000/ycmx',
      }).then((res) => {
        this.list1 = res.data.data
        console.log(this.list1)
      })
    },
    get_topic2 () {
      axios({
        method: 'get',
        url: ' http://localhost:3000/listjtt',
      }).then((res) => {
        this.list2 = res.data.data
        console.log(this.list2)
      })
    },
  },
}
</script>

<style scoped>
.fenlei {
  width: 355px;
  height: 76px;
  display: flex;
  margin: 114px auto 10px;
}
.fenlei li {
  width: 71px;
  height: 76px;
}
.fenlei li img {
  width: 60px;
  height: 60px;
  margin: 4px auto;
}
.show_banner {
  width: 346px;
  height: 65px;
}
.show_banner img {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  margin-top: 20px;
  width: 346px;
  height: 65px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.star h2 {
  margin-top: 10px;
}
.star_ul {
  display: flex;
  height: 95px;
  width: 100%;
  overflow: auto;
  margin-top: 20px;
}
.star_ul li {
  width: 80px;
  height: 93px;
  font-size: 10px;
  margin-left: 20px;
  text-align: center;
}
.star_pic {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  margin-left: 10px;
}
.star_pic img {
  width: 100%;
  height: 100%;
}
.star_pic p {
  margin: 5px auto;
}
ol {
  width: 100%;
  margin-top: 20px;
}
ol li {
  width: 168px;
  height: 324px;
  position: relative;
  overflow: hidden;
  margin-top: 15px;
  border: 1px solid #cccc;
  border-radius: 10px;
  background: white;
  float: left;
  margin-left: 12px;
}
.list_pic {
  width: 168px;
  height: 223px;
}
ol li img {
  width: 100%;
  height: 100%;
}
.pleace {
  text-align: left;
  font-size: 16px;
}
.time {
  text-align: left;
  font-size: 12px;
}
.money {
  font-weight: 600;
  color: red;
  text-align: left;
  float: left;
}
</style>
