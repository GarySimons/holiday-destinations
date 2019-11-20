let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;

gulp.task("uglify", function(){
    return gulp.src("assets/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("assets/js/min_files"))
})