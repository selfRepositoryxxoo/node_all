var gulp =require('gulp');
/**
 * 所有的css
 * 所有的png
 * 所有的除tmp.js以外的JS文件
 * {} 表示枚举中的任何一个 或的关系
 * ！ 表示不包括
 */
gulp.task('copy',function(){
    gulp.src(['./app/*/*.css',
        './app/imgs/**/*.{png,jpg,gif,bmp}',
        './app/js/*.js','!./app/js/tmp.js'],{base:'./app'})
        .pipe(gulp.dest('./dist'))
});

gulp.task('default',['copy']);