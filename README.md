# iframeable

Checks is website is safe against iframing and clickjacking attack

[![NPM info][nodei.co]](https://npmjs.org/package/iframeable)

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][iframeable-devdependencies-image] ][iframeable-devdependencies-url]

    npm install -g iframeable
    iframeable <url>

    // example
    iframeable http://github.com
    http://github.com denies being iframed, safe

This utility checks if website responds with x-frame-options.
Values **DENY** and **SAMEORIGIN** are safe, **ALLOW-FROM** generates a warning.
If this header is not set at all, an error message is displayed and utility
exits with code -1.

Think of *iframeable* as `curl -I <url>` but with explanation about a specific option.

More information about clickjacking attack can be found at
[owasp.org](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet).
In a nutshell: the attacker creates a website with domain name similar to a good website,
for example fake *http://bank-mobile.com* to lure *http://bank.com*`s customers.
The attacker then iframes the entire *http://bank.com* website (100% width, 100% height),
but overlays his own input fields, stealing usernames and passwords, for example.

Typical safe move: unless you have very good reason, do not allow iframing your
website. All major browsers respect *x-frame-options* header. Just set it to **DENY**
and the attacker will not have an easy way in.

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/iframeable/issues) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci-image]: https://travis-ci.org/bahmutov/iframeable.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/iframeable
[nodei.co]: https://nodei.co/npm/iframeable.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/iframeable.png
[dependencies-url]: https://david-dm.org/bahmutov/iframeable
[iframeable-devdependencies-image]: https://david-dm.org/bahmutov/iframeable/dev-status.png
[iframeable-devdependencies-url]: https://david-dm.org/bahmutov/iframeable#info=devDependencies
