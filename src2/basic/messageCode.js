var inputFn = {

    messageCheck: function (num) {

        //e.preventDefault();

        var thisEle= document.getElementById('getCode');


        if (thisEle.className.indexOf('locked') == -1) {

          thisEle.setAttribute('disabled',true);

            var time = num;

            var thisInnerHtml = thisEle.innerHTML;

            thisEle.innerHTML = '重新发送' + time + 's';

            thisEle.className += ' locked';

            var thisSet = setInterval(function () {

                thisEle.innerHTML = '重新发送' + (--time) + 's';

                if (time <= 0) {

                    clearInterval(thisSet);

                  thisEle.removeAttribute('disabled')

                    thisEle.className = thisEle.className.replace('locked', '');

                    thisEle.innerHTML=thisInnerHtml;

                }

            }.bind(this), 1000)

        }
    },


    NextMessageCheck: function (num) {

    //e.preventDefault();

    var thisEle= document.getElementById('getNextCode');

    if (thisEle.className.indexOf('locked') == -1) {

      thisEle.setAttribute('disabled',true);

      var time = num;

      var thisInnerHtml = thisEle.innerHTML;

      thisEle.innerHTML = '重新发送' + time + 's';

      thisEle.className += ' locked';

      var thisSet = setInterval(function () {

        thisEle.innerHTML = '重新发送' + (--time) + 's';

        if (time <= 0) {

          clearInterval(thisSet);

          thisEle.removeAttribute('disabled')

          thisEle.className = thisEle.className.replace('locked', '');

          thisEle.innerHTML=thisInnerHtml;

        }

      }.bind(this), 1000)

    }
  },

};
