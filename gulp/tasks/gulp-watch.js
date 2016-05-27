var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var gulp_conf_1 = require('../gulp.conf');
var plugins = gulpLoadPlugins();
var bs = browserSync.get('Server');
/**
 * This function watches the files in the filesArray and executes the tasks in the tasksArray.
 *
 * @param {Array} filesArray - The files to watch.
 * @param {Array} tasksArray - The tasks to execute.
 */
function watch(filesArray, tasksArray) {
    gulp.watch(filesArray, tasksArray)
        .on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
}
/**
 * This function watches typescript files.
 */
function scriptsWatch() {
    var scripts = [gulp_conf_1.TYPESCRIPT_FILES];
    var tasks = ['ts:dev'];
    watch(scripts, tasks);
}
/**
 * This function watches sass files.
 */
function sassWatch() {
    var sass = [gulp_conf_1.SASS_FILES];
    var tasks = ['sass:dev'];
    watch(sass, tasks);
}
/**
 * This function watches only the INDEX file because we need to inject dependencies after copying.
 */
function indexWatch() {
    gulp.watch('src/' + gulp_conf_1.INDEX, function (event) {
        console.log('File ' + event.path + ' was ' + event.type);
        runSequence('copy:index', 'inject:dev');
    });
}
/**
 * This function watches all files except
 * <ul>
 *     <li>TYPESCRIPT_FILES</li>
 *     <li>SASS_FILES</li>
 *     <li>INDEX</li>
 * </ul>
 */
function othersWatch() {
    var EXCLUDED_FILES = [
        '!' + gulp_conf_1.TYPESCRIPT_FILES,
        '!' + gulp_conf_1.SASS_FILES,
        '!src/' + gulp_conf_1.INDEX
    ];
    var files = [gulp_conf_1.ALL_FILES].concat(EXCLUDED_FILES);
    var tasks = ['copy:dev'];
    watch(files, tasks);
}
///////////////////// Watch Tasks /////////////////////
gulp.task('watch:scripts', scriptsWatch);
gulp.task('watch:sass', sassWatch);
gulp.task('watch:index', indexWatch);
gulp.task('watch:others', othersWatch);
gulp.task('watch', function (callback) {
    return runSequence(['watch:scripts', 'watch:sass', 'watch:index', 'watch:others'], callback);
});
//# sourceMappingURL=gulp-watch.js.map