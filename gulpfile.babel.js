import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import useref from 'gulp-useref'
import gulpif from 'gulp-if'
import uglify from 'gulp-uglify'
import uglifycss from 'gulp-uglifycss'
import imagemin from 'gulp-imagemin'



const paths = {

  dev: {
    html: 'app/*.html',
    css: 'app/style/style.sass',
    script: 'app/script/es6/script.js',
    img: 'app/img/*'
  },

  prod: {
    html: 'dist/',
    css: 'dist/style/',
    script: 'dist/script/',
    img: 'dist/img/'
  }

}


gulp.task('browsersync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});


gulp.task('sass', () => {
  gulp.src(paths.dev.css)
  .pipe(plumber())
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest('app/style'))
  .pipe(browserSync.reload({stream: true}))
});


gulp.task('babel', () => {
  gulp.src(paths.dev.script)
  .pipe(babel())
  .pipe(gulp.dest('app/script/es5'))
  .pipe(browserSync.reload({stream: true}))
})


gulp.task('minify', () => {
  gulp.src(paths.dev.html)
  .pipe(useref())
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', uglifycss()))
  .pipe(gulp.dest(paths.prod.html))
})


gulp.task('imagemin', () => {
  gulp.src(paths.dev.img)
  .pipe(imagemin([
    imagemin.jpegtran({
      progressive: true
    })
  ]))
  .pipe(gulp.dest(paths.prod.img))
})



gulp.task('serve', ['sass', 'browsersync', 'babel'], () => {
  gulp.watch(paths.dev.css, ['sass']);
  gulp.watch(paths.dev.script, ['babel']);
  gulp.watch(paths.dev.html,   browserSync.reload)

})

gulp.task('default', ['minify', 'imagemin'])
