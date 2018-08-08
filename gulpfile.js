var gulp = require('gulp');
var loader = require('gulp-load-plugins')();

gulp.task('server', function() {
    return gulp.src('./app/')
        .pipe(loader.webserver({
            port: 7070,
            open: true,
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (req.url === '/favicon.ico') {
                    return;
                }
                var reg = /^\/api/;
                if (reg.test(pathname)) {
                    res.end(JSON.stringify({
                        code: 1,
                        msg: 'success'
                    }))
                } else {
                    res.end(require('fs').readFileSync(require('path').join(__dirname, 'app', pathname)))
                }
            }
        }))
})