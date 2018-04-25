var gulp = require('gulp');
    sass = require('gulp-sass');
    scss = require('gulp-scss');

gulp.task('sass', function(){
    return gulp.src('app/sass/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-shop', function(){
    return gulp.src('app/scss/shop-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-museum', function(){
    return gulp.src('app/scss/museum-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-caffe', function(){
    return gulp.src('app/scss/caffe-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-bus', function(){
    return gulp.src('app/scss/bus-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-parking', function(){
    return gulp.src('app/scss/parking-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 

gulp.task('scss-bank', function(){
    return gulp.src('app/scss/bank-sity.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
}); 




