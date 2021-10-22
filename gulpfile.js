const gulp = require('gulp');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const liveReload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const gulpConcat = require('gulp-concat');
var uglify = require('gulp-uglify');
const GulpZip = require('gulp-zip');
const image = require('gulp-image');
var plumber = require('gulp-plumber');

// html tasks:
gulp.task('html', async function () {
    return gulp.src(['project/**/*.pug', '!project/includes/*.*'])
    .pipe(plumber())
    // .pipe(notify('Html Task Finished!'))
    .pipe(pug({pretty: true, logError: 'error'}))
    .pipe(gulp.dest('dist'))
    .pipe(liveReload());
});

// css tasks:
gulp.task('css', async function () {
    return gulp.src('project/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(notify("Css Task Finished!"))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(liveReload());
});

// js tasks:
gulp.task('js', function () {
    return gulp.src('project/js/**/*.js')
    // .pipe(babel({
    //     presets: ['@babel/env']
    // }))
    // .pipe(notify("JavaScript Task Finished!"))
    // .pipe(gulpConcat('all.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(liveReload());
});

// json api tasks:
gulp.task('json', function () {
    return gulp.src('project/apis/*.json')
    .pipe(gulp.dest('dist/apis'))
    .pipe(liveReload());
});

// imgs task:
gulp.task('img', function () {
    gulp.src('project/img/**/*.*')
    .pipe(image())
    .pipe(gulp.dest('dist/imgs'))
});

// include libraries in dist:
gulp.task('lib', function () {
    gulp.src('project/css/lib/*.*')
    .pipe(gulp.dest('dist/css/lib'))
});

// zip all files:
gulp.task('zipFiles', function () {
    gulp.src('dist/**/*.*')
    .pipe(GulpZip('and_shop.zip'))
    .pipe(gulp.dest('.'))
    .pipe(notify("Project Files Is Compressed!"));
});

// gulp watch:
gulp.task('watch', async function () {
    require('./server.js');
    liveReload.listen()
    gulp.watch('project/**/*.pug', gulp.series('html'));
    gulp.watch('project/css/**/*.scss', gulp.series('css'));
    gulp.watch('project/js/**/*.js', gulp.series('js'));
    gulp.watch('project/apis/*.json', gulp.series('json'));
    gulp.watch('project/img/**/*.*', gulp.series('img'));
    gulp.watch('dist/**/*.*', gulp.series('zipFiles'));
});

// default task:
gulp.task('default', gulp.parallel('watch'));