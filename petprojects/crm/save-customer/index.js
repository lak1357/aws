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


        let response = {
            statusCode: '200',
            body: JSON.stringify({ message: 'done' }),
            headers: {
                'Content-Type': 'application/json',
            }
        };


        return context.succeed(response);

    }
};