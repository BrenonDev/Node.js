// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

import http from "node:http"; // módulo ES

const server = http.createServer((request, response) => {
    const { method } = request;
    return response.writeHead(201).end("Criado com sucesso!")
});

server.listen(3333);