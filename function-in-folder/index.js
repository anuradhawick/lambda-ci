const { generate } = require('unique-names-generator');

exports.handler = (event, context, callback) => {
    
    callback(null, "This is a sample function");
};