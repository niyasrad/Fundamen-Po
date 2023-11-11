### Deployment Configuration

A deployment configuration file has the following structure:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: <NAME>
  labels:
    <KEY>: <VALUE>
spec:
  replicas: <REPLICAS>
  selector:
    matchLabels:
      <KEY>: <VALUE>
  template:
    metadata:
      labels:
        <KEY>: <VALUE>
    spec:
      containers:
        - name: <NAME>
          image: <IMAGE>
          ports:
            - containerPort: <PORT>
```

Where,

- `replicas` is the number of pods that should be created for the deployment
- `selector` is the selector that is used to identify the pods that are created for the deployment
- `template` is the template that is used to create the pods for the deployment
- `containers` is the list of containers that should be created for the pods
- `containerPort` is the port that should be exposed by the container