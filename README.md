<h1 align="center">Node.js Express MongoDB API</h1>
<p align="center">
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node.js logo" height="80">
  <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Express logo" height="80">
  <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="MongoDB logo" height="80">
</p>
<p align="center">
  Welcome to the Node.js Express MongoDB project! This project combines the power of Node.js, Express, and MongoDB to create a robust web application.
</p>
<p align="center">
  <a href="https://nodejs.org/en/">
    Get Node.js® ✨
  </a>
  ·
  <a href="https://expressjs.com/">
    Explore Express 🚀
  </a>
  ·
  <a href="https://www.mongodb.com/">
    Discover MongoDB 🍃
  </a>
  ·
  <a href="https://mongoosejs.com/">
    Learn Mongoose 🏗️
  </a>
  ·
  <a href="https://www.docker.com/">
    Dive into Docker 🐳
  </a>
</p>


<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/Built%20with-TypeScript-blue" alt="Built with TypeScript">
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/express-4.18.2-orange.svg" alt="Express version">
  </a>
  <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/mongoose-6.7.2-red.svg" alt="Mongoose version">
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node-18-brightgreen.svg" alt="Node.js version">
  </a>
</p>


## API description

This project is an API for order registration in a delivery service. It is divided into the following sections:

- Product Registration: Endpoints for adding, updating, and deleting products.
- Category Registration: Endpoints for managing product categories.
- Order Registration: Endpoints for creating and managing orders.

Feel free to explore the API endpoints and adapt them according to your requirements.

Please refer to the API documentation or code for further details on the available routes and request/response formats.

## Configuration

Follow the instructions below to set up and run the project.

### Prerequisites

- Node.js installed (version 12 or higher)
- Yarn package manager installed
- Docker installed (if you want to use MongoDB in a Docker container)

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Start MongoDB:
If you already have a running instance of MongoDB, you can skip this step.

Otherwise, you can use Docker to start a MongoDB instance in a container. Run the following command:
   ```bash
   docker run --name mongo -p 27017:27017 -d mongo
   ```

4.Start the server:
   ```bash
    yarn start
   ```
The server will start running on http://localhost:3000.


