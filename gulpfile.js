const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
  return src('src/**.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function img () {
  return src('scr/img/*')
    .pipe(dest('dist/img'))
}

function js() {
  return src('src/scripts/**.js')
    .pipe(dest('dist'))
}

function scss() {
  return src('src/styles/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/styles/**/**.scss', series(scss)).on('change', sync.reload)
  watch('src/scripts/**.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, scss, html, img, js)
exports.serve = series(clear, scss, html, img, js, serve)
exports.clear = clear
