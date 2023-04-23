const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const fs = require('fs');

const assetsPath = './assets/'
const paths = {
    img: {
        src: assetsPath + 'img/**/*.{png,jpg,webp,jpeg,gif}',
        sharp: assetsPath + 'img/**/*.{png,jpg,webp,jpeg}',
        dest: assetsPath + 'img/',
        thumbnails: assetsPath + 'img/thumbnails/',
        featured: assetsPath + 'img/featured'
    },
}

// Use it gulp post -n '<title of the post>'
gulp.task('post', function(callback){
  let args = process.argv;
  let title = args[args.length -1];
  let filename = new Date().toLocaleDateString('en-CA') + '-' + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase().replace(/ /g, '-') + '.md';
  let content = '---\n' +
    'layout: post\n' +
    'title: ' + title + '\n' +
    'color: rgb(50,50,50)\n' +
    'tags: []\n' +
    '---';
  console.log('[' + new Date().toLocaleTimeString('en-CA', { hour12: false }) + '] File created: _posts/' + filename);
  fs.writeFile(__dirname + '/_posts/' + filename, content, callback);
});

gulp.task("img", function imging() {
  return gulp.src(paths.img.src)
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 85, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
    ]))
    .on('error', (err) => {
      console.log(err.toString());
    })
    .pipe(gulp.dest(paths.img.dest))
});


gulp.task("default", gulp.series(gulp.parallel('img')));
