var gulp =require('gulp');
var $ = require('gulp-load-plugins')();
var rename = require('./rename');
gulp.task('html',function(){
    //使用此插件
    gulp.src('./app/index.html')
        .pipe($.minifyHtml())
        .pipe(gulp.dest('./dist/'))
});