## paramrule ![npm](https://badge.fury.io/js/paramrule.png)

a simple parameters rules manager

### Installation

```
$ npm install paramrule
```

### Example
````javascript
var paramrule = require('paramrule');

// do something, no matter if `query` provides or not.
var doSomething = function(query, callback) {
    if (!query) return callback('no query ! auto query by default !');
    return callback('query is :' + query);
};

var wrapper = function() {
    // the very first param is optional
    // yet the last one are required
    var washedParams = paramrule.args(['', '*'], arguments);
    // is it COOL? NOOOOT!
    doSomething.apply(doSomething, washedParams);
}

// a shorthands of paramrule.args
var wrapper = function() {
    paramrule.parse(arguments, ['','*'], doSomething);
}

// let's have a try
wrapper('any params will be ok', function(ret) {
    console.log(ret);
});

// another try without first param (query)
wrapper(function(ret) {
    console.log(ret);
});

````

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.2