'use strict';

var AWS = require('aws-sdk');
var ec2 = new AWS.EC2();

exports.handler = (event, context, callback) => {
  console.log('LogScheduledEvent');
  console.log('Received event:', JSON.stringify(event, null, 2));

  var userName = event.detail.userIdentity.userName;
  var instanceId = event.detail.responseElements.instancesSet.items[0].instanceId;

  var params = {
    Resources: [
      instanceId
    ],
    Tags: [
      {
        Key: "CreatedBy",
        Value: userName
      }
    ]
  };
  ec2.createTags(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
  });



  callback(null, 'Tagging Finished');
};
