var paramrule = require('../index');

var logic = function(query, callback) {
    if (!query) return callback('no query ! auto query by default !');
    return callback('query is :' + query);
};

var wrapper = function() {
    var realparams = paramrule(['', '*'], arguments); // [1,2] [1,3,4,45]
    logic.apply(logic, realparams);
}

wrapper('any params will be ok', function(ret) {
    console.log(ret);
});

wrapper(function(ret) {
    console.log(ret);
});
