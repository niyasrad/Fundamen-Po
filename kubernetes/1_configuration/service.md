### Service Configuration

A service configuration file has the following structure:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: <NAME>
  labels:
    <KEY>: <VALUE>
spec:
  type: <TYPE>
  selector:
    <KEY>: <VALUE>
  ports:
    - port: <PORT>
      targetPort: <TARGET_PORT>
```

Where,

- `type` is the type of service that is being created in the cluster, for example, `ClusterIP` or `NodePort`
- `selector` is the selector that is used to identify the pods that are created for the service
- `ports` is the list of ports that should be exposed by the service
