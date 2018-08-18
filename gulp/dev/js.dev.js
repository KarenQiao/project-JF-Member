/**脚本合并
 * 开发*/

var gulp = require('gulp'),

    connect = require('gulp-connect'),//服务器

    concat = require("gulp-concat"),//文件合并

    uglify=require('gulp-uglify'),

     babel=require('gulp-babel');

var through = require('through2');

var file_name;

var allPart = require('../config.js').allPart;//服务器

function devJs() {

    //主要依赖模块

    gulp.src(['src2/basic/*.js'])

         .pipe(babel())

        .pipe(concat('common.js'))

        // .pipe(uglify())

        .pipe(gulp.dest('static/js'))

        .pipe(connect.reload());

  gulp.src(['src2/component/**/*.js'])

    .pipe(babel())

    .pipe(concat('common.js'))

   // .pipe(uglify())

    .pipe(gulp.dest('static/js'))

    .pipe(connect.reload());

    gulp.src(['src2/lib/js/*.*'])

        .pipe(gulp.dest('static/js'))

        .pipe(connect.reload());

    gulp.src(['src2/api/**/*.*'])

        .pipe(gulp.dest('static/api'))

        .pipe(connect.reload());
}

module.exports = devJs;
