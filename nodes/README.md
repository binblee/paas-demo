# nodes

### nodes-mono

Create a single container pod for nodes-mono
```
kubectl create -f nodes-mono.json
kubectl create -f nodes-mono-service.json
```

Access nodes-mono
```
curl http://<nodes-mono-svc-ip>:8080
```

Scale out nodes-mono to 2 pods
```
kubectl scale --replicas=2 rc nodes-mono-rc
```

### nodes-backend

Create pod for nodes-backend
```
kubectl create -f nodes-backend.json
kubectl create -f nodes-backend-service.json
```

### nodes-frontend

Create pod for nodes-frontend
```
kubectl create -f nodes-frontend.json
kubectl create -f nodes-frontend-service.json
```

Waiting for nodes-frontent-rc to get external IP address
```
watch -n 2 kubectl get svc
```

Access nodes-frontent, frontend get input from backend
```
curl http://<nodes-frontend-svc-ip>:8080/
```

### rolling update to nodes-backend

```
kubectl rolling-update nodes-backend-rc nodes-backend-rc-v2 --image=binblee/nodes-backend:latest
```

