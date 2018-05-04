let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'scripts'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
    gulp.watch(['./dist/*']).on('change', browserSync.reload);
});