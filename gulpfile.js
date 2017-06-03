const gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat');

const stylePaths = ['./assets/styles/**/*.sass', './assets/styles/**/*.scss']

gulp.task('styles', function() {
	gulp.src('./assets/styles/styles.sass')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest('./assets/styles/dist'));
});

gulp.task('watch', function() {
	gulp.watch(stylePaths, ['styles']);
});

gulp.task('default', ['watch', 'styles']);
