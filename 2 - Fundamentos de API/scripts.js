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
