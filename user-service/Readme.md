Login to azure aks: az aks get-credentials --resource-group kubernetes-e-commerce --name kubernetes-e-commerce-cluster


Command to create & push docker image

docker build -t user-service:latest ./user-service
docker tag user-service:latest ershubhamgupta1/user-service:latest
docker push ershubhamgupta1/user-service:latest


docker build -t order-service:latest ./order-service
docker tag order-service:latest ershubhamgupta1/order-service:latest
docker push ershubhamgupta1/order-service:latest


docker build -t product-service:latest ./product-service
docker tag product-service:latest ershubhamgupta1/product-service:latest
docker push ershubhamgupta1/product-service:latest




Create pod & services

kubectl apply -f user-service/deployment.yml
kubectl apply -f user-service/service.yml

kubectl apply -f product-service/deployment.yml
kubectl apply -f product-service/service.yml

kubectl apply -f order-service/deployment.yml
kubectl apply -f order-service/service.yml