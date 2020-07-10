<template>
  <div>
    <div class="list_video"
         v-if="list.id">
      <video :src="list.video.url"
             controls></video>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      list: {}
    }
  },
  mounted () {
    let { id } = this.$route.params;
    console.log(id);
    this.$axios.get("http://localhost:3000/smallvideo/" + id).then((res) => {
      this.list = res.data
      console.log(this.list);

    });
  },
}
</script>

<style scoped>
.list_video {
  width: 100%;
  height: 80%;
  margin-bottom: 50px;
}
video {
  width: 100%;
  height: 100%;
}
</style>