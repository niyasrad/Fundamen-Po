## Getting Started with Development

The following are the steps to get started with React Development.

1. Wireframe the application
2. Create a new React Project
3. Create the folder structure
4. Create the components
5. Create the routes
7. Create the contexts
8. Create the hooks
9. Test the application out!

### Wireframe the application

Provide a lot of attention to how you're wireframing the application, and if it's according to the requirements. And note the following to make sure ease of development.

1. Font, Font Size
2. Color Scheme
3. Layout
4. Responsiveness (Mobile Layout)
5. Animations (Can be written on the side)


### Create a new React Project

Scaffolding your first Vite Project (React + TS)

```npm create vite@latest my-vue-app --template react-ts```

Once done, start working on the folder structure and the components. (Vite is faster to start with development)
Install the common dependencies for each React Project, such as

1. React Router -> ```npm install react-router-dom```
2. Axios -> ```npm install axios```
3. Material UI -> ```npm install @mui/material @emotion/react @emotion/styled```

### Create the folder structure

The folder structure is the most important part of the application, and it's important to make sure that it's scalable and easy to understand. The following is the folder structure that I use for my projects.

```
src
├── components
│   ├── component_folder
│   │   ├── component.tsx
│   │   ├── component.styles.ts
├── contexts
│   ├── context_folder
│   │   ├── context.tsx
├── hooks
│   ├── hook_folder
│   │   ├── hook.tsx
├── pages
│   ├── page_folder
│   │   ├── page.tsx
│   │   ├── page.styles.ts
├── services
│   ├── service_folder
│   │   ├── service.tsx
├── App.tsx
├── index.tsx
```

### Create the components

Components are the building blocks of the application, and it's important to make sure that they are reusable and scalable. The following are the steps to create a component.

1. Create a folder with the name of the component
2. Create a component.tsx file
3. Create a component.styles.ts file

### Create the routes

Routes are the way to navigate through the application, and it's important to make sure that they are scalable and easy to understand. The following are the steps to create a route.

1. Create a folder with the name of the route
2. Create a page.tsx file
3. Create a page.styles.ts file
4. Add the route to the App.tsx file

### Create the contexts

Contexts are the way to share data between components, and it's important to make sure that they are scalable and easy to understand. The following are the steps to create a context.

1. Create a folder with the name of the context
2. Create a context.tsx file

### Create the hooks

Hooks are the way to fetch data from the backend, and it's important to make sure that they are scalable and easy to understand. The following are the steps to create a hook.

1. Create a folder with the name of the hook
2. Create a hook.tsx file

### Test the application out!

Once you're done with the development, it's important to test the application out. The following are the steps to test the application out.

1. Run the application -> ```npm run dev```
2. Test the application out
3. Fix the bugs
4. Deploy the application
