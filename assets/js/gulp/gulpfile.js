const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify', function(){
   return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/min'));
});