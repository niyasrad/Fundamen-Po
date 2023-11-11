### Kubernetes Configuration

Kubernetes configuration is a set of files that describe the state of the cluster. It is used to create, modify, and delete resources in the cluster. The configuration files are written in YAML format.

There are different types of configuration files that are used to describe different types of resources in the cluster. The following are the most common types of configuration files:

- Deployment
- Service
- Ingress
- ConfigMap
- Secret
- PersistentVolumeClaim

A Configuration file has the following structure:

```yaml
apiVersion: <API_VERSION>
kind: <KIND>
metadata:
  name: <NAME>
  labels:
    <KEY>: <VALUE>
spec:
    <KEY>: <VALUE>
```

Where, 

- `apiVersion` is the version of the Kubernetes API that is used to create the resource, usually in the format `group/version`, for example, `apps/v1` for deployment and `v1` for service
- `kind` is the type of resource that is being created in the cluster, for example, `Deployment` or `Service`
- `metadata` is the metadata of the resource, for example, the name and labels of the resource. The labels are used to identify the resource.
- `spec` is the specification of the resource, for example, the specification of the deployment or service that is being created in the cluster.
