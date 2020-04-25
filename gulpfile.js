var gulp = require('gulp');
var inject = require('gulp-inject');

var wiredep = require('wiredep').stream;

 
gulp.task('index', function () {
  var target = gulp.src('./index.html');
 
  var sources = gulp.src(['./crop/**/*.js','./UIController.js','./*.css'], {read: false});
 
  return target.pipe(wiredep({
		directory:'node_modules', 
		src : './index.html'
	}))
	.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./'));
});