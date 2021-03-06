'use strict'
var fs   = require('fs');
var glob = require('glob');

var mimeTypes = [
  [ new RegExp('\.js$'),    'text/javascript'],
  [ new RegExp('\.css$'),   'text/css'],
  [ new RegExp('\.html$'),  'text/html' ],
  [ new RegExp('\.png$'),   'image/png' ],
  [ new RegExp('\.eot$'),   'application/vnd.ms-fontobject eot' ],
  [ new RegExp('\.otf$'),   'font/opentype otf' ],
  [ new RegExp('\.ttf$'),   'font/truetype ttf' ],
  [ new RegExp('\.woff2?$'),'font/woff2' ],
  [ new RegExp('\.svg$'),   'image/svg+xml' ],
  [ new RegExp('\.map$'),   'application/octet-stream' ],
  [ new RegExp('\.jpe?g$'), 'image/jpeg'],
  [ new RegExp('\.ico$'),   'image/x-icon'],
  [ new RegExp('\.xml$'),   'text/xml'],
  [ new RegExp('\.txt$'),   'text/plain'],
];

class StaticRouter {

  constructor() {
    this.staticIncludes = [];
  }

  install(pathToStaticsRoot,cb) {
    pathToStaticsRoot = pathToStaticsRoot.replace(/\/$/,'');
    var _this = this;
    glob( pathToStaticsRoot + '/**/*.*',function(e,f) {
      if( !e ) {
        _this.staticIncludes = f;
      }
      cb(e,f);
    });
  }

  resolve( pathToStatic, res ) {
   if( this.staticIncludes.includes( pathToStatic ) ) {
      this.sendFile( res, pathToStatic );
      return true;
    }
    return false;
  }

  sendFile(res,fName) {
    var _this = this;
    fs.readFile(fName, function (err, data) {
      if (err) {
        console.log( 'Error ******', err );
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        var mime = _this.sniffMime(fName);
        //log( 'sending file: ' + fname + ' (' + mime + ')' );
        res.setHeader( 'Content-Type', mime );
        res.end(data);
      }
    });
  }

  sniffMime(fname) {
    for( var i = 0; i < mimeTypes.length; i++ ) {
      if( fname.match(mimeTypes[i][0]) ) {
        return mimeTypes[i][1];
      }
    }
  }

}

module.exports = StaticRouter;