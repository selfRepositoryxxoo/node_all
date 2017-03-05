var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('html',function(){
   gulp.src('./app/index.html')
       .pipe($.minifyHtml())//这是压缩html文件
       .pipe(gulp.dest('./dist'))
});