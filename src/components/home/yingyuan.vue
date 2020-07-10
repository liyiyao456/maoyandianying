<template>
    <div>
    <div class="yy_banner">
    <p @click="show=!show">分类</p><div class="yy_van-tabs" v-if="show">
    <van-tabs v-model="active">
  <van-tab title="全城" >
  <van-tabs v-model="active1"><van-tab title="商区">
  <van-tree-select
  :items="arr"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex">
  </van-tree-select>
   </van-tab>
  <van-tab title="地铁站">
  <van-tree-select
  :items="arr2"
  :active-id.sync="activeIdx"
  :main-active-index.sync="activeIndexx">
  </van-tree-select></van-tab>
  </van-tabs>
  </van-tab>
  <van-tab title="品牌">
  <ul class="brand"><li v-for="(item, index) in list2" :key="index">
  <span>{{item.name}}</span>
  </li></ul>
  </van-tab>
  <van-tab title="特色">没有特色，不想写了</van-tab>
</van-tabs>
</div>
    </div>
    <div class="yy_content">    
    <a href="/shows/25608">
      <div class="item mb-line-b" data-id="25608" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>电影公元影城（太原街文化城店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区太原街95号玖伍文化6层</div>
                <div class="distance">3.2km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
                    <div class="hallType">杜比全景声厅</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减4元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/26801">
      <div class="item mb-line-b" data-id="26801" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>越众国际影城（太原街百盛店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区中华路21号百盛购物广场7层</div>
                <div class="distance">3.2km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/1067">
      <div class="item mb-line-b" data-id="1067" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>万达影城（4DX太原街万达广场店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区太原南街2号万达商业广场4楼（近沃尔玛）</div>
                <div class="distance">3.3km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                    <div class="hallType">4DX厅</div>
                    <div class="hallType">儿童厅</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/26678">
      <div class="item mb-line-b" data-id="26678" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>至潮影城（太原街印象城店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区中华街印象城广场四层</div>
                <div class="distance">3.3km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减2元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/1054">
      <div class="item mb-line-b" data-id="1054" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>金逸影城（激光巨幕太原街店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区中华路18号潮汇生活中心7层（地铁1号线沈阳站D出口，沃尔玛超市对面即是）</div>
                <div class="distance">3.4km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="snack">小吃</div>
                    <div class="hallType">巨幕厅</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/24283">
      <div class="item mb-line-b" data-id="24283" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>星迹激光影城</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区市府大路188号，萃兮优客城市奥莱7层</div>
                <div class="distance">3.6km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/17182">
      <div class="item mb-line-b" data-id="17182" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>新华国际影城（沈阳店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区市府大路262-6号401（卓展购物中心正对面）</div>
                <div class="distance">3.8km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/25413">
      <div class="item mb-line-b" data-id="25413" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>影瑞国际影城（中街恒隆店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区中街路128号皇城恒隆三层东北角（豫龙城对面）</div>
                <div class="distance">3.9km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/26898">
      <div class="item mb-line-b" data-id="26898" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>中影UL城市影院（全激光厅）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">浑南区营盘北街7号3层L-301（花园城购物中心）</div>
                <div class="distance">3.9km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/10403">
      <div class="item mb-line-b" data-id="10403" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>光陆影城</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区中街路187号（近朝阳街）</div>
                <div class="distance">3.9km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减4元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/28542">
      <div class="item mb-line-b" data-id="28542" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>嘉纳影城（中街店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区中街212号商业城6层</div>
                <div class="distance">4.1km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/5437">
      <div class="item mb-line-b" data-id="5437" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>今世界影城（沈阳大奥莱店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">浑南区营盘北街5号兴隆大奥莱B座4层</div>
                <div class="distance">4.1km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减4元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/1055">
      <div class="item mb-line-b" data-id="1055" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>CGV影城（中街盾安益田假日世界店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区中街路268号（盾安益田假日世界L4-L5）</div>
                <div class="distance">4.1km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
                    <div class="hallType">4DX厅</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/7713">
      <div class="item mb-line-b" data-id="7713" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>CGV影城（金融中心IMAX店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区哈尔滨路168号金融中心购物广场4楼</div>
                <div class="distance">4.2km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
                    <div class="hallType">IMAX厅</div>
                    <div class="hallType">4K厅</div>
                    <div class="hallType">60帧厅</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/1083">
      <div class="item mb-line-b" data-id="1083" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>上影国际影城（新玛特店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">大东区小东路1号新玛特7楼（近中街路）</div>
                <div class="distance">4.2km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减10元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/2763">
      <div class="item mb-line-b" data-id="2763" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>金逸影城（长白店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">和平区长白二街3-2号万科城浑河天地A-B座（万科城北侧）</div>
                <div class="distance">4.4km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="snack">小吃</div>
            </div>
 
<div class="discount-block">
</div>        </div>

      </div>
    </a>
    <a href="/shows/1070">
      <div class="item mb-line-b" data-id="1070" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>中影华臣影城（华府天地店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">沈河区哈尔滨路118号华府天地购物中心一期4楼（近北京街）</div>
                <div class="distance">4.4km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/23751">
      <div class="item mb-line-b" data-id="23751" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>嘉华国际影城（万象生活城店原泛华广场）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">浑南区浑南新区浑南西路8号万象生活城6层</div>
                <div class="distance">4.4km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
                    <div class="hallType">CGS中国巨幕厅</div>
                    <div class="hallType">杜比全景声厅</div>
                    <div class="hallType">60帧厅</div>
                    <div class="hallType">巨幕厅</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/26890">
      <div class="item mb-line-b" data-id="26890" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>华谊兄弟影院（大悦城店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">大东区小东路9号大悦城D馆4层-5层（非营业时间肯德基指示牌下入口进影院）</div>
                <div class="distance">4.6km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
    <a href="/shows/1052">
      <div class="item mb-line-b" data-id="1052" data-bid="dp_wx_home_cinema_list">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>比高电影城（天润店）</span>
          </div>
          <div class="location-block box-flex">
              <div class="flex line-ellipsis">大东区津桥路7号天润广场5层</div>
                <div class="distance">4.6km</div>
          </div>
          <div class="flex"></div>
            <div class="label-block">
                  <div class="allowRefund">退</div>
                  <div class="endorse">改签</div>
                  <div class="snack">小吃</div>
                  <div class="vipTag">折扣卡</div>
            </div>
 
<div class="discount-block">
    <div>
      <div class="discount-label normal card">
        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" />
      </div>
      <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
    </div>
</div>        </div>

      </div>
    </a>
</div>
    </div>
</template>

<script>
import axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';
    export default {
         data() {
    return {
      show:false,
        arr:[],
        arr2:[],
        list:[],
        list1:[],
        list2:[],
        active: 2,
        active1:0,
        items:[{ text: '分组 1' }, { text: '分组 2' }],
      activeId: 1,
      activeIdx: 1,
      activeIndex: 0,
      activeIndexx: 0
    };
  },
  mounted() {
      this.get_topic()
      console.log(this.arr)
      this.get_topic1()
      this.get_topic2()
      
     
     
  },
  methods: {
       get_topic() {
      axios({
        method: "get",
        url: " http://localhost:3000/district"
      }).then(res => {
        this.list = res.data;
        console.log(this.list);
        for(var item of this.list){
          var obj = {}
          obj.text = item.name 
          let arr1 = []
          for(var item1 of item.subItems){
            arr1.push({text:item1.name})
          }
          obj.children = arr1;
          this.arr.push(obj)
        }
        console.log(this.arr,"array")
      });
    },
    get_topic1() {
      axios({
        method: "get",
        url: "http://localhost:3000/subway"
      }).then(res => {
        this.list1 = res.data;
        console.log(this.list1);
        for(var item of this.list1){
          var obj = {}
          obj.text = item.name 
          let arr1 = []
          for(var item1 of item.subItems){
            arr1.push({text:item1.name})
          }
          obj.children = arr1;
          this.arr2.push(obj)
        }
        console.log(this.arr2,"array")
      });
    },
     get_topic2() {
      axios({
        method: "get",
        url: "  http://localhost:3000/brand"
      }).then(res => {
        this.list2 = res.data.subItems;
        console.log(this.list2);
      });
    },
  },
  
    }
</script>

<style scoped>
.yy_banner{position: relative;}
.yy_van-tabs{width: 100%;height: 700px;position: absolute;background: white;z-index: 2;}
a{ margin-top: 10px;display: inline-block;width: 100%;border-bottom: solid 1px #cccc;padding-bottom: 20px;}
span{font-size: 16px;font-weight: 600;line-height: 30px;margin-left: 30px;margin-bottom: 50px;}
.location-block{display: flex;justify-content: space-around;margin-left: 30px;}
.label-block{display: flex;width: 80%;margin: 10px auto;}
.allowRefund,.endorse,.hallType{border: 1px solid #589daf;color: #589daf;height: 17px;margin-left: 8px;}
.snack,.vipTag{border: 1px solid #f90;color:#f90 ;margin-left: 8px;height: 17px;}
.discount-label{float: left;}
.discount-label img{width: 20px;height: 20px;margin-left: 40px;}

.brand li{height: 40px;border-bottom: 1px solid #3333;text-align: left;}
.brand li>span{text-align: left;margin-left: 20px;font-weight: 300;height: 100%;line-height: 40px;}
</style>