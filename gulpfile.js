var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");

gulp.task('uglify', function() {
	 gulp.src('src/jquery.expireAt.js')
    .pipe(uglify())
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/'))
});
