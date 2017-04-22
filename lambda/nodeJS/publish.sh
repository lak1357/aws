rm calculator.zip
zip -r calculator.zip calculator
aws lambda update-function-code --function-name calculator --zip-file fileb://calculator.zip
