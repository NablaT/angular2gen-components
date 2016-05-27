var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var gulp_conf_1 = require('../gulp.conf');
var browsersync_1 = require('../browsersync');
var plugins = gulpLoadPlugins();
var bs = browsersync_1.getBrowserSync();
/**
 * This function injects :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 *
 * @param {string} destinationDirectory - The destination directory.
 */
function inject(destinationDirectory) {
    return gulp.src(gulp_conf_1.INDEX, { cwd: destinationDirectory })
        .pipe(plugins.inject(gulp.src(gulp_conf_1.SHIMS_DEPENDENCIES, { read: false }), { name: gulp_conf_1.SHIMS }))
        .pipe(plugins.inject(gulp.src(gulp_conf_1.LIBS_DEPENDENCIES, { read: false }), { name: gulp_conf_1.LIBS }))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream());
}
/**
 * This function injects (for development mode) :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 */
function injectDev() {
    return inject(gulp_conf_1.DEV_PATH);
}
/**
 * This function injects (for production mode) :
 * <ul>
 *     <li>shims</li>
 *     <li>libs</li>
 * </ul>
 * in the INDEX file.
 */
function injectProd() {
    return inject(gulp_conf_1.PROD_PATH);
}
///////////////////// Inject Tasks /////////////////////
gulp.task('inject:dev', injectDev);
gulp.task('inject:prod', injectProd);
//# sourceMappingURL=gulp-inject.js.map