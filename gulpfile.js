// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var sass = require('node-sass');

// Task
gulp.task('default', function() {
	// listen for changes
	livereload.listen();

	gulp.watch('./scss/**/*.scss', ['sass']);


	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'start.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('start.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
})

gulp.task('sass', function () {
    //gulp.src('./sass/**/*.scss')
    //.pipe(sass.sync().on('error', sass.logError))
    //.pipe(gulp.dest('./public/css'));

	sass.render({file:'./scss/main.scss',outFile:'main.css'},
	function(err, res) {
		console.log(err);
		console.log(res);
	})

	gulp.src('start.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
});
