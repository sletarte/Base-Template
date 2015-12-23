var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

//Watch task
gulp.task('watch',function() {
    livereload.listen();
    gulp.watch('sass/**/*.scss',['styles']);
});
