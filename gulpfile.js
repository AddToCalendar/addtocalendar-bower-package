const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const gulp = require('gulp');
const pump = require('pump');
const del = require('del');


gulp.task('clean', function(cb) {
    return del([
        'atc.min.js'
    ]);
});

gulp.task('compress', function(cb) {
    pump([
            gulp.src('addtocalendar.js'),
            uglify(),
            rename('atc.min.js'),
            gulp.dest('.')
        ],
        cb
    );
});

gulp.task('default', ['clean', 'compress']);
