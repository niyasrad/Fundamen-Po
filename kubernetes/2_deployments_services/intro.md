### Kubernetes Deployment Pods and Services 

Let's take in a k8 configuration file with both a deployment and a service. 

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app:latest
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-service
  labels:
    app: my-app
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30000
```

The above configuration file creates a deployment and a service in the cluster. The deployment creates 3 pods and the service exposes port 80 from the pods to the host machine on port 30000.

To apply this configuration file to the cluster, run the following command:

```bash
kubectl apply -f <path-to-file>
```

To view the pods that are created for the deployment, run the following command:

```bash
kubectl get pods
```

To view the service that is created for the deployment, run the following command:

```bash
kubectl get services
```

To view the logs of a pod, run the following command:

```bash
kubectl logs <pod-name>
```