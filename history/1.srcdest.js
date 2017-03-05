//先从node_modules下面加载gulp模块
//然后把gulp模块加载后的返回值赋给gulp变量
var gulp = require('gulp');
//定义一个任务 task
/**
 * taskname 任务的名字
 * fn 任务的定义，函数
 */
gulp.task('default',function(){
    /**
     * 先从源文件中读取源文件
     * 然后再通过pipe方法以管道的方式导出到目标目录中
     */ //假如没有这个base，我们拷贝的文件都会变成一起，没有css，js的文件夹，假如有这个话就会cssjs这些文件夹也会copy过来
    gulp.src(['./app/*/*.css','./app/*/*.js'],{base:'./app'})//获取要输入的方法
        .pipe(gulp.dest('./dist'));//指定要保存的目录
});
//最终生成的路径=
// gulp.dest的参数+src中有通配符开始匹配到的路径
// 指定基准路径
// gulp.dest的参数+(完整路径-base路径 )
//console.log(Math.pow(2,10));


