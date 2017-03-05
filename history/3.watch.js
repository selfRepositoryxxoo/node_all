//先从node_modules下面加载gulp模块
//然后把gulp模块加载后的返回值赋给gulp变量
var gulp = require('gulp');
gulp.task('copy',function(){
    gulp.src('./app/index.html').pipe(gulp.dest('./dist'));
});
gulp.task('default',function(){
    //gulp.watch('./app/index.html',['copy']);
    //event事件对象
    gulp.watch('./app/index.html',function(event){
            console.log(event);
        // type added changed deleted
        // path 变化的文件的路径
    });
});
