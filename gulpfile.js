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
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'css'
));
