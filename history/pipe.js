var gulp = require('gulp');
var less=require('gulp-less');//这是将less文件转成css文件 这是预编译的洗发
gulp.task('less',function(){
    gulp.src('./less/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
})