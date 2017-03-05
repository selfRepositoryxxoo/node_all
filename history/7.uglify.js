var gulp =require('gulp');
var $ = require('gulp-load-plugins')();
var rename = require('./rename');
gulp.task('js',function(){
    gulp.src(['./app/js/b.js','./app/js/a.js'])
        .pipe($.concat('all.js'))//指定合并后的文件名
        .pipe(gulp.dest('./dist/js'))// 合并后先保存一次
        .pipe($.uglify())//再进行压缩
        .pipe($.rename(rename))//重命名  压缩后的文件名
        .pipe(gulp.dest('./dist/js'))
});
// npm init -y ->  package.json