const express = require('express');
require('dotenv').config()


const AWS = require('./aws');

const app = express();
const lambda = new AWS.Lambda();

app.get('/invoke-lambda', async (req, res) => {
    const params = {
        FunctionName: process.env.LAMDA_FunctionName,
        InvocationType: process.env.LAMDA_InvocationType,
        LogType: process.env.LAMDA_LogType,
        Payload: JSON.stringify({
            key1: 'value1',
            key2: 'value2'
        })
    };

    try {
        const data = await lambda.invoke(params).promise();
        const result = JSON.parse(data.Payload);
        res.json(result);
    } catch (err) {
        console.error('Error invoking Lambda function:', err);
        res.status(500).json({ error: 'Error invoking Lambda function' });
    }
});


app.listen(3000, () => {
    console.log('server is running in port 80')
})
