/**
 * Created by Administrator on 2018/1/4.
 */

var gulp = require('gulp'),

    runSequence = require('run-sequence'),//顺序执行

    rev = require('gulp-rev'),//文件指纹

    htmlMin = require('gulp-htmlmin'),

    uglify = require('gulp-uglify'),

    babel=require('gulp-babel'),

    cleanCss=require('gulp-clean-css'),

    del = require('del');

  //  revCollector = require('gulp-rev-collector');//html换链接


var clean = require('gulp-clean');

//var chinese2unicode = require('fd-gulp-chinese2unicode');//中文2Unicode




//删除旧的文件
gulp.task("clean-rev", function(){

    return gulp.src('rev')

        .pipe(clean());

})



gulp.task('revJs', function(){

    return gulp.src(['static/js/common.js'])

       // .pipe(babel())

        .pipe(rev())//加指纹

        .pipe(gulp.dest('static/js'))//在bulid/js下生成文件

        .pipe(rev.manifest())//生成对应文件

        .pipe(gulp.dest('rev/js'));//对应文件放置地址

});


gulp.task('revCss', function(){

    return gulp.src('static/css/common.css')

        //.pipe(chinese2unicode())

        .pipe(cleanCss())

        .pipe(rev())

        .pipe(gulp.dest('static/css'))//在bulid/js下生成文件

        .pipe(rev.manifest())

        .pipe(gulp.dest('rev/css'));

});




/*gulp.task('revHtmlCss', function () {

    return gulp.src(['rev/css/common.css','index.html'])

        .pipe(revCollector())                         //替换html中对应的记录

        .pipe(gulp.dest('/'));                     //输出到该文件夹中

});


gulp.task('revHtmlJs', function () {

    gulp.src(['rev/js/common.js','index.html'])

        .pipe(revCollector())                         //替换html中对应的记录

        .pipe(gulp.dest('/'));                     //输出到该文件夹中

});*/

gulp.task('cleanAll', function (cb) {
  del([
    'static/js/common.js',
    'static/css/common.css'
  ], cb);
});



function allHash(done) {

    //condition = false;
    //依次顺序执行
    runSequence(

        ['clean-rev'],

        ['revCss'],

       // ['revHtmlCss'],

        ['revJs'],

      //  ['revHtmlJs'],

        ['cleanAll'],

        done);

}


module.exports = allHash;
