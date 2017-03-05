var gulp = require('gulp');
/**
 * 1. 如果你的任务中有异步操作的话，在任务定义函数中需要传入一个参数
 * 2. promise
 * 3. 流
 */
gulp.task('买米饭',function(callback){
    setTimeout(function(){
        console.log('买米饭');
        //在任务完成之后可以调用一下callback//
        callback();
    },2000)
});
gulp.task('买鸡蛋',function(callback){
    setTimeout(function(){
        console.log('买鸡蛋');
        //在任务完成之后可以调用一下callback//
        callback();
    },2000)
});
gulp.task('做饭',['买米饭','买鸡蛋'],function(){
    console.log('炒蛋炒饭');
});
/**
 * 第一个参数是任务的名称
 * 第二个参数是当前任务依赖的其它任务名称数组
 * 第三个参数是任务的定义
 */
gulp.task('吃饭',['做饭'],function(){
    console.log('开吃');
});
