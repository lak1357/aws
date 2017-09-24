This is the AWS ECS space


1) ECR login

aws ecr get-login

2) Create ECR repo

aws ecr create-repository --repository-name mytest-project-repo

3) Build docker image

docker build -t php-simple-app .

4) Tag docker image with ECR 

docker tag php-simple-app [AWS ACC NO].dkr.ecr.ap-southeast-1.amazonaws.com/mytest-project-repo:v1

5) Push image to ECR

docker push [AWS ACC NO].dkr.ecr.ap-southeast-1.amazonaws.com/mytest-project-repo:v1

### Create ECS cluster ####

ecs-cli configure --region ap-southeast-1 --cluster myCluster
ecs-cli up --keypair myrnd2 --capability-iam --size 3 --instance-type t2.micro

### Deploy Service ###

ecs-cli compose service up









