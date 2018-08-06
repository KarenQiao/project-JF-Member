/**模板引擎合并
 * 开发*/

var gulp = require('gulp'),

    ejs = require('gulp-ejs'),//ejs模板

    cheerio = require('gulp-cheerio'),//批量更换html中的引用

    connect = require('gulp-connect'),//服务器

    rename = require("gulp-rename");//重命名

var bom = require('gulp-bom');//解决UTF-8文件是采用无BOM

var through = require('through2');

var file_name;

var allJs = require('../config.js').allJs;//服务器

function devEjs() {

    gulp.src('src2/view/**/*.ejs')

        .pipe(ejs())

        .pipe(through.obj(function(file,enc,cb){

            file_name=file.relative.match(/\\(\S*)\./)[1];

            this.push(file);

            cb();
        }))


        //增加媒体查询，通用样式文件
        .pipe(cheerio({

            run: function ($) {

                var addHtml = "";

                addHtml += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'

                addHtml += "<meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0,minimum-scale=1, maximum-scale=1'>\n";

                addHtml += "<meta name='apple-mobile-web-app-capable' content='yes' />\n";

                addHtml += "<meta name='apple-mobile-web-app-status-bar-style' content='black' />\n";

                addHtml += "<meta name='format-detection' content='telephone=no, email=no' />\n";

                addHtml += "<link rel='stylesheet'  href='../../css/common.css'/>\n";//第二版开发样式
              //  addHtml += "<link rel='stylesheet'  href='../../css/"+file_name+".css'/>\n";


                $('head').append(addHtml);

                //console.log(file_name)

            },

            parserOptions: {
                // Options here
                decodeEntities: false
            }

        }))

        //顺序增加脚本文件
        .pipe(cheerio({

            run:function($){

                var addJsMain='';

                for(var i=0;i<allJs.length;i++){

                    addJsMain += '\n<script src="../../js/'+allJs[i]+'.js"></script>\n';//主要的脚本文件

                }


              //  addJsMain += '\n<script src="../../js/'+file_name+'.js"></script>\n';//主要的脚本文件

                var addJsHtml="";//保存用的业务脚本

                var addJsRun="<script>\n";//运行的脚本

                var addJsHtmlHead="<script src='";

                var addJSHtmlBottom = "'></script>\n";

                var addJsTemHead="<script id='";

                var addJsTemMiddle = "' type='text/html'>\n";

              //  var addJsTemMiddle = "' type='text/babel'>\n"

                var addJsTemBottom = "</script>\n";



                $('script').each(function(index,ele){

                    if($(this).attr('src')){

                        addJsHtml+=addJsHtmlHead+$(this).attr('src')+addJSHtmlBottom;

                    }

                    else if($(this).attr('id')){

                        addJsHtml+=addJsTemHead+$(this).attr('id')+addJsTemMiddle+$(this).html()+addJsTemBottom

                    }
                    else {
                        addJsRun += $(this).html() + '\n';
                    }

                })

                addJsRun += "\n</script>\n";

                $('script').remove();

                $('body').append(addJsMain);

                $('body').append(addJsHtml);

                $('body').append(addJsRun);


            },
            parserOptions: {
                // Options here
                decodeEntities: false
            }
        }))



        .pipe(rename({

            extname: ".html"

        }))

        .pipe(gulp.dest('static/html'))//输出为html

        .pipe(bom())

        .pipe(connect.reload());

}

module.exports = devEjs;
