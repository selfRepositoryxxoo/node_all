var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('less',function(){
   gulp.src('./app/less/*.less')
       .pipe($.less())//这是插件，专门用来处里less文件的
       .pipe(gulp.dest('./dist/css'))
       .pipe($.minifyCss())//这是压缩的
       .pipe($.rename('index.min.css'))//这是重命名
       .pipe(gulp.dest('./dist/css'))
});