<template>

  <div class="page_background">
    <!--欧洲之旅-->
    <div>
      <div class="travel_top"><p>海外线路</p></div>

      <div class="page_banner_plate">
        <img src="../../../static/images/img_europe_banner.png">

        <p class="page_banner_font">欧洲之旅</p>
      </div>

      <!--12天东欧超值之旅-->
      <div class="theme_title_plate">

        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">12天东欧超值之游</p>

        <p class="theme_title_details">波兰+捷克+奥地利+匈牙利+斯洛伐克</p>

        <p class="theme_title_date"><span>2018年12月4日出发</span></p>
      </div>

      <p class="area_name"><span>黑维兹温泉</span><span>最美小镇哈尔斯塔特</span><span>经典世遗巡礼</span><span>瓦豪胜景</span><span>奥斯维辛</span><span>年终超值低价</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_01.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_02.png"></div>

          <p>市场价：<span>￥8999</span></p>

          <p>会员价：<span class="red_price">￥8319</span></p>

          <p>已节省：<span>￥680</span></p>

          <a class="buy_btn_right" :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>

      <!--11天雪山温泉城堡高端深度之旅-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">11天雪山温泉城堡高端深度之旅</p>

        <p class="theme_title_details">匈牙利+捷克+奥地利</p>

        <p class="theme_title_date"><span>2018年11月10,19日出发</span></p>
      </div>

      <p class="area_name"><span>尖峰3000雪山</span><span>地下盐矿探险</span><span>红顶商人地道美味</span><span>古城堡探秘世遗巡礼</span><span>温泉酒店</span><span>静谧湖区夜宿</span></p>

      <div class="right_plates">
        <div class="img_font_plate">
          <div class="img_font_right">
            <div class="weight_img_plate"><img src="../../../static/images/img_europe_03.png"></div>

            <p>市场价：<span>￥15499</span></p>

            <p>会员价：<span class="red_price">￥14599</span></p>

            <p>已节省：<span>￥900</span></p>

            <a class="buy_btn_left"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
          </div>

          <div class="high_img_plate"><img src="../../../static/images/img_europe_04.png"></div>
        </div>
      </div>

      <!--清新瑞士 曼妙法国11天-->
      <div class="theme_title_plate">

        <div class="activity_label">
          <p>双11前</p>

          <p>预定<span class="red_font">再降</span></p>

          <p class="travel_price">￥1314</p>

          <p>/2人</p>
        </div>

        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">清新瑞士 曼妙法国11天</p>

        <p class="theme_title_details">演奏西欧唯美小调 高端深度漫游</p>

        <p class="theme_title_date"><span>2018年10月23,26,29日出发</span></p>
      </div>

      <p class="area_name"><span>卓别林博物馆</span><span>日内瓦湖游船</span><span>双雪山</span><span>金色山口列车</span><span>木屋特色酒店</span><span>巴黎文化艺术之旅</span><span>巴黎三晚五星市区连住</span><span>塞纳河游船晚宴</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_05.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_06.png"></div>

          <p>市场价：<span>￥19300</span></p>

          <p>会员价：<span class="red_price">￥18600</span></p>

          <p>已节省：<span>￥700</span></p>

          <a class="buy_btn_right"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>

      <!--南欧12天品质之旅-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">南欧12天品质之旅</p>

        <p class="theme_title_details">古典与多元  品味别样西葡</p>

        <p class="theme_title_date"><span>2018年10月26,30日出发</span></p>
      </div>

      <p class="area_name"><span>AVE子弹列车</span><span>弗朗明戈</span><span>著名世遗巡礼</span><span>高迪之旅</span><span>OUTLETS</span><span>特色美食</span><span>三大赠送</span><span>一价全含</span></p>

      <div class="right_plates">
        <div class="img_font_plate">
          <div class="img_font_right">
            <div class="weight_img_plate"><img src="../../../static/images/img_europe_07.png"></div>

            <p>市场价：<span>￥15000</span></p>

            <p>会员价：<span class="red_price">￥14100</span></p>

            <p>已节省：<span>￥900</span></p>

            <a class="buy_btn_left"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
          </div>

          <div class="high_img_plate"><img src="../../../static/images/img_europe_08.png"></div>
        </div>
      </div>

      <!--德法意瑞士11天舒心之游-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">德法意瑞士11天舒心之游</p>

        <p class="theme_title_details">名城小镇醉欧洲</p>

        <p class="theme_title_date"><span>2018年10月22日出发</span></p>
      </div>

      <p class="area_name"><span>霞慕尼小镇</span><span>新天鹅堡</span><span>往返双直飞/南针峰</span><span>双游船</span><span>经典名城巡礼</span><span>一价全包</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_09.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_10.png"></div>

          <p>市场价：<span>￥12499</span></p>

          <p>会员价：<span class="red_price">￥11499</span></p>

          <p>已节省：<span>￥1000</span></p>

          <a class="buy_btn_right"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>
    </div>

    <!--日本之旅-->
    <div>
      <div class="page_banner_plate">
        <img src="../../../static/images/img_japan_benner.png">

        <p class="page_banner_font">日本之旅</p>
      </div>

      <!--北海道 · Club Med-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">北海道特惠 · 温泉巡游 · 自由之旅6天</p>

        <p class="theme_title_details">札幌-层云峡-旭川-定山溪-小樽-札幌</p>

        <p class="theme_title_date"><span>2018年10月22,29日；11月5,12,19日出发</span></p>
      </div>

      <p class="area_name"><span>旭山动物园</span><span>白色恋人公园</span><span>定山溪二见公园</span><span>丰平峡红叶山谷</span><span>北海道神宫</span><span>北海道经典囊括</span><span>札幌1日自由活动</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_11.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_12.png"></div>

          <p>市场价：<span>￥6000</span></p>

          <p>会员价：<span class="red_price">￥5616</span></p>

          <p>已节省：<span>￥384</span></p>

          <a class="buy_btn_right"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>

      <!--本州高端 · 京都艺伎餐 · 私汤之旅6 天-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">本州高端 · 京都艺伎餐 · 私汤之旅6天</p>

        <p class="theme_title_details">大阪-京都-名古屋-富士地区-伊豆-东京</p>

        <P class="theme_title_date"><span>2018年10月14,21,29日出发</span></P>
      </div>

      <p class="area_name"><span>伊豆修善寺温泉街</span><span>建仁寺</span><span>富士山</span><span>明治神宫</span><span>茶道体验</span><span>银座</span><span>4晚5星酒店</span><span>京都艺伎料理</span><span>特色美食</span></p>

      <div class="right_plates">
        <div class="img_font_plate">
          <div class="img_font_right">
            <div class="weight_img_plate"><img src="../../../static/images/img_europe_13.png"></div>

            <p>市场价：<span>￥10000</span></p>

            <p>会员价：<span class="red_price">￥9600</span></p>

            <p>已节省：<span>￥400</span></p>

            <a class="buy_btn_left"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
          </div>

          <div class="high_img_plate"><img src="../../../static/images/img_europe_14.png"></div>
        </div>
      </div>

      <!--本州经典 · 超值之旅6日行-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">本州经典 · 超值之旅6日行</p>

        <p class="theme_title_details">大阪-奈良-京都-中部-富士山-东京-静冈</p>

        <P class="theme_title_date"><span>2018年10月17,22,24,29,31日；11月5,7,12,14日出发</span></P>
      </div>

      <p class="area_name"><span>抹茶体验</span><span>奈良公园</span><span>道顿崛</span><span>心斋桥</span><span>木更津奥特莱斯</span><span>清水寺</span><span>富士山五合目</span><span>银座</span><span>全程含餐</span><span>味蕾尽享</span><span>一价全包</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_15.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_16.png"></div>

          <p>市场价：<span>￥6100</span></p>

          <p>会员价：<span class="red_price">￥5800</span></p>

          <p>已节省：<span>￥300</span></p>

          <a class="buy_btn_right"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>
    </div>

    <!--海岛之旅-->
    <div>
      <div class="page_banner_plate">
        <img src="../../../static/images/img_island_banner.png">

        <p class="page_banner_font">海岛之旅</p>
      </div>

      <!--蓝梦巴厘-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">蓝梦巴厘</p>

        <p class="theme_title_details">6天4晚浪漫超值之旅</p>

        <P class="theme_title_date"><span>2018年10月1日出发</span></P>
      </div>

      <p class="area_name"><span>五星级航空</span><span>蓝梦岛</span><span>恶魔的眼泪</span><span>独木舟</span><span>香蕉船</span><span>浮潜</span><span>贝尼达岛双岛出海</span><span>网红秋千</span><span>海景下午茶</span><span>梦幻沙滩</span><span>巴厘岛1天自由活动</span></p>

      <div class="img_font_plate">
        <div class="high_img_plate"><img src="../../../static/images/img_europe_17.png"></div>

        <div class="img_font_right">
          <div class="weight_img_plate"><img src="../../../static/images/img_europe_18.png"></div>

          <p>市场价：<span>￥6290</span></p>

          <p>会员价：<span class="red_price">￥5918</span></p>

          <p>已节省：<span>￥372</span></p>

          <a class="buy_btn_right"  :href="dataList.length>0?dataList[0].url:''">立即购买</a>
        </div>
      </div>

      <!--五星高端巴厘岛-->
      <div class="theme_title_plate">
        <p class="theme_title_small"><span>Travel holiday</span></p>

        <p class="theme_title">五星高端巴厘岛</p>

        <p class="theme_title_details">6天4晚奢华之旅</p>

        <P class="theme_title_date"><span>2018年10月4日出发</span></P>
      </div>

      <p class="area_name"><span>五星级航空</span><span>蓝梦岛出海</span><span>蓝梦岛环岛游</span><span>恶魔的眼泪</span><span>泳池</span><span>俱乐部泳池</span><span>独木舟</span><span>各种棋类</span><span>网红打卡Bali Swing鸟巢</span><span>空中大秋千</span><span>巴厘岛1天自由活动</span><span>全场五星酒店</span></p>

      <div class="right_plates">
        <div class="img_font_plate">
          <div class="img_font_right">
            <div class="weight_img_plate"><img src="../../../static/images/img_europe_19.png"></div>

            <p>市场价：<span>￥8590</span></p>

            <p>会员价：<span class="red_price">￥8190</span></p>

            <p>已节省：<span>￥400</span></p>

            <a class="buy_btn_left" :href="dataList.length>0?dataList[10].url:''">立即购买</a>
          </div>

          <div class="high_img_plate"><img src="../../../static/images/img_europe_20.png"></div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

  import API from '../../assets/api'

  export default {

    data() {
      return{

        id:'',

        page:1,

        dataList:[]

      }
    },

    mounted(){

      this.id=this.$route.params.id;

      this.getUrl();
    },

    methods:{

      getUrl(){

        let params={

          themeId:this.id,

        };

        API.getFn(API.themeGoods,params)

          .then(function (res) {

            console.log(res);

            if(res.data.code=='00000'){

              this.dataList=res.data.list;

              console.log(this.dataList[0].url)

            }else {

              jfShowTips.toastShow({'text':res.data.message})
            }
          }.bind(this))

          .catch(function (error) {

          }.bind(this))



      }



    }

  }

</script>


