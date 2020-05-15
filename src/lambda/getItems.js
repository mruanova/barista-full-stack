var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });
exports.handler = function (event, context, callback) {
    let params = {
        TableName: 'items',
        Limit: 100
    };
    docClient.scan(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            const response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'x-api-key,Authorization'
                },
                body: JSON.stringify(data),
            };
            callback(null, response);
        }
    });
};
