var gulp =require('gulp');
var $ = require('gulp-load-plugins')();
var rename = require('./rename');
gulp.task('less',function(){
    //使用此插件
    gulp.src('./less/less/*.less')
        .pipe($.less())
        .pipe($.concat('all.css'))//把多个CSS文件合并成一个CSS文件
        .pipe(gulp.dest('./dist/css'))
        .pipe($.minifyCss())
        .pipe($.rename(rename))
        .pipe(gulp.dest('./dist/css'))
});