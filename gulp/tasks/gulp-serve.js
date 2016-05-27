var gulp = require('gulp');
var gulp_conf_1 = require('../gulp.conf');
var historyApiFallback = require('connect-history-api-fallback');
var browsersync_1 = require('../browsersync');
var bs = browsersync_1.getBrowserSync();
/**
 * This function initiates the server.
 *
 * @param {String} destinationDirectory - The destination directory.
 */
function init(destinationDirectory) {
    bs.init({
        server: {
            baseDir: destinationDirectory + '/',
            routes: {
                "/node_modules": "node_modules"
            }
        },
        injectChanges: true,
        middleware: [historyApiFallback()]
    });
}
/**
 * This function initialises the server in development mode.
 */
function serverDev() {
    init(gulp_conf_1.DEV_PATH);
}
/**
 * This function initialises the server in production mode.
 */
function serverProd() {
    init(gulp_conf_1.PROD_PATH);
}
///////////////////// Copy Tasks /////////////////////
gulp.task('server:dev', serverDev);
gulp.task('server:prod', serverProd);
//# sourceMappingURL=gulp-serve.js.map