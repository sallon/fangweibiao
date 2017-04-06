/**
 * Created by yubo on 2017/3/14.
 */
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var connect = require("gulp-connect");

gulp.task('sass', function(){
    return gulp.src('./static/sass/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./static/css/'))
});

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: false,
        port:3001
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html','./static/sass/*.scss'], ['html','sass']);
});

gulp.task('start', ['connect', 'watch']);



