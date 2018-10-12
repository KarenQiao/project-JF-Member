<template>

  <div class="loading_background">
    <div class="loading_center">
      <div class="loading_page_logo"><img src="../../static/images/img_start_logo.png"/></div>

      <p class="loading_font">WELCOME TO JIA CLUB</p>
    </div>
  </div>

</template>



<script>

  import API from '../assets/api';

  export default {
    name:'accountSafety',

    data(){

      return{

        mobileNo:'',

        guid:'',

        loginPasd:'',

        geid:'',

        passWord:'',

        rePassword:'',

      }

    },

    created(){

      let _this=this;

      let token = localStorage.getItem('userToken');

      let userData=JSON.parse(localStorage.getItem('userData'));

      if (userData&&token) {

        setTimeout(function () {

          _this.$router.push('/homepage')

        },1500);

        return false
      }else if(window.location.href.includes('mobileNo')){

        this.mobileNo=window.location.href.split('?')[1].split('&')[0].slice(7);

        this.geid=window.location.href.split('?')[1].split('&')[2].slice(5);

        if(window.location.href.includes('password')){

          this.loginPasd=window.location.href.split('?')[1].split('&')[1].slice(9);

          this.selfLogin();

        }else {

          this.guid=window.location.href.split('?')[1].split('&')[1].slice(5);

          localStorage.setItem('mobileNo',this.mobileNo);

          localStorage.setItem('geid',this.geid);

          localStorage.setItem('guid',this.guid);

          setTimeout(function () {

            _this.$router.push('/setpasd')

          },1500)

        }

        return false

      }else {
        setTimeout(function () {

          _this.$router.push('/login')

        },1500);
      }



    },

    mounted(){


    },

    methods:{

      selfLogin(){

        let params={

          username:this.mobileNo,

          password:this.loginPasd,

          geid:this.geid
        };

        API.getFn(API.login,params).then(function (res) {

          console.log(res)

          if(res.data.code=='00000'){

            localStorage.setItem('userData',JSON.stringify(res.data.data));

            localStorage.setItem('firstLogin',res.data.data.firstLogin);

            localStorage.setItem('userToken',res.data.data.sessionKey);

            var _this=this;

           setTimeout(function () {

             _this.$router.push('/homepage');

           },1500)


          }else {

            jfShowTips.toastShow({'text':res.data.message});

            return false

          }

        }.bind(this))
          .catch(function (error) {

            jfShowTips.loadingRemove();
            console.log(error)

          }.bind(this))

      }
    }
  }
</script>
