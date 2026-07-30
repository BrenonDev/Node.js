// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

import http from "node:http"; // módulo ES

const server = http.createServer((request, response) => {
    const { method, url } = request;

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos...")
    }

    if (method === "POST" && url === "/products") {
        return response.writeHead(201).end("Produto cadastrado!")
    }

    return response.writeHead(404).end("Rota não encontrada!")
});

server.listen(3333);