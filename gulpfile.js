const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');

gulp.task('lint', () => {
  return gulp.src('src-static/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sassLint', () => {
  return gulp.src('src-static/css/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('babel', () => {
  return gulp.src('src-static/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('static/js'));
});

gulp.task('sass', () => {
  return gulp.src('src-static/css/**/*.s+(a|c)ss')
    .pipe(sass().on('error', (err) => {
      console.log(err.message);
    }))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('default', ['lint', 'sassLint', 'babel', 'sass']);
