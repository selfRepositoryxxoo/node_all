var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('uglify',function(){
    // ! 表示排除掉某个文件
    gulp.src(['./app/js/*.js','!./app/js/tmp.js'])
        .pipe($.concat('app.js'))//这是将文件合并，同时还让他们在在app.js里面，这个concat()里面不是路径了，dest是路径
        .pipe(gulp.dest('dist/js'))
        .pipe($.uglify())//这是压缩的js 和压缩css是不一样的
        .pipe($.rename('app.min.js'))
        .pipe(gulp.dest('dist/js'))
});