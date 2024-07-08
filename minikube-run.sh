#!/bin/bash

eval $(minikube docker-env)
minikube start
docker compose build
kompose convert -f docker-compose.yml -o deploy
kubectl apply -f ./deploy
minikube dashboard
