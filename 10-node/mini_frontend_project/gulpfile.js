var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('winning', function (){ // call the it by typing in gulp winning in CLI
  console.log('we are winning');
});

gulp.task('server', function (){
 connect.server(); // default port for gulp is 8080
})

gulp.task('sass', function() {
  gulp.src('./style.scss') // input
    .pipe(sass()) // process
    .pipe(autoprefixer())
    .pipe(gulp.dest('css')) //output
    .pipe(connect.reload());
});


gulp.task('watch', function() {
  gulp.watch('./*.scss', ['sass']);
});
// default task

gulp.task('default', ['server', 'watch']);
