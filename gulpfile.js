let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts:watch', function () {
    return gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'sass:watch', 'scripts:watch']);