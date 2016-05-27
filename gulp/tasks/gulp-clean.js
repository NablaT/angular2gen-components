var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var gulp_conf_1 = require('../gulp.conf');
/**
 * This function deletes:
 * <ul>
 *   <li>Everything in the directory</li>
 *   <li>The directory itself</li>
 * </ul>
 *
 * @param {string} directory - The directory to delete.
 */
function clean(directory) {
    return del(['{' + directory + ',' + directory + '/**/*}']);
}
/**
 * This function cleans files into the DEV_PATH directory.
 */
function cleanDev() {
    return clean(gulp_conf_1.DEV_PATH);
}
/**
 * This function cleans files into the PROD_PATH directory.
 */
function cleanProd() {
    return clean(gulp_conf_1.PROD_PATH);
}
///////////////////// Clean Tasks /////////////////////
gulp.task('clean:dev', cleanDev);
gulp.task('clean:prod', cleanProd);
gulp.task('clean:all', function (callback) {
    runSequence(['clean:dev', 'clean:prod'], callback);
});
//# sourceMappingURL=gulp-clean.js.map