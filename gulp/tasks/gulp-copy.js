var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browsersync_1 = require('../browsersync');
var gulp_conf_1 = require('../gulp.conf');
var plugins = gulpLoadPlugins();
var bs = browsersync_1.getBrowserSync();
/**
 * @constant The array of excludes files.
 */
var EXCLUDED_FILES = [
    '!' + gulp_conf_1.TYPESCRIPT_FILES,
    '!' + gulp_conf_1.SASS_FILES
];
/**
 * This function copies ALL_FILES excepts:
 * <ul>
 *   <li>Typescript files</li>
 *   <li>Sass files</li>
 * </ul>
 * into the destinationDirectory directory.
 *
 * @param {string} files - Files to copy.
 * @param {string} destinationDirectory - The destination directory.
 */
function copyDist(files, destinationDirectory) {
    var FILES = [files].concat(EXCLUDED_FILES);
    return gulp.src(FILES, { base: 'src' })
        .pipe(plugins.changed(destinationDirectory))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(plugins.if(files !== ('src/' + gulp_conf_1.INDEX), bs.stream()));
}
/**
 * This function copies only the INDEX file.
 */
function copyIndex() {
    return copyDist('src/' + gulp_conf_1.INDEX, gulp_conf_1.DEV_PATH);
}
/**
 * This function copies ALL_FILES into the DEV_PATH directory.
 */
function copyDev() {
    return copyDist(gulp_conf_1.ALL_FILES, gulp_conf_1.DEV_PATH);
}
/**
 * This function copies ALL_FILES into the PROD_PATH directory.
 */
function copyProd() {
    return copyDist(gulp_conf_1.ALL_FILES, gulp_conf_1.PROD_PATH);
}
///////////////////// Copy Tasks /////////////////////
gulp.task('copy:dev', copyDev);
gulp.task('copy:prod', copyProd);
gulp.task('copy:index', copyIndex);
//# sourceMappingURL=gulp-copy.js.map