<template>
  <div>
    <div class="tab_list">
      <ul class="tab">
        <li v-for="(item) in list"
            :key="item.categoryId">
          <router-link :to="{path:'/showlist',query:{categoryId:item.categoryId}}">{{item.categoryName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="movie_list">
      <ol>
        <li v-for="(item, index) in list1"
            :key="index">
          <a :href="item.shareLink">
            <div class="movie_pic"><img :src="item.posterUrl"
                   alt=""></div>
          </a>
          <a :href="item.shareLink">
            <div class="movie_content">
              <h2>{{item.name}}</h2>
              <p>{{item.showTimeRange}}</p>
              <p>{{item.shopName}}</p>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      list: [],
      xxx: "",
      list1: []
    }
  },
  watch: {
    $route: {
      handler () {
        this.xxx = this.$route.query.categoryId;
        console.log(this.xxx)

        this.get_topic1()
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
    this.get_topic()
    this.get_topic1()
  },
  methods: {
    get_topic () {
      axios({
        method: "get",
        url: " http://localhost:3000/list"
      }).then(res => {
        this.list = res.data.data;
        console.log(this.list);
      });
    },
    get_topic1 () {
      axios({
        method: "get",
        url: "https://show.maoyan.com/maoyansh/myshow/ajax/performances/" + this.xxx
      }).then(res => {
        this.list1 = res.data.data;
        console.log(this.list1);
      });
    },
  },

}
</script>

<style scoped>
.tab_list {
  width: 100%;
  overflow: auto;
}
.tab {
  width: 250%;
  height: 40px;
  display: flex;
  margin-top: 114px;
}
.tab li {
  width: 80px;
  font-size: 14px;
  height: 40px;
}
.movie_list ol > li {
  width: 90%;
  display: flex;
  margin-left: 10px;
  margin-top: 20px;
}
.movie_pic {
  width: 100px;
  height: 135px;
  border-radius: 10px;
  overflow: hidden;
}
.movie_pic img {
  width: 100%;
  height: 100%;
}
.movie_content {
  width: 245px;
  height: 135px;
  margin-left: 10px;
  margin-top: 10px;
}
h2,
p {
  text-align: left;
}
</style>