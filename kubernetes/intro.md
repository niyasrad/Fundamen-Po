A Demo of the Kubernetes course can be found across my repository 

- [BuddyGet](https://github.com/niyasrad/BuddyGet) - Finance Application built on React + Express + MongoDB + Kubernetes

## What can Kubernetes do for you?
With modern web services, users expect applications to be available 24/7, and developers expect to deploy new versions of those applications several times a day. Containerization helps package software to serve these goals, enabling applications to be released and updated without downtime. Kubernetes helps you make sure those containerized applications run where and when you want, and helps them find the resources and tools they need to work. Kubernetes is a production-ready, open source platform designed with Google's accumulated experience in container orchestration, combined with best-of-breed ideas from the community.

There are 6 things we'll be exploring throughout, and they are-

- Creating a Kubernetes cluster
- Deploying an app
- Exploring your app
- Exposing your app publicly
- Scaling your app to handle increased traffic
- Updating your app to use a new image version

We will be using minikube throughout the walkthrough, to install it

-> ```brew install minikube``` (Homebrew)

### Common terms used in Kubernetes

- **Pod** - A pod is a group of one or more containers.
- **Service** - A service is a group of pods that work together.
- **Deployment** - A deployment is a group of pods that are created and managed by Kubernetes.
- **Node** - A node is a worker machine in Kubernetes.
- **Cluster** - A cluster is a group of nodes that are used to run containerized applications.

### Setting up MiniKube

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a Virtual Machine (VM) on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

To install minikube, run the following command:

```bash
brew install minikube
```

To start minikube, run the following command:

```bash
minikube start
```

We'll be using a lot of kubectl commands. To install kubectl, run the following command:

```bash
brew install kubectl
```

To check the status of the cluster, run the following command:

```bash
kubectl cluster-info
```

To view the nodes in the cluster, run the following command:

```bash
kubectl get nodes
```

