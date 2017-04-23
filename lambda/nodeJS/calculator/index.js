exports.handler = (event, context, callback) => {

    var operation = event.operation;
    var number1 = event.number1;
    var number2 = event.number2;
    let response;

    // Work on the status codes
    response = {
        statusCode: '500',
        body: JSON.stringify({ error: 'you messed up!' }),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    callback(null, response);



    if (operation === undefined) {

        return context.fail('Bad Request: No operation specified');

    }
    else {

        var result;

        if (operation == "add") {
            result = number1 + number2;
        }
        else if (operation == "subtract") {
            result = number1 - number2;
        }

        response = {
            result: result
        };


        return context.succeed(response);

    }
};