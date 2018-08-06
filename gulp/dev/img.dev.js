/**图片压缩
 * 开发*/


var gulp = require('gulp'),

    imagemin = require('gulp-imagemin'),//图片压缩

    pngquant = require('imagemin-pngquant'),//png压缩

    cache = require('gulp-cache');//缓存

function devImg() {

    gulp.src('src2/images/**/*.{png,jpg,gif,pdf}')

        .pipe(cache(imagemin({

            progressive: true,

            use: [pngquant()]

        })))

        .pipe(gulp.dest('static/images'));

    gulp.src('src2/icon/**/*.{png,jpg,gif}')

        .pipe(cache(imagemin({

            progressive: true,

            use: [pngquant()]

        })))

        .pipe(gulp.dest('static/icon'));


  gulp.src('src2/images/**/*.{pdf,xlsx}')

    .pipe(gulp.dest('static/images'));

    gulp.src('src2/fonts/**/*.*')

        .pipe(gulp.dest('static/fonts'));

    gulp.src('src2/video/**/*.*')

        .pipe(gulp.dest('static/video'));

}

module.exports = devImg;
