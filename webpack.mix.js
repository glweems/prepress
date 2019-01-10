const mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      extensions: ['.js', '.vue'],
      alias: {
         '@': __dirname + '/resources',
         '#': __dirname + '/resources/js',
         '!': __dirname + '/resources/images',
         '%': __dirname + '/resources/js/components',
         '~': __dirname + './node_modules/',
         "sassy": __dirname + "/resources/sass/app.scss",
         "Basic": __dirname + '/resources/js/components/Basic'
      }
   },
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .copyDirectory('resources/images', 'public/images');

console.clear();

