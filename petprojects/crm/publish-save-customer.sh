rm save-customer.zip
cd save-customer
zip -r ../save-customer.zip *
cd ..
aws lambda update-function-code --function-name save-customer --zip-file fileb://save-customer.zip
