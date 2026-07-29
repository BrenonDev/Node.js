// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

import http from "node:http"; // módulo ES

const server = http.createServer((request, response) => {
    return response.end("Minha primeira API")
});

server.listen(3333);