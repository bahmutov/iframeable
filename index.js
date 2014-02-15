var request = require('request');
var check = require('check-types');

var url = process.argv[2];
if (!check.webUrl(url)) {
  console.error('Usage: node index.js <url>');
  process.exit(-1);
}

request(url, function (error, response) {
  var X_FRAME_OPTIONS = 'x-frame-options';
  if (!check.unemptyString(response.headers[X_FRAME_OPTIONS])) {
    console.error('Website', url, 'responds without header', X_FRAME_OPTIONS);
    console.error('This means the website can be iframed into malicious website');
    console.error('See more information about this attack at');
    process.exit(-1);
  }
});
