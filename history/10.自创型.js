var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
gulp.task('copy',function(){
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe($.connect.reload());//通过浏览器自动刷新
    //这个是对
});
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copy']);
});
gulp.task('server',function(){
    $.connect.server({
        root:'./app',//服务器的根目录 /index.html
        port:8080,
        livereload:true,//启动实时刷新的功能
    })
});
gulp.task('default',['server','watch']);
