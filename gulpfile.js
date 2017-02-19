var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
//静态服务器
gulp.task('browser-sync',function(){
  browserSync.init({
    server:{
      baseDir:"./",
    }
  });
  gulp.watch(['index.html','css/*.css','js/*.js'],reload);
});
//sass
gulp.task('testsass',function(){
	gulp.src('css/style.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('css'));
});
gulp.task('sass:watch',function(){
	gulp.watch('css/*.scss',['testsass']);
});

gulp.task('default',['testsass','sass:watch']);
