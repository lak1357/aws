rm calculator.zip
cd calculator
zip -r ../calculator.zip *
cd ..
aws lambda update-function-code --function-name calculator --zip-file fileb://calculator.zip
