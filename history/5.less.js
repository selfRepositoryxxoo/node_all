var gulp =require('gulp');
//1.安装插件
//引入此插件
var less = require('gulp-less');
gulp.task('less',function(){
    //使用此插件
    gulp.src('./less/less/*.less')
        .pipe(less())//使用插件，将less文件压缩成less文件
        .pipe(gulp.dest('./dist/css'))
});