exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            display: "Some String",
        }),
    };
    
    callback(null, response);
};