var gulp =require('gulp');
var $ = require('./gulp-load-plugins')();
/**
 * 1.扫描package.json中的依赖项
 * 2.找到所有以gulp-开头的模块
 * 3.通过require加载这些模块，把返回值赋给$的属性
 * 4.属性名就等于模块名去掉gulp-前缀
 */
gulp.task('less',function(){
    //使用此插件
    gulp.src('./less/less/*.less')
        .pipe($.less())
        .pipe(gulp.dest('./dist/css'))
});