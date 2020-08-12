const gulp = require('gulp');
const postcss = require('gulp-postcss')
const sass = require('gulp-sass');
const { dest } = require('gulp');

gulp.task("sass", function() {
    return gulp.src("src/styles.scss")
    .pipe(postcss([
        require("tailwindcss"),
        require("autoprefixer")
    ]))
    .pipe(sass({outputStyle: "compact"}))
    .pipe(gulp.dest("dist"))
})

gulp.task("sass:watch", function() {
    return gulp.watch('./src/*.scss', gulp.series(['sass']))
})

