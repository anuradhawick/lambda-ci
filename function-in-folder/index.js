const { generate } = require('unique-names-generator');

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            display: "Folder functions invoked" + generate(),
        }),
    };
    
    callback(null, response);
};