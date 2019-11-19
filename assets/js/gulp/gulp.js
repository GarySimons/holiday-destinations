const gulp = require('gulp');

gulp.task('minify', function(){
    gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
})