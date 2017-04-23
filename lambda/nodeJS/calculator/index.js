exports.handler = (event, context, callback) => {

    var operation = event.operation;
    var number1 = event.number1;
    var number2 = event.number2;
    let response;

    if (operation === undefined) {

        response = {
            error: 'No operation specified'
        };

    }
    else {

        var result;

        if (operation == "sum") {
            result = number1 + number2;
        }
        else if (operation == "subtract"){
            result = number1 - number2;
        }

        response = {
            result: result
        };
    }
    callback(null, response);
};