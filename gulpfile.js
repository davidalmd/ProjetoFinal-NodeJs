const gulp = require('gulp');
const { series, parallel } = require('gulp');

function publishCss(cb) {
    gulp.src('node_modules/admin-lte/plugins/fontawesome-free/css/*min.css*')
    .pipe(gulp.dest('public/css'));
    gulp.src('node_modules/admin-lte/plugins/icheck-bootstrap/*min.css*')
    .pipe(gulp.dest('public/css'));
    gulp.src('node_modules/admin-lte/dist/css/*min.css*')
    .pipe(gulp.dest('public/css'));
  cb();
}

function publishJs(cb) {
    gulp.src('node_modules/admin-lte/plugins/bootstrap/js/*min.js*')
    .pipe(gulp.dest('public/javascripts'));
    gulp.src('node_modules/admin-lte/plugins/jquery/*min.js*')
    .pipe(gulp.dest('public/javascripts'));
    gulp.src('node_modules/admin-lte/dist/js/*min.js*')
    .pipe(gulp.dest('public/javascripts'));
  cb();
}

exports.default = series(
  publishCss,
  publishJs
);
