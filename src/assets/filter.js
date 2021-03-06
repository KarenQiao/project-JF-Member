import Vue from 'vue'

let filter;


//时间过滤
Vue.filter('time',function (value) {
  let cc = new Date(value);
  Date.prototype.toLocaleString = function() {

    //补0操作
    function getzf(num){
      if(parseInt(num) < 10){
        num = '0'+num;
      }
      return num;
    };

    var oYear = this.getFullYear(),
      oMonth = this.getMonth() + 1,
      oDay = this.getDate(),
      oHour = this.getHours(),
      oMin = this.getMinutes(),
      oSen = this.getSeconds(),
      oTime = oYear + '.' + getzf(oMonth) + '.' + getzf(oDay) ;/*+ ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen);//最后拼接时间
*/
    return oTime;
  };
  return cc.toLocaleString();
})


//时间过滤
Vue.filter('level',function (value) {

  let result;

  if(value==1){

    result='星星'

  }else if(value==2){

    result='月亮'

  }else {

    result='太阳'
  }

  return result

});


//时间过滤
Vue.filter('orderStatue',function (value) {

  let result;

  if(value=='00'){

    result='待付款'

  }else if(value=='10'){

    result='已付款'

  }else if(value=='20'){

    result='已发货'

  }
  else if(value=='30'){

    result='已过期'

  }
  else if(value=='40'){

    result='已完成'

  }

  return result

});


filter=Vue.filter;


export default filter
