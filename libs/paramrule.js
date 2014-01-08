var _ = require('underscore');

// wash params by rules
exports.args = function(rules, arguments) {
    
    if (!_.isArray(rules)) return false;
    if (_.isEmpty(arguments)) return [];
    if (parseInt(_.last(_.keys(arguments))) + 1 >= rules.length) return _.values(arguments);

    var args = arguments;
    var params = [];
    var requires = [];

    _(rules.length).times(function(n) {
        params.push(undefined);
    });

    rules.forEach(function(item, index) {
        if (item.indexOf('*') > -1) requires.push(index);
    });

    params.forEach(function(item, index) {
        var required = requires.indexOf(index);
        if (required > -1) params[index] = args[required];
    });

    return params;

};

// shorthand of exports.args
exports.parse = function(args, rules, callback) {
    var params = exports.args(rules, args);
    return callback.apply(callback, params);
};
