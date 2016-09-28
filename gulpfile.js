var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

var filePaths = {
	dev: {
		css: './dev/css/styles.css',
		js: './dev/js/script.js'
	},
	prod: {
		css: './client_assets/css/',
		js: './client_assets/js/'
	}
};

gulp.task('minifyCSS', function () {
	return gulp.src(filePaths.dev.css + '**.*')
		.pipe(concat('styles.css'))
		.pipe(cleanCSS({debug: true}, function(details) {
			console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(filePaths.prod.css));
});

gulp.task('js', function() {
	return gulp.src(filePaths.dev.js)
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(filePaths.prod.js));
});

gulp.task('default', ['minifyCSS', 'js']);