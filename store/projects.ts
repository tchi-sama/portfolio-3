import { create } from 'zustand'

interface Project {
  image: string;
  name: string;
  subtitle: string;
  readme: string;
}

const projects: Project[] = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tchisama-1cc2f.appspot.com/o/projects%20images%2FFrame%201%20(5).png?alt=media&token=7e508471-ed5e-4e84-a252-98bd1dd54baa",
    name: "NodeCode",
    subtitle: "a gue coding workspace",
    readme: `# Node Code 
![Frame 2 (5)](https://github.com/tchisama/node-code/assets/115560200/baac1503-4a08-4702-b505-92dc6c57c7a4)

## Overview

Node Code is a versatile workspace that empowers users to write code using graphical nodes, connecting them to craft intricate logic effortlessly. This project is built using JavaScript, React, MongoDB, and Node.js, making it a powerful platform for developers seeking an intuitive and visual approach to coding.

## GitHub Repository

- GitHub Repository: [Node Code GitHub Repo](https://github.com/code-node-gui/node-code)

## Features

### User Profiles

Node Code allows users to create and manage their profiles, providing a personalized experience within the platform. User profiles store valuable information and preferences, making it easy to keep track of your projects and contributions.

### Project Management

With Node Code, users can effortlessly save and manage multiple projects, ensuring that all your work is organized and accessible in one place. This feature streamlines your development workflow and enhances productivity.

### Project Search

Searching for specific projects within Node Code is a breeze. Whether you're looking for your own creations or exploring others' work, the project search feature ensures that you can quickly find what you need.

### Custom Nodes Marketplace

Node Code introduces an innovative Custom Nodes Marketplace, where users can discover and share custom nodes created by the community. This feature expands the platform's capabilities by incorporating a wide range of user-contributed nodes, enhancing its overall functionality and versatility.


## Technologies Used


- **JavaScript**: The core language used for building the Node Code application.
- **React**: A popular JavaScript library for building user interfaces, providing a responsive and dynamic front-end experience.
- **MongoDB**: A NoSQL database used to store user profiles, projects, and other data.
- **Node.js**: A runtime environment that allows server-side execution of JavaScript, ensuring smooth server operations.

## Future Enhancements

The Node Code project is continuously evolving, with plans to implement several exciting features in the future:

- Enhanced Custom Nodes Marketplace: Expanding the marketplace with more user-generated nodes and improved search functionality.
- Collaboration Features: Enabling collaboration between users on shared projects and nodes.
- Code Export: Allowing users to export their projects into various programming languages.

Stay tuned for these exciting updates!

## Conclusion

Node Code is a groundbreaking platform that combines the power of JavaScript, React, MongoDB, and Node.js to provide users with an innovative and intuitive way to code. With user profiles, project management, project search, and the Custom Nodes Marketplace, it offers a comprehensive solution for developers looking to streamline their coding experience.

Explore the [Node Code GitHub Repo](https://github.com/code-node-gui/node-code) to learn more and get involved in this exciting project!




## Screenshots
![Screenshot (7)](https://github.com/tchisama/node-code/assets/115560200/bd2eb91d-0fd1-4672-b7a8-45fef1f4c362)
![Screenshot (8)](https://github.com/tchisama/node-code/assets/115560200/1265c5aa-5c26-45c7-9626-013da37d3cd4)
![Screenshot (12)](https://github.com/tchisama/node-code/assets/115560200/7743b929-d75c-4c5c-8272-ea39671fd8b3)`,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tchisama-1cc2f.appspot.com/o/projects%20images%2FFrame%203%20(2).png?alt=media&token=94d9fdc7-6076-460c-baf6-5aa13b292ad1",
    name: "30MinShop",
    subtitle: "a store builder",
    readme:``
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/tchisama-1cc2f.appspot.com/o/projects%20images%2FFrame%205%20(2).png?alt=media&token=3aa2bc49-adcf-4b72-b5e9-094b68498e1c",
    name: "Neuronest",
    subtitle: "Ai powered productivty app",
    readme:``
  },
];

const useStore = create((set) => ({
  projects,
}))

export default useStore