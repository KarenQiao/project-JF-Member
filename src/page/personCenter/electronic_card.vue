<template>

  <div class="card_background">

    <div class="fluttered_first_img">
      <img src="../../../static/images/img_left_leaf.png"/>
    </div>

    <div class="fluttered_second_img">
      <img src="../../../static/images/img_left_leaf.png"/>
    </div>

    <div class="fluttered_third_img">
      <img src="../../../static/images/img_left_leaf.png"/>
    </div>

    <div class="fixed_left_img">
      <img src="../../../static/images/img_left_leaf.png"/>
    </div>

    <div class="fixed_right_img">
      <img src="../../../static/images/img_right_leaf.png"/>
    </div>

    <div class="center_plate">
      <div class="input_plate">
        <span>收件人：</span>

        <input type="text" class="card_input" v-model="addresser" id="addresser"/>
      </div>

      <div class="input_plate">
        <span>寄件人：</span>

        <input type="text" class="card_input" v-model="sender" id="sender"/>
      </div>

      <div class="content_input">
        <span>请写下您的祝福语：</span>

        <textarea placeholder="50字以内" v-model="content" id="content" maxlength="50"></textarea>
      </div>

      <button class="long_btn" @click="createCard">点击生成贺卡</button>
    </div>

  </div>

</template>


<script>

  import API from '../../assets/api'

  export default {

    name:'electronicCard',

    data() {
      return {
        addresser:'',
        sender:'',
        content:''
      }
    },

    mounted() {

    },

    methods:{

      createCard() {

        if (this.addresser == '') {

          document.getElementById('addresser').focus();

          jfShowTips.toastShow({'text':'收件人不能为空'});

          return false;

        }else if (this.sender == '') {

          document.getElementById('sender').focus();

          jfShowTips.toastShow({'text':'寄件人不能为空'});

          return false;

        }else if (this.content == '') {

          document.getElementById('content').focus();

          jfShowTips.toastShow({'text':'祝福语不能为空'});

          return false;

        }

        let params={
          addresser:this.addresser,
          sender:this.sender,
          content:this.content
        };

        let config = {
          headers: {'Content-Type':'application/json;charset=UTF-8'}
        };

        API.JsonPostFn(API.electronicCard,params,config).then(function (res) {

          if (res.data.code == '00000') {
            console.log(res);

            let str=encodeURI('?'+'content='+res.data.data.content+'&sender='+res.data.data.sender+'&addresser='+res.data.data.addresser+'&time='+res.data.data.time);

            console.log(str)

          //  console.log(decodeURI(str));

            let thisUrl=res.data.data.url+str;

            window.location=thisUrl;
          }

        }.bind(this))
          .catch(function (error) {

          })
      }

    }

  }

</script>
