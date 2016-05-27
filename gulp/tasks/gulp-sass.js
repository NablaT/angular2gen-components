var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var gulp_conf_1 = require('../gulp.conf');
var browsersync_1 = require('../browsersync');
var plugins = gulpLoadPlugins();
var bs = browsersync_1.getBrowserSync();
/**
 * This function compiles SASS_FILES files into the destinationDirectory directory.
 *
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or not.
 */
function sassFn(destinationDirectory, wantSourceMap) {
    if (wantSourceMap === void 0) { wantSourceMap = false; }
    return gulp.src(gulp_conf_1.SASS_FILES, { base: 'src' })
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
        .pipe(plugins.sass({ includePaths: [destinationDirectory] }))
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream());
}
/**
 * This function compiles SASS_FILES into the DEV_PATH directory.
 */
function sassDev() {
    return sassFn(gulp_conf_1.DEV_PATH, true);
}
/**
 * This function compiles SASS_FILES into the PROD_PATH directory.
 */
function sassProd() {
    return sassFn(gulp_conf_1.PROD_PATH);
}
///////////////////// Sass Tasks /////////////////////
gulp.task('sass:dev', sassDev);
gulp.task('sass:prod', sassProd);
//# sourceMappingURL=gulp-sass.js.map