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

### nodes-backend

### nodes-frontend
