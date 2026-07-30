// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

import http from "node:http"; // módulo ES

const server = http.createServer((request, response) => {
    const { method } = request;
    return response.end("Método: " + method)
});

server.listen(3333);