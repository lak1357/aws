This is the AWS ECS space

1) ECR login

aws ecr get-login

2) Create ECR repo

aws ecr create-repository --repository-name my-project-repo

3) Build docker image

docker build -t php-simple-app .

4) Tag docker image with ECR 

docker tag php-simple-app [AWS ACC NO].dkr.ecr.ap-southeast-1.amazonaws.com/my-project-repo:v1

5) Push image to ECR

docker push [AWS ACC NO].dkr.ecr.ap-southeast-1.amazonaws.com/my-project-repo:v1


