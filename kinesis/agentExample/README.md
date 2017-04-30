##### 1. Install kinesis agent

```bash
sudo yum install –y aws-kinesis-agent
```


##### 2. Open and edit the configuration file (as superuser if using default file access permissions): /etc/aws-kinesis/agent.json

In this configuration file, specify the files ( "filePattern" ) from which the agent collects data, and the name of the delivery stream ( "deliveryStream" ) to which the agent sends data. Note that the file name is a pattern, and the agent recognizes file rotations. You can rotate files or create new files no more than once per second. The agent uses the file creation timestamp to determine which files to track and tail into your delivery stream; creating new files or rotating files more frequently than once per second does not allow the agent to differentiate properly between them.

```javascript
    { 
        "flows": [
            { 
                "filePattern": "/tmp/app.log*", 
                "deliveryStream": "yourdeliverystream"
            } 
        ] 
    } 
```


##### 3. Start the agent manually:

```bash
sudo service aws-kinesis-agent start
```


##### 4. (Optional) Configure the agent to start on system startup:

```bash
sudo chkconfig aws-kinesis-agent on
```



Whenever you change the configuration file, you must stop and start the agent, using the following commands:

```bash
sudo service aws-kinesis-agent stop
sudo service aws-kinesis-agent start
```

Alternatively, you could use the following command:

```bash
sudo service aws-kinesis-agent restart
```
