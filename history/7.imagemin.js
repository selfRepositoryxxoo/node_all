var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('image',function(){
   gulp.src('./app/image/*.png')
       .pipe($.imagemin())//进行图片压缩
       .pipe(gulp.dest('./dist/image'))
});