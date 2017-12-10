1) Run publish.sh file <br>
2) Upload ec2-create-notifier.zip to S3 <br>
3) Change CodeUri to new S3 location in SAM.yaml <br>
4) Run CloudFormation stack <br>
5) Attach role to Lambda function (EC2 access and CloudWatch Logs access) - *Need to fix this* <br>
6) Create a EC2 instance and it will tag "CreatedBy" with username <br>