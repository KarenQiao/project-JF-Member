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
      }else if(window.location.href.includes('mobile')){

        this.mobileNo=window.location.href.split('?')[1].split('&')[0].slice(7);

        this.geid=window.location.href.split('?')[1].split('&')[2].slice(5);

        console.log(window.location.href.includes('password'))

        if(window.location.href.includes('password')){//默认登录

          this.loginPasd=window.location.href.split('?')[1].split('&')[1].slice(9);

          this.selfLogin();

        }else {

          console.log('默认注册')

          this.guid=window.location.href.split('?')[1].split('&')[1].slice(5);

          let params = {

            mobileNo: this.mobileNo,

            password: '666666',

            rePassword: '666666',

            guid: this.guid,

            geid:this.geid

          };

          API.postFn(API.setPasd,params)

            .then(function (res) {

              if(res.data.code=='00000'){

              //  jfShowTips.toastShow({'text':'设置成功'});

                localStorage.setItem('userData',JSON.stringify(res.data.data));

                localStorage.setItem('firstLogin',res.data.data.firstLogin);

                localStorage.setItem('userToken',res.data.data.sessionKey);

                var _this=this;

                setTimeout(function () {

                  _this.$router.push('/homepage')

                },1500)


              }else {

                jfShowTips.toastShow({'text':res.data.message});

                return false
              }



            }.bind(this))
            .catch(function (error) {

            }.bind(this))

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
