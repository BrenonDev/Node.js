// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

import http from "node:http"; // módulo ES

const server = http.createServer((request, response) => {
    return response.end("Reposta")
});

server.listen(3333);