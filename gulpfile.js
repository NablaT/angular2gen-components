var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
requireDir('./gulp/tasks');
gulp.task('serve', function (callback) {
    return runSequence('build:dev', 'watch', callback);
});
gulp.task('serve:prod', function (callback) {
    return runSequence('build:prod', 'server:prod');
});
gulp.task('build:dev', function (callback) {
    return runSequence('clean:dev', ['copy:dev', 'ts:dev', 'sass:dev'], 'inject:dev', 'server:dev', callback);
});
gulp.task('build:prod', function (callback) {
    return runSequence('clean:prod', ['copy:prod', 'ts:prod', 'sass:prod'], 'inject:prod', 'useref:prod', callback);
});
//# sourceMappingURL=gulpfile.js.map