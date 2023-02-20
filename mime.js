const mimeTypes = {
    '.html' : "text/html",
    '.css'  : "text/css",
    '.js'   : "text/javascript",
    '.png'  : "image/png",
    '.jpg'  : "image/jpg"
  };

module.exports = function (extname) {
  return mimeTypes[extname] || 'text/plain';
}