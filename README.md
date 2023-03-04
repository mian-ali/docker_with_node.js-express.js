## Express.js server run on Docker
This is a simple Node.js and Express application that can be run using Docker.

### Installation
Before running the application, you must have Docker installed on your system. If you don't have it already, you can download it [here.](https://www.docker.com/get-started/)

Clone this repository to your local machine:

```bash
https://github.com/mian-ali/docker_with_node.js-express.js.git
```

Navigate into the cloned repository:

```bash
cd docker_with_node.js-express.js
```
Build the Docker image using the provided Dockerfile:

```bash
docker build -t express-docker-image .
```

This will create a Docker image with the name express-docker-image . you can also check this command image

```bash
docker image ls
```

# Usage 
To start the application, run the following command:

```bash
docker run --rm -d -p 5000:5000 --name express-docker-container express-docker-image
```
This will start the application inside a Docker container and map port 5000 on your local machine to port 5000 inside the container.

You can now access the application by visiting http://localhost:5000 in your web browser.

# Configuration
By default, the application listens on port 3000. If you want to change the port, you can modify the PORT environment variable in the Dockerfile or pass it as a command line argument when starting the container:

```bash
docker run -p 8080:8080 -e PORT=8080 your_project
```
# License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mian-ali/docker_with_node.js-express.js/blob/master/LICENSE) file for details.
