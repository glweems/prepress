const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: '/Users/gw/Sites/playground',
  plugins: [
    new BrowserSyncPlugin(
       // BrowserSync options
       {
         // browse to http://localhost:3000/ during development
         host: 'http://gw-mb.local',
         port: 80,
         // proxy the Webpack Dev Server endpoint
         // (which should be serving on http://localhost:3100/)
         // through BrowserSync
         proxy: "localhost:8080",
           
        },
        // plugin options
        {
        //   server: {
        //     baseDir: "src",
        //     index: "main.js"
        // },
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
       }
    )
 ],
};
