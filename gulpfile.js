const gulp = require('gulp');
const beeper = require('beeper');
const browsersync = require('browser-sync');
const del = require('del');
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

function onError (err) {
  beeper();
  console.log(err);
}

gulp.task('browsersync', function (cb) {
  return browsersync({
    port: 3000
  }, cb);
});

gulp.task('clean', function (cb) {
  return del(['client/assets/*'], cb);
});

gulp.task('images', function () {
  return gulp.src('_/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('client/assets/img'));
});

gulp.task('scripts', function () {
  return gulp.src('_/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest('client/assets/js'));
});

gulp.task('styles', function () {
  return gulp.src('_/sass/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(gulp.dest('client/assets/css'));
});

gulp.task('partials', function () {
  return gulp.src('_/partials/**/*')
    .pipe(gulp.dest('client/assets/partials'));
});

gulp.task('watch', function () {
  gulp.watch('**/*.html', function (done) {
    browsersync.reload();
    done();
  });
  gulp.watch('_/sass/**/*', gulp.series('styles', function (done) {
    browsersync.reload();
    done();
  }));
  gulp.watch('_/js/**/*.js', gulp.series('scripts', function (done) {
    browsersync.reload();
    done();
  }));
  gulp.watch('_/img/*', gulp.series('images', function (done) {
    browsersync.reload();
    done();
  }));
  gulp.watch('_/partials/**/*', gulp.series('partials', function (done) {
    browsersync.reload();
    done();
  }));
});

gulp.task('default', gulp.parallel('browsersync', 'styles', 'scripts', 'images', 'partials', 'watch'));
