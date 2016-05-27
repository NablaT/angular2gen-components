var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var gulp_conf_1 = require('../gulp.conf');
var browsersync_1 = require('../browsersync');
var plugins = gulpLoadPlugins();
var _tsProject = plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});
var bs = browsersync_1.getBrowserSync();
var typings = ['manual-typings/manual-typings.d.ts', 'typings/browser.d.ts'];
/**
 * This function transpiles typescript files.
 *
 * @param {Array} filesArray - The files to be transpiled.
 * @param {String} destinationDirectory - The destination directory.
 * @param {boolean} wantSourceMap - A boolean to define if we want source map in the destinationDirectory directory or not.
 */
function compile(filesArray, destinationDirectory, wantSourceMap) {
    if (wantSourceMap === void 0) { wantSourceMap = false; }
    return gulp.src(filesArray, { base: 'src' })
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.init()))
        .pipe(plugins.typescript(_tsProject))
        .pipe(plugins.if(wantSourceMap, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(destinationDirectory))
        .pipe(bs.stream({ match: "**/*.js" }));
}
/**
 * This function transpiles TYPESCRIPT_FILES into the DEV_PATH directory.
 */
function tsDev() {
    return compile(typings.concat([gulp_conf_1.TYPESCRIPT_FILES]), gulp_conf_1.DEV_PATH, true);
}
/**
 * This function transpiles TYPESCRIPT_FILES into the PROD_PATH directory.
 */
function tsProd() {
    var FILES = [gulp_conf_1.TYPESCRIPT_FILES].concat(['!' + gulp_conf_1.SPEC_FILES]);
    return compile(typings.concat(FILES), gulp_conf_1.PROD_PATH);
}
///////////////////// Typescript Tasks /////////////////////
gulp.task('ts:dev', tsDev);
gulp.task('ts:prod', tsProd);
//# sourceMappingURL=gulp-typescript.js.map