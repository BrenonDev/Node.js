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
