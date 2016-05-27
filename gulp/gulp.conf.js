/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 *
 * Created by grahbari on 01/04/2016.
 */
/**
 * @constant {string[]} Constant containing all path to shims dependencies we want in the project.
 */
exports.SHIMS_DEPENDENCIES = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
];
/**
 * @constant {string[]} Constant containing all path to libraries dependencies we want in the project.
 */
exports.LIBS_DEPENDENCIES = [
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/http.dev.js'
];
/**
 * @constant {string} The path of the development directory.
 */
exports.DEV_PATH = 'dist/dev';
/**
 * @constant {string} The path of the production directory.
 */
exports.PROD_PATH = 'dist/prod';
/**
 * @constant {string} Regular expression matching all files.
 */
exports.ALL_FILES = 'src/**/*';
/**
 * @constant {string} Regular expression matching all typescript files.
 */
exports.TYPESCRIPT_FILES = 'src/**/*.ts';
/**
 * @constant {string} Regular expression matching all sass files.
 */
exports.SASS_FILES = 'src/**/*.scss';
/**
 * @constant {string} Regular expression matching all spec files.
 */
exports.SPEC_FILES = 'src/**/*.spec.ts';
/**
 * @constant {string} The name of the index.
 */
exports.INDEX = 'index.html';
/**
 * @constant {string} The libs tag name.
 */
exports.LIBS = 'libs';
/**
 * @constant {string} The shimd tag name.
 */
exports.SHIMS = 'shims';
//# sourceMappingURL=gulp.conf.js.map