


/*图片手动轮播*/
let tabMoveChange={

  "figer":{

    "ischange":true,

    "ismove":true //true表示左右移动，执行轮播的JS，false表示上下移动，不执行轮播的JS

  },
  /*初始化,没有动画弹出*/
  init:function(details){

    var _this=this;

    if(!details){//如果details未输入，则防止报错
      details={};
    }

    _this.moveEle = details.moveEle || 'moveArea';//当前显示的banner图片的整个div,class选择器

    _this.moveEleParent=details.moveEleParent||'tabChangeArea';//当前显示的整个框架

    _this.moveTab=details.moveTab||'tabBtn';

    _this.scaleEleParent=details.scaleEleParent||'jdshow_center_center';

    _this.fn=details.fn||0;

    _this.thisPosition = 0;//初始化现在在第几个页面

    _this.moveDistanceX = 0;//x方向移动的距离(一根手指)

    _this.moveDistanceY=0;//y方向移動的距離

    setTimeout(function () {

      //当前页面Banner部分绑定事件
     // _this.initPointEle(_this.moveEleParent);//初始化点点（参数一当前移动元素的父元素）

    },100);


    _this.moveEvent();//元素绑定事件（参数一当前移动元素）

    _this.tabEvent();

  },


  /*元素绑定事件*/
  moveEvent:function(){//参数一为移动元素的class值，参数二是点点的父元素

    var _this=this;

    var moveEle=document.getElementsByClassName(_this.moveEle);//banner轮播图

    var thisNum = moveEle[0].getElementsByTagName('a').length - 1;

    var thisWindowWidth = window.innerWidth;//屏幕可视窗口宽度

    var firstTouchesClientX; //初次点击的位置X坐标

    var firstTouchesClientY;//初次点击的位置Y坐标

    var moveTouchesClientX;//移动一段距离后，停止点的位置(X)

    var moveTouchesClientY;//移动一段距离后，停止点的位置(Y)

    var lastDis=0;//前一次距离

    var newDis=0;//最新的距离

    var lastDistanceSpeed=0;//最后一次速度


    moveEle[0].addEventListener('touchstart',function(event){

      var evt = event ? event : window.event;

      if(evt.touches.length==1){

        _this.moveDistanceX=0;

        _this.moveDistanceY=0;

        _this.figer.ischange=true;//初始化可移动

        getFirstPosition(event);

        if(this.className=""+_this.moveEle+" contentchange"){

          this.className=""+_this.moveEle+""
        }
      }

    },false);//获取初始位置

    moveEle[0].addEventListener('touchmove',function(event){

      var evt = event ? event : window.event;

      if(evt.touches.length==1){

        lastDistanceSpeed=getLastPosition(event);

        if(_this.figer.ischange){

          if(Math.abs(_this.moveDistanceY)>Math.abs(_this.moveDistanceX)){//如果在Y軸方向移動的距離大於X軸方向，則不轮播

            _this.figer.ismove=false
          }else {

            _this.figer.ismove=true
          }

          _this.figer.ischange=false;//进行锁定一次，
        }

        if( _this.figer.ismove){//判断为左右移动时，即可运行相应的JS

          evt.preventDefault();//阻止浏览器的默认行为

          evt.stopPropagation();

          if(((_this.thisPosition==0)&&_this.moveDistanceX>0)||((_this.thisPosition==-thisNum) &&_this.moveDistanceX<0)){//第一页，滑动会产生一个阻力
            _this.moveDistanceX=_this.moveDistanceX/3;
          }

          _this.changeTranslate(parseFloat(_this.thisPosition*thisWindowWidth)+parseFloat(_this.moveDistanceX) + 'px');//移动中
        }

      }



    },false);

    moveEle[0].addEventListener('touchend',function(event){

      var evt = event ? event : window.event;

      if(evt.changedTouches.length==1){

        if(_this.figer.ismove){

          this.className= ""+_this.moveEle+" contentchange";//添加class,带有Transition的属性

          if(this.parentElement==document.getElementsByClassName(_this.moveEleParent)[0]){//如果在banner轮播，

            if(((_this.thisPosition==-thisNum) &&_this.moveDistanceX<0)&&(Math.abs(_this.moveDistanceX)>55)){

              if(_this.fn){//当前处于第4页，并且继续滑动，执行相应的脚本

                _this.fn()
              }
            }
          }


          if(Math.abs(_this.moveDistanceX)>(thisWindowWidth/3)||lastDistanceSpeed>6){//当手指的移动距离大于屏幕的1/3时，变化

            _this.movePosition(_this.moveDistanceX);

          }else {

            _this.changeTranslate(parseFloat(_this.thisPosition*thisWindowWidth) + 'px');//变化到指定位置

          }

          _this.transitionFn(transitionMoveEndFn);//平滑过渡事件

        }





      }



    },false);

    //弹出层
  //  moveEle[0].addEventListener('click',function(){_this.showNewBanner();},false);



    //初始移送的位置
    function getFirstPosition(event) {

      var evt = event ? event : window.event;

      firstTouchesClientX = parseFloat(evt.touches[0].clientX);//当前点击事件距离屏幕左边的距离(初始位置-X);

      firstTouchesClientY=parseFloat(evt.touches[0].clientY);//当前点击事件距离屏幕左边的距离(初始位置-X);

      lastDis=newDis=firstTouchesClientX;

    }

    //手指即将离开的位置
    function getLastPosition(event) {

      var evt = event ? event : window.event;

      moveTouchesClientX = parseFloat(evt.changedTouches[0].clientX);//末尾位置(X);

      moveTouchesClientY = parseFloat(evt.changedTouches[0].clientY);//末尾位置(Y);

      lastDis=newDis;

      newDis=moveTouchesClientX;

      _this.moveDistanceX = moveTouchesClientX - firstTouchesClientX;//x軸方向最终移动的距离（第一根手指）

      _this.moveDistanceY = moveTouchesClientY - firstTouchesClientY;//Y軸方向最终移动的距离（第一根手指）

      return Math.abs(newDis-lastDis);

    }

    //绑定平滑过渡后的方法
    function transitionMoveEndFn(){

      for( var i=0;i<moveEle.length;i++){

        moveEle[i].className=""+_this.moveEle+"";//移除class,带有Transition的属性

        moveEle[i].removeEventListener('transitionend', transitionMoveEndFn, false);

        moveEle[i].removeEventListener('transitionend', transitionMoveEndFn, false);
      }

    }

  },

  tabEvent:function () {

    var _this=this;

    var allTabBtn=document.getElementsByClassName(_this.moveTab)[0].getElementsByTagName('span');

    for(var i=0;i<allTabBtn.length;i++){

      allTabBtn[i].addEventListener('click',moveTab,false)
    }

    function moveTab() {

      var allPoint = document.getElementsByClassName(_this.moveTab)[0].getElementsByTagName('span');

      //返回点击的是第几个元素
      for (var j = 0; j < allPoint.length; j++) {

        if (this == allPoint[j]) {

          break;

        }

      }

      var thisNeedMove = j + _this.thisPosition;//需要移动的位置

      document.getElementsByClassName(_this.moveEle)[0].className= ""+_this.moveEle+" contentchange";//添加class,带有Transition的属性


      //计算移动的绝对值
      if (thisNeedMove != 0) {

        for (var m = 0; m < Math.abs(thisNeedMove); m++) {

          _this.movePosition(-thisNeedMove);

        }

      }
    }

  },

  /*元素移动*/
  movePosition:function(position){//参数一当前移动的位置方向
    var _this=this;

    var thisWindowWidth = window.innerWidth;//屏幕可视窗口宽度

    var moveEle=document.getElementsByClassName(_this.moveEle);//包裹所有主体中的banner图片的父级元素

    var thisNum =  moveEle[0].getElementsByTagName('a').length - 1;

    var PointParent=document.getElementsByClassName('tabBtn');//点点的父元素

    var BannerPoint= PointParent[0].getElementsByTagName('span');//banner中的点点


    //如果向右滚动，则不能超过最大图片个数
    if (parseFloat(position) < 0) {

      _this.thisPosition > -thisNum ? _this.thisPosition-- : _this.thisPosition = -thisNum;

    }

    //如果向左边滚动，不能超过最左边
    else if (parseFloat(position) > 0) {

      _this.thisPosition < 0 ? _this.thisPosition++ : _this.thisPosition = 0;
    }

    _this.changeTranslate(thisWindowWidth * _this.thisPosition + 'px');//变化到指定位置

    if(BannerPoint){
      //变化点点的位置

      for(var i=0;i<PointParent.length;i++){

        PointParent[i].getElementsByClassName('showTab')[0].className="";
      }

      BannerPoint[-this.thisPosition].className="showTab";


    }


  },

  /*添加元素*/
  initPointEle:function(pointParentEle){//参数是点点以及banner的父元素,以及点点父元素的class值

    var _this = this;

    var AllBannerImg=document.getElementsByClassName( _this.moveEle)[0].getElementsByClassName(_this.scaleEleParent);//显示的banner图片

    var pointEle="";//点点元素

    for(var i=0;i<AllBannerImg.length;i++){


      if (i == 0) {

        pointEle += '<span class="showpoint"></span>';
      }

      else {

        pointEle += '<span></span>';

      }

    }

    addnode("div",pointEle,'allpoint');

    function addnode(tag, innerHtml, className){

      var obj = document.createElement(tag);

      if (className) {

        obj.className = className
      }

      obj.innerHTML = innerHtml;

      document.getElementsByClassName(pointParentEle)[0].appendChild(obj);
    }

  },

  //元素位置变化的方法
  changeTranslate:function(num1){

    var _this=this;

    var moveEle=document.getElementsByClassName(_this.moveEle);

    for( var i=0;i<moveEle.length;i++){

      moveEle[i].style.transform = 'translateX(' + num1 + ')';

      moveEle[i].style.webkitTransform = 'translateX(' + num1 + ')';

    }

  },

  //元素平滑过渡的方法
  transitionFn:function(myFn){

    var _this=this;

    var moveEle=document.getElementsByClassName(_this.moveEle);

    for( var i=0;i<moveEle.length;i++){

      moveEle[i].addEventListener("TransitionEnd",myFn,false);

      moveEle[i].addEventListener("webkitTransitionEnd",myFn,false);

    }

  },

  //判断有没有弹出层
  showNewBanner:function(){

    var _this=this;

    var thisWindowHeight=window.innerHeight;

    if(_this.moveDistanceX==0&&_this.moveDistanceY==0&&_this.allShowEle){//当没有任何移动，即点击，出现弹出图片

      document.getElementsByClassName( _this.allShowEle)[0].style.display='block';//弹出元素显示

      document.getElementsByTagName("body")[0].style.height=""+thisWindowHeight+"px";
      document.getElementsByTagName("html")[0].style.height=""+thisWindowHeight+"px";

      document.getElementsByTagName("body")[0].style.overflow="hidden";//页面禁止滚动
      document.getElementsByTagName("html")[0].style.overflow="hidden";//页面禁止滚动

    };


  }

};
