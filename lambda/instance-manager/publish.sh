rm instance-manager.zip
zip instance-manager.zip *.py
aws lambda update-function-code --function-name instance-manager --zip-file fileb://instance-manager.zip
