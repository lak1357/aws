# Creating VPC

## Craete Stack

<code>aws cloudformation create-stack --stack-name vpcstack --template-body file://VPC.yaml --profile lak88</code>

## Update Stack

<code>aws cloudformation update-stack --stack-name vpcstack --template-body file://VPC.yaml --profile lak88</code>


## Delete Stack

<code>aws cloudformation delete-stack --stack-name vpcstack --profile lak88</code>