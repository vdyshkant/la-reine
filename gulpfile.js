// mini faq
// for Production version:    ==>  compress/minify css/js files
// terminal> 'NODE_ENV=production gulp'
// Development version is used as default


var gulp         = require('gulp'),
    pug          = require('gulp-pug'),
    browserify   = require('gulp-browserify'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    clean        = require('gulp-clean'),

    livereload   = require('gulp-livereload'), // added 2016-07-11
    sourcemaps   = require('gulp-sourcemaps'),

    connect      = require('gulp-connect'),
    jshint       = require('gulp-jshint'),
    gulpif       = require('gulp-if'),
    gutil        = require('gulp-util'), // added 2016-10-04
    copy         = require('gulp-copy'), // added 2016-10-04
    replace      = require('gulp-replace'), // added 2016-10-04
    filter       = require('gulp-filter'), // added 2016-12-19
    concat       = require('gulp-concat'); // added 2016-12-19

var env = process.env.NODE_ENV || 'development'; // if we do not specify explicitly a value, then it defaults to the development
var outputDir = 'builds/development';


///////////////////////////
/////  ERROR handler  /////
///////////////////////////
function errorLog(err){
  console.log(err.message);
  this.emit('end');
}


gulp.task('pug', function() {
  return gulp.src([
    // '!src/templates/partials/*.pug', // ignore this file
    // '!src/templates/conf/*.pug', // ignore this file
    // 'src/templates/**/*.pug'   // ignore all files
    'src/templates/pages/index.pug',
    'src/templates/pages/rus.pug',
    'src/templates/pages/ukr.pug',
    'src/templates/pages/i.pug'
  ])     // выборка files from glob
        .pipe(pug( { pretty: true } ))                             // push this^^^ query to pug pluguin
        .on('error', errorLog)
        .pipe(gulp.dest(outputDir))            // take every compiled html file and pipe it to an output folder
        .pipe(connect.reload());
});


gulp.task('clib', function() {

  const jsFilter = filter('src/js/**/*.js', {restore: true});
  // const lessFilter = filter('**/*.less', {restore: true});

  return gulp.src([
    '!src/js/clib/*.js', // ignore this file
    'src/js/modules/common.js', // e.g. /path/to/mymodule/mymodule.js',
    'src/js/modules/logger.js' // e.g. /path/to/mymodule/mymodule/*.js'
  ])     // выборка files from glob

      .pipe(jsFilter)
      .pipe(concat('main.js'))
      .pipe(jsFilter.restore)
      .pipe(gulp.dest('src/js/'));

});


gulp.task('js', function() {
    // return gulp.src('src/js/modules/*.js')     // here we specify main js file as an entry point
    return gulp.src([
      '!src/js/clib/*.js', // ignore this file
      'src/js/modules/common.js', // e.g. /path/to/mymodule/mymodule.js',
      'src/js/modules/logger.js', // e.g. /path/to/mymodule/mymodule/*.js'
      'src/js/modules/p08/01-slider-general.js', // e.g. /path/to/mymodule/mymodule/*.js'
      'src/js/modules/p08/slider-clock-timers.js', // e.g. /path/to/mymodule/mymodule/*.js'
      'src/js/modules/p10/paginator.js' // e.g. /path/to/mymodule/mymodule/*.js'
    ])     // выборка files from glob
        .pipe(concat('main.js'))
        .pipe(gulp.dest(outputDir + '/js'))


        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        // .pipe(jshint.reporter('fail'))
        .pipe(browserify({ debug: env === 'development' })) // we pass the entry point on to the browserify plug. //2// include the source maps only if we're i a dev environment
        .pipe(gulpif(env === 'production', uglify())) // if our environment is production, only then uglify it
        // debug: true --- this way browserify include sourcemaps with the compiled js
        // now we just have to specify an output folder
        .pipe(gulpif(env === 'production', rename({suffix:'.min'})))
        .on('error', errorLog)
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
});




gulp.task('sass', function() {
    var config = {};

    if (env === 'development') {
        config.sourceComments = 'map';
    }

    if (env === 'production') {
        config.outputStyle = 'compressed';
    }


    return gulp.src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(config).on('error', sass.logError))
        // .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: [
            'Firefox 3.5',
            'Opera 9',
            'Safari 3.1',
            'Chrome 5',
            '>1%',
            'ie 8'
          ],
          remove: false
        }))
        .pipe(gulpif(env === 'production', rename({suffix:'.min'})))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});



gulp.task('copyJsLib', function() {
  return gulp.src([
    'src/js/clib/**/*'
  ])
    .pipe(gulp.dest(outputDir + '/js'))
    .on('end', function(){ gutil.log('--== DONE ==--'); });
});

// just disabled
// gulp.task('copyFonts', function() {
//   return gulp.src('src/fonts/**/*.{ttf,woff,woff2,eot,svg}')
//     .pipe(gulp.dest(outputDir + '/fonts'));
// });


// Чистим директорию назначения и делаем ребилд, чтобы удаленные из проекта файлы не остались
// Энто костыль.
// gulp.task('clean', function() {
//   return gulp.src(['src/js/main.js'], {read: false})
//     .pipe(clean());
// });



gulp.task('removeImages', function() {
    return gulp.src(outputDir + '/img99/**/*.*')
      .pipe(clean( {read: false} ));
});


gulp.task('copyImages', ['removeImages'], function() {
  return gulp.src('src/img/**/*.{png,svg,jpg,ico}')
    .pipe(gulp.dest(outputDir + '/img99'));
});
// first will remove old imgs, then copy new ones: https://github.com/gulpjs/gulp/issues/67


// just disabled
// gulp.task('copyImages', function() {
//   return gulp.src('src/img/**/*.{png,svg,jpg,ico}')
//     .pipe(gulp.dest(outputDir + '/img'));
// });



gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.pug', ['pug']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['copyJsLib']);
        // gulp.watch('src/js/**/*.js', ['copy']);
    // gulp.watch('src/img/**/*.{png,svg,jpg,ico}', ['copyImages']);
    // gulp.watch('bower.json', ['clib']);
});




gulp.task('connect', function() {
    connect.server({
        root: [outputDir],
        port: 8812,
        livereload: true
    });
});



gulp.task('default', ['connect', 'js', 'pug', 'sass', 'copyJsLib', 'watch']);
// we can run the task we just created by typing 'gulp pug' into our terminal









// for rebuild:
// https://github.com/jonkemp/gulp-boilerplate/blob/master/gulpfile.js
