var gulp = require('gulp');
gulp.task('rice',function(callback){
   setTimeout(function(){
      console.log('米饭OK');
      callback();//整个eat这个任务都是依赖的，首先要加载这个最基础的这些，但是这个rice是异步的需要时间所以我们 需要加callback才会继续往下执行
   },1000);
});
gulp.task('egg',function(callback){
   setTimeout(function(){
      console.log('鸡蛋OK');
      callback();//
   },1000);
});
gulp.task('cook',['rice','egg'],function(){
   console.log('炒鸡蛋+米饭');
});
gulp.task('eat',['cook'],function(){
   console.log('吃饭');
});

