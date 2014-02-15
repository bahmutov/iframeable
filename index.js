#!/usr/bin/env node

var request = require('request');
var check = require('check-types');
var chalk = require('chalk');

var url = process.argv[2];
if (!check.webUrl(url)) {
  console.error('Usage: node index.js <url>');
  process.exit(-1);
}

var X_FRAME_OPTIONS = 'x-frame-options';
var MORE_INFO_URL = 'https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet';

request(url, function (error, response) {
  if (error) {
    console.error('Could not check', chalk.underline(url));
    throw error;
  }

  var value = response.headers[X_FRAME_OPTIONS];
  if (!check.unemptyString(value)) {
    console.error(chalk.red.bold.underline(url),
      chalk.red.bold('responds without header', X_FRAME_OPTIONS));
    console.error('This means the website can be iframed into malicious website');
    console.error('See more information about this attack at', chalk.underline(MORE_INFO_URL));
    process.exit(-1);
  }

  if (/DENY/i.test(value)) {
    console.log(chalk.green.underline(url), chalk.green('denies being iframed, safe'));
    process.exit(0);
  }
  if (/SAMEORIGIN/i.test(value)) {
    console.log(chalk.green.underline(url), chalk.green('can only be iframed from same origin, safe'));
    process.exit(0);
  }
  if (/ALLOW-FROM/i.test(value)) {
    console.log(chalk.yellow.underline(url),
      chalk.yellow('allows iframing from some external websites. Might be unsafe.'));
    console.error('See more information about this attack at', chalk.underline(MORE_INFO_URL));
    process.exit(0);
  }
});
