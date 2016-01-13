const modifyFilter = require('./lib');
const gulp = require('gulp');
const debug = require('gulp-debug');

gulp.task('default', () => {
  gulp.src('sample-data/*.txt')
    .pipe(modifyFilter())
    .pipe(debug())

});

gulp.watch('sample-data/*.txt', ['default']);
