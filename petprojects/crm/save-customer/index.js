var AWS = require("aws-sdk");

exports.handler = (event, context, callback) => {

    var name = event.name;
    var age = event.age;
    var address = event.address;
    var phone = event.phone;
    let response;


    if (name === undefined || age === undefined || address === undefined || phone === undefined) {

        let response = {
            statusCode: '400',
            body: JSON.stringify({ error: 'Bad request' }),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        context.succeed(response);

    }
    else {

        var message = {name:name , age:age , address:address , phone:phone};
        var sns = new AWS.SNS();
        sns.publish({
            TopicArn: "arn:aws:sns:ap-southeast-1:936825406282:customerDetails",
            Subject: "Test SNS From Lambda",
            Message: JSON.stringify(message)
        }, function (err, data) {
            if (err) {
                console.error('error publishing to SNS');
                context.fail(err);
            } else {
                console.info('message published to SNS');
                context.done(null, data);
            }
        });

    }
};