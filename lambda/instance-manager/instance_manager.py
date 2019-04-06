from __future__ import print_function
import json
import boto3

print('Loading Function')

def my_handler(event, context):
    ec2 = boto3.resource('ec2')
    filters = [{'Name':'tag:Environment', 'Values':['vpbank-aws-dev-env']}]
    ec2.instances.filter(Filters=filters).stop()
    return 'Dev instances shutted down'
