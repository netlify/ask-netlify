const gulp    = require("gulp");
const sass    = require("gulp-sass");


/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./www/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./www/site/_includes/css'));
});


/*
  Watch folders for changes
*/
gulp.task("watch", function() {
  gulp.watch('./www/scss/**/*.scss', gulp.parallel('css'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'css'
));
