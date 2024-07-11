const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_region,
    accessKeyId: process.env.AWS_accessKeyId,
    secretAccessKey: process.env.AWS_secretAccessKey
});

module.exports = AWS
