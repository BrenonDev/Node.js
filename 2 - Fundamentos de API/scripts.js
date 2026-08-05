console.log("=== O QUE É UMA API ===");

// API
// Application Programming Interface (Interface de Programação de Aplicação) oferece funcionalidades sem a necessidade de saber como foram implementados.

//                              Requisição              Requisição
//  [         Client         ]    ----->    [  API   ]    ----->    [  Server ]
//  [(Cliente do restaurante)]    <-----    [(Garçom)]    <-----    [(Cozinha)]
//                               Resposta                Resposta

// Rota

// Uma rota é um ponto de extremidade que associa uma URL específica a uma função que manipula requisições HTTP.

// Em outras palavras, uma rota é o caminho pelo qual o servidor responde a requisições HTTP.

//  |--------------------------------------------------|
//  |                                                  |
//  |         https://meuservidor.com.br/products      |
//  |          ^              ^               ^        |
//  |          |              |               |        |
//  |    protocolo | endereço do servidor | rota       |
//  |                                                  |
//  |--------------padrão de comunicação---------------|


// ======================================================================


console.log("=== API CLIENT ===");

// A API Client é o cliente que faz requisições para a API. Ele pode ser um navegador, um aplicativo móvel, ou qualquer outro software que precise interagir com a API.

// Um exemplo de API Client é o Insomnia, que é uma ferramenta que permite enviar requisições HTTP para APIs e visualizar as respostas. Ele é muito útil para testar e depurar APIs durante o desenvolvimento.

// Se executar um servidor localmente, você pode acessar a API Client através do endereço http://localhost:3333, onde 3333 é a porta em que o servidor está escutando.


// ======================================================================


console.log("=== MÉTODOS HTTP ===");

// RELEMBRANDO

//           Requisição
//             ----->   
//  [Client]            [API]
//             <-----
//            Resposta


// MÉTODOS HTTP

// Conjunto de métodos de requisição responsáveis por indicar a ação a ser executada.

// GET
// Leitura

// POST
// Criação

// PUT
// Atualizar

// DELETE
// Deletar

// PATCH
// Atualização Parcial


// EXEMPLOS DE MÉTODOS HTTP

// Mesma rota, porém ações diferentes.

// [  GET  ]
// [Leitura]  =>  https://meuservidor.com.br/products

// [ POST  ]
// [Criação]  =>  https://meuservidor.com.br/products


// HTTP RESPONSE STATUS CODES

// Os códigos de status de resposta HTTP indicam o status de uma solicitação. Por exemplo, se uma solicitação HTTP específica foi concluída com êxito.

// 1xx
// Respostas Informativas

// 2xx
// Sucesso

// 3xx
// Redirecionamento

// 4xx
// Erro do cliente

// 5xx
// Erro no servidor


// EXEMPLOS

// 1xx => Informativo
//     102 => Processando

// 2xx => Sucesso
//     200 => Requisição bem sucedida
//     201 => Criado - geralmente utilizado para o POST após uma inserção

// 3xx => Redirecionamento
//     301 => Movido permanentemente
//     302 => Movido

// 4xx => Erro do cliente
//     400 => Bad Request
//     401 => Não autorizado
//     404 => Não encontrado

// 5xx => Erro no servidor
//     500 => Erro interno


// ======================================================================


console.log("=== IDENTIFICANDO O MÉTODO HTTP ===");

// Para identificar o método HTTP de uma requisição, podemos utilizar a propriedade `method` do objeto `request` no Node.js. Essa propriedade nos permite saber qual ação o cliente está solicitando ao servidor, como GET, POST, PUT, DELETE, etc.

// Exemplo de como identificar o método HTTP em um servidor Node.js:

/*
import http from "node:http";

const server = http.createServer((request, response) => {
    const { method } = request;
    return response.end("Método: " + method)
});

server.listen(3333);
*/


// ======================================================================

console.log("=== UTILIZANDO STATUS CODE ===");

// Para utilizar o status code em uma resposta HTTP, podemos usar o método `writeHead` do objeto `response` no Node.js. Esse método nos permite definir o código de status da resposta, indicando se a requisição foi bem-sucedida, se houve algum erro, entre outros.

// Exemplo de como utilizar o status code em uma resposta HTTP em um servidor Node.js:

/*
import http from "node:http";

const server = http.createServer((request, response) => {
    const { method } = request;
    return response.writeHead(201).end("Criado com sucesso!")
});

server.listen(3333);
*/


// ======================================================================


console.log("=== URL DA REQUISIÇÃO ===");

// Para identificar a URL da requisição, podemos utilizar a propriedade `url` do objeto `request` no Node.js. Essa propriedade nos permite saber qual caminho o cliente está solicitando ao servidor, como /products, /users, etc.

// Exemplo de como identificar a URL da requisição em um servidor Node.js:

/*
import http from "node:http";

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
*/


// ======================================================================


console.log("=== COMO O NODE.JS LIDA COM REQUISIÇÕES HTTP ===");


// ENVIANDO DADOS

// Quando um cliente (como um navegador) envia uma requisição HTTP para um servidor, essa requisição pode incluir dados em um corpo (body).

/*
{
    "name": "Teclado",
    "price": 120.50
}
*/

// COMO O NODE.JS LIDA COM REQUISIÇÕES HTTP

// Quando uma requisição chega ao servidor, o corpo da requisição não é imediatamente disponível como uma propriedade simples. Isso ocorre porque o corpo pode ser grande e chega ao servidor como um fluxo (stream) de dados, dividido em pedaços (chunks).


// ======================================================================


console.log("=== RECUPERANDO DADOS DO BODY ===");

// Para recuperar os dados do corpo (body) de uma requisição HTTP no Node.js, podemos utilizar um loop `for await...of` para iterar sobre os chunks de dados que chegam ao servidor. Em seguida, podemos concatenar esses chunks em um buffer e convertê-los em uma string para processar os dados recebidos.

// Exemplo de como recuperar dados do body em um servidor Node.js:

/*
import http from "node:http"; 

const server = http.createServer( async (request, response) => {
    const { method, url } = request;

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos...")
    }

    if (method === "POST" && url === "/products") {
        const buffers = [];

        for await (const chunk of request) {
            buffers.push(chunk);
        }

        console.log(Buffer.concat(buffers).toString());
        

        return response.writeHead(201).end("Produto cadastrado!")
    }

    return response.writeHead(404).end("Rota não encontrada!")
});

server.listen(3333);
*/

// Assim, ao receber uma requisição POST para a rota /products, o servidor lê os chunks de dados do corpo da requisição, concatena-os em um buffer e os converte em uma string para exibir no console. Em seguida, ele envia uma resposta com o status code 201 (Criado) indicando que o produto foi cadastrado com sucesso.


// ======================================================================


console.log("=== CONCEITO DE MIDDLEWARE ===");

// Middleware é um conceito de software que se refere a uma camada intermediária entre diferentes componentes de um sistema. Ele atua como um "meio de campo" que processa, transforma ou gerencia dados e solicitações antes que eles cheguem ao destino final.

// Em termos de desenvolvimento web, um middleware é uma função que recebe a requisição (request) e a resposta (response) como parâmetros, podendo realizar operações como autenticação, validação de dados, registro de logs, entre outras, antes de passar o controle para a próxima função ou rota.


//  [Site] ----------> [Request] ----------> [Function]
//                         |                     ^
//                         |                     |
//                         v                     |
//              |    [Middleware] ----------------     |
//              |                                      |
//              |______________________________________|
//                             back-end


// ======================================================================


console.log("=== UTILIZANDO MIDDLEWARE ===");

// Para utilizar um middleware em um servidor Node.js, podemos criar uma função que recebe a requisição (request) e a resposta (response) como parâmetros. Essa função pode realizar operações específicas, como processar o corpo da requisição, antes de passar o controle para a próxima função ou rota.

// Exemplo de como utilizar um middleware em um servidor Node.js:

// ARQUIVO jsonBodyHandler.js:
/*
export async function jsonBodyHandler(request, response) {
    // Adicionar cada chunk
    const buffers = [];

    // Coleta os chunks de dados da requisição
    for await (const chunk of request) {
        buffers.push(chunk);
    };

    try {
        // Concatena os chunks e converte para string. Em seguinda, converte a string para JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
        request.body = null;
    };

    // Define o header de resposta como JSON
    response.setHeader("Content-Type", "application/json");
};
*/

// ARQUIVO server.js:
/*
import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"

const server = http.createServer( async (request, response) => {
    const { method, url } = request;

    await jsonBodyHandler(request, response);

    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos...");
    };

    if (method === "POST" && url === "/products") {
        return response.writeHead(201).end(JSON.stringify(request.body));
    };

    return response.writeHead(404).end("Rota não encontrada!");
});

server.listen(3333);
*/

// Assim, ao receber uma requisição POST para a rota /products, o middleware `jsonBodyHandler` processa o corpo da requisição, convertendo os dados em JSON e armazenando-os na propriedade `request.body`. Em seguida, a rota pode acessar esses dados e enviar uma resposta adequada.


// ======================================================================


console.log("=== SEPARANDO AS ROTAS ===");

// Para separar as rotas em um servidor Node.js, podemos criar um arquivo específico para definir as rotas e suas respectivas funções de controle. Em seguida, podemos importar essas rotas em um arquivo principal do servidor e utilizá-las para lidar com as requisições HTTP.

// Exemplo de como separar as rotas em um servidor Node.js:

// ARQUIVO routes.js:
/*
export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (request, response) => {
            return response.end("Lista de produtos...");
        },
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body));
        },
    },
];
*/

// ARQUIVO routeHandler.js:
/*
import { routes } from "../routes.js";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path === request.url;

    });
    
    if (route) {
        return route.controller(request, response);
    };

    return response.writeHead(404).end("Rota não encontrada!");
};
*/

// ARQUIVO server.js:
/*
import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer( async (request, response) => {
    await jsonBodyHandler(request, response);
    routeHandler(request, response);    
});

server.listen(3333);
*/

// Assim, ao receber uma requisição HTTP, o servidor utiliza o middleware `jsonBodyHandler` para processar o corpo da requisição e, em seguida, utiliza a função `routeHandler` para identificar a rota correspondente e executar a função de controle associada. Se a rota não for encontrada, o servidor retorna um status code 404 indicando que a rota não existe.


// ======================================================================


console.log("=== ROUTE PARAMS ===");

// Route Params são parâmetros que fazem parte da URL de uma requisição HTTP e são utilizados para identificar recursos específicos em uma API. Eles são definidos na rota utilizando dois pontos (:) seguidos do nome do parâmetro, e podem ser acessados no servidor através do objeto `request.params` no Node.js.

// Exemplo de como utilizar Route Params em um servidor Node.js:

// ARQUIVO routes.js:
/*
export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (request, response) => {
            return response.end("Lista de produtos...");
        },
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body));
        },
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: (request, response) => {            
            return response.end("Removido!");
        },
    },
];
*/

// ======================================================================


console.log("=== OBTENDO O PARÂMETRO ===");

// Para obter o valor de um Route Param em uma requisição HTTP no Node.js, podemos utilizar a propriedade `params` do objeto `request`. Essa propriedade é preenchida pelo middleware responsável por identificar a rota e extrair os parâmetros da URL.

// Exemplo de como obter o valor de um Route Param em um servidor Node.js:

// ARQUIVO routeHandler.js:
/*
import { routes } from "../routes.js";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url);

    });
    
    if (route) {
        const routeParams = request.url.match(route.path);
        const { ...params } = routeParams.groups;
        
        request.params = params;
        
        return route.controller(request, response);
    };

    return response.writeHead(404).end("Rota não encontrada!");
};
*/

// ARQUIVO routes.js:
/*
import { parseRoutePath } from "./utils/parseRoutePath.js"; 

export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: (request, response) => {
            return response.end("Lista de produtos...");
        },
    },
    {
        method: "POST",
        path: "/products",
        controller: (request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body));
        },
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: (request, response) => {            
            return response.end("Produto removido com ID: " + request.params.id);
        },
    },
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}));
*/

// Assim, ao receber uma requisição DELETE para a rota /products/:id, o middleware `routeHandler` identifica a rota correspondente, extrai o valor do parâmetro `id` da URL e o armazena na propriedade `request.params`. Em seguida, a função de controle associada à rota pode acessar esse valor e utilizá-lo para realizar a ação desejada, como remover um produto específico do banco de dados.


// ======================================================================


console.log("=== PARÂMETROS NOMEADOS ===");

// Os parâmetros nomeados são uma forma de capturar valores específicos de uma URL em uma rota, permitindo que você defina nomes para esses valores e os acesse de maneira mais legível e organizada. Os parâmetros na URL são definidos utilizando interrogação (?) e o nome do parâmetro, seguido do valor. Por exemplo, em uma URL como /products?category=computer, o parâmetro nomeado é "category" e seu valor é "computer". Para mais de um parâmetro, eles são separados por "&", como em /products?category=computer&price=5000.


// ======================================================================
