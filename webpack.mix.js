const mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      extensions: ['.js', '.vue'],
      alias: {
         '@': __dirname + '/resources',
         '#': __dirname + '/resources/js',
         '!': __dirname + '/resources/images',
         '%': __dirname + '/resources/js/components',
         '~': __dirname + '/node_modules/',
         "sassy": __dirname + "/resources/sass/app.scss",
         "Elements": __dirname + '/resources/js/components/Elements',
         "mixins": __dirname + '/resources/js/mixins.js'
      }
   },
});



mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copyDirectory('resources/images', 'public/images')

// .sass('node_modules/sierra-library/lib/index.scss', 'public/css/sierra-library.css')
   // .browserSync("http://localhost:8000");

// console.clear();

