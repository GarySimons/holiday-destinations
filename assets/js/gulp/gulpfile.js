const gulp = require('gulp');

gulp.task('minify', function(){
    gulp.src('assets/js/scripts.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});