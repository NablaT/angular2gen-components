var browserSync = require('browser-sync');
var bs = null;
function getBrowserSync() {
    if (bs === null) {
        return bs = browserSync.create('Server');
    }
    return browserSync.get('Server');
}
exports.getBrowserSync = getBrowserSync;
//# sourceMappingURL=browsersync.js.map