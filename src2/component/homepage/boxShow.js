

var boxShow={

  checkShow:function (eleClass) {

    document.getElementsByClassName(eleClass)[0].style.display='block';

    setTimeout(function () {

      document.getElementsByClassName(eleClass)[0].className=document.getElementsByClassName(eleClass)[0].className+' boxShow'

    },10);

    document.getElementsByTagName('body')[0].className='ovHide';

    document.getElementsByTagName('html')[0].className='ovHide';

  },

  checkHide:function (eleClass) {

    document.getElementsByClassName(eleClass)[0].className=eleClass;


    setTimeout(function () {

      document.getElementsByClassName(eleClass)[0].style.display='none';

    },200);

    document.getElementsByTagName('body')[0].className='';

    document.getElementsByTagName('html')[0].className='';


  }


}
