var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    bootlint = require('gulp-bootlint'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('builds/bootstrap/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html', function() {
  gulp.src('builds/bootstrap/**/*.html')
  .pipe(bootlint());
});

gulp.task('css', function() {
    gulp.src('builds/bootstrap/css/*.css');
});

gulp.task('watch', function() {
    gulp.watch('builds/bootstrap/js/**/*', ['js']);
    gulp.watch('builds/bootstrap/css/**/*.css', ['css']);
    gulp.watch(['builds/bootstrap/**/*.html'
    ], ['html']);
});

gulp.task('webserver', function() {
    gulp.src('builds/bootstrap/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
