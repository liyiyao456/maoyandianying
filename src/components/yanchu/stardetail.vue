<template>
  <div>
    <div class="star_list1">
      <h1 class="h1">精彩现场回顾</h1>
      <ul class="star_list">
        <li v-for="(item) in list"
            :key="item.id">
          <h2 class="name">{{item.videoName}}</h2>
          <video :src="item.videoUrl"
                 controls></video>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    let { id } = this.$route.params;
    console.log(id);
    this.$axios.get("http://localhost:3000/stardetail/" + id).then((res) => {
      this.list = res.data.data
      console.log(this.list);

    });
  },
}
</script>

<style scoped>
.star_list1 {
  margin-top: 124px;
}
.h1 {
  font-size: 28px;
}
.star_list {
  width: 100%;
  background: #3333;
}
.star_list li {
  margin-top: 20px;
  width: 100%;
}
.star_list li video {
  width: 345px;
  height: 134px;
  margin: 0 auto 0;
  border-radius: 30px;
}
.name {
  width: 345px;
  margin: 0 auto 10px;
  text-align: left;
}
</style>