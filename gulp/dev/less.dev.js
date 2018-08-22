/**样式翻译合并
 * 开发*/

var gulp = require('gulp'),

    less = require('gulp-less'),//less解码

    autoprefixer = require('gulp-autoprefixer'),//css兼容性

    concatDir = require('gulp-concat-dir'),//按文件夹合并

    concat = require("gulp-concat"),//文件合并

    connect = require('gulp-connect'),//服务器

    minifyCss = require("gulp-minify-css"),//css文件压缩

     clean = require('gulp-clean'),

     rev = require('gulp-rev');//文件指纹



function devLess() {

    gulp.src(['src2/basic/**/*.less','src2/component/**/*.less'])

        .pipe(less()) //编译less

        .pipe(autoprefixer({

            browsers: ['Android >= 4.0', 'IOS >=7', 'Firefox >= 20', 'ie >= 8'],//兼容设备

            cascade: true, //是否美化属性值 默认：true 像这样：

            remove: true //是否去掉不必要的前缀 默认：true
        }))

        .pipe(concat('common.css'))

        .pipe(minifyCss())

        .pipe(gulp.dest('static/css'))

        .pipe(connect.reload());


  //删除旧的文件
  gulp.task("clean-rev", function(){

    return gulp.src('rev')

      .pipe(clean());

  })

}

module.exports = devLess;
