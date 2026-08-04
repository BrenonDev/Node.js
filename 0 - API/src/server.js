// console.log("Hello world!");

// const http = require("http"); // módulo CommonJS

// módulo ES
import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer( async (request, response) => {
    await jsonBodyHandler(request, response);
    routeHandler(request, response);    
});

server.listen(3333);