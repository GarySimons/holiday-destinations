let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
let cleanCSS = require('gulp-clean-css');

gulp.task("uglify", function(){
    return gulp.src("assets/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("assets/js/min_files"))
});

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'));
});