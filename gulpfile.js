const {src,dest} = require('gulp');
const ts = require('gulp-typescript');
const { watch } = require('gulp');
const {parallel} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


function streamTS() {
    return src('src/**/*.ts')
    .pipe(ts()).js
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('public'));
}

function streamHtml(){
    return src('src/*.html')
    .pipe(dest('public'));
}

exports.default = parallel(streamHtml,streamTS);
exports.server = streamHtml;