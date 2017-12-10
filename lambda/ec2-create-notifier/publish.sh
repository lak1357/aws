cd ..
rm ec2-create-notifier.zip
cd ec2-create-notifier
zip -r ../ec2-create-notifier.zip * -x publish.sh SAM.yaml sample.json