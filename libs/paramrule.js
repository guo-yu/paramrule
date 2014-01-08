var _ = require('underscore');

module.exports = function(rules, arguments) {
    
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
