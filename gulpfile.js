// Load plugins
const browsersync = require("browser-sync").create();
const gulp = require("gulp");
var sass = require('gulp-sass');

//style paths
var sassFiles = './electron-app/public/sass/*.scss',
    cssDest = './electron-app/public/stylesheets/';

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function(cb) {
    // jQuery & bootstap JS
    gulp.src([
            './node_modules/jquery/dist/*',
            '!./node_modules/jquery/dist/core.js',
            './node_modules/bootstrap/dist/js/*',
        ])
        .pipe(gulp.dest('./electron-app/public/javascripts'));


    cb();

});
gulp.task('styles', function(cb) {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
    cb();
});

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Watch files
function watchFiles() {
    gulp.watch("./**/*.html", browserSyncReload);
    //
}

function watchSass() {
    gulp.watch(sassFiles, gulp.series('styles'));
}

gulp.task("default", gulp.parallel('vendor'));

// dev task
gulp.task("dev", gulp.parallel(watchSass, watchFiles, browserSync));