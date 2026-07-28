console.log("=== CONHECENDO O NODE.JS ===")

// O Node.js não é uma linguagem de programação. Javascript é a linguagem de programação que o Node é capaz de executar.

// O Node.js foi criado por Ryan Dahl em 2009 no decorrer de uma análise de como as páginas da web funcionavam.
// Se os Browsers conseguem compreender Javascript, como podemos utilizar esse mecanismo em uma plataforma que entenda Javascript para outros propósitos?

// O Node.js é baseado na V8 JavaScript Engine do Google Chrome, que é um interpretador JavaScript (o coração que processa todo o código Javascript para a máquina compreender fora do navegador).
// Desenvolvido pela Google e utilizado em seu navegador Google Chrome. O v8 foi desenvolvido em C++ com o objetivo de aumentar a performance de execução do Javascript.

// Javascript para diferentes propósitos:
// Node.js => Back end
// React => Front Web
// React Native => Mobile
// Electron => Desktop
// Etc.



// ======================================================================


console.log("=== O FUNCIONAMENTO DO NODE.JS ===")

// ANALOGIA...


// CAFETERIA

// Vamos utilizar como analogia uma cafeteria para compreender o funcionamento do Node.js.


// BARISTA

// Imagine que na nossa cafeteria, há apenas um barista que faz todos os cafés.
// Não importa quantos clientes entrem na cafeteria, apenas esse único barista estará lidando com todos os pedidos.
// Este barista trabalha de maneira muito eficiente, alternando rapidamente entre diferentes tarefas, mas nunca faz duas coisas exatamente ao mesmo tempo (Single Thread).


// SINGLE THREAD

// No Node.js, há uma única thread principal que executa o código JavaScript. Esse único thread é responsável por lidar com todas as requisições, executar funções e gerenciar operações de l/O (input e output).
// A eficiência vem do fato de que esse thread não fica bloqueado esperando que as operações de l/O terminem; em vez disso, ele delega essas operações e continua processando outras tarefas.


// OS PEDIDOS

// Imagine que o barista tem uma lista de tarefas para cada pedido. Cada vez que o barista pega um pedido, ele o coloca no topo da lista e começa a trabalhar nele. Quando ele termina uma tarefa, ele a risca da lista e pega a próxima tarefa do topo.
// A Call Stack é como essa lista de tarefas. Cada função que precisa ser executada é colocada na pilha (stack). O Node.js executa a função no topo da pilha e quando essa função termina, ele a remove da pilha e passa para a próxima.


// O ORGANIZADOR

// Além do barista, a cafeteria tem um organizador que monitora a lista de tarefas do barista.
// Quando o barista está ocupado, o organizador está atento às tarefas que estão terminando (como um bolo sendo assado) garantindo que o barista nunca fique parado e continue trabalhando eficientemente.
// O Event Loop é como esse organizador. Ele monitora a Call Stack e a fila de eventos (event queue). Se a Call Stack estiver vazia, ele pega a próxima tarefa da fila de eventos e a coloca na Call Stack para ser executada.


// ESTRUTURA COMPLETA

/*
[CLIENTE]
   |
   | 1. Envia uma requisição
   v
[EVENT LOOP]
   - Executa em uma única thread.
   - Não bloqueia enquanto aguarda operações de entrada/saída.
   |
   |-- Operação síncrona ----------------------> [CALL STACK]
   |                                              - Tarefas executadas em sequência.
   |                                              - A próxima tarefa espera a anterior terminar.
   |
   |-- Operação assíncrona --------------------> [EVENT QUEUE]
                                                  - A tarefa aguarda fora da pilha principal.
                                                  - Quando fica pronta, retorna para execução.
   |
   v
[OPERAÇÃO CONCLUÍDA]
   |
   | 2. O Event Loop coleta o resultado
   v
[RESPOSTA AO CLIENTE]

RESUMO:
O Event Loop coordena tarefas síncronas e assíncronas. As tarefas síncronas
passam pela Call Stack, enquanto as assíncronas aguardam na Event Queue até
estarem prontas. Assim, o sistema continua atendendo novas requisições sem
bloquear a execução principal.
*/


// ======================================================================


console.log("=== CRIANDO UM PROJETO NODE.JS ===")

// Para criar um projeto Node.js, você precisa ter o Node.js instalado em sua máquina. Você pode baixar o instalador do Node.js no site oficial: https://nodejs.org/.

// Após a instalação, você pode verificar se o Node.js foi instalado corretamente abrindo o terminal e digitando o comando `node -v`. Isso exibirá a versão do Node.js instalada em sua máquina.

// Para iniciar um novo projeto Node.js, siga os passos abaixo:

// 1. Crie uma nova pasta para o seu projeto e navegue até ela no terminal.
// 2. Execute o comando `npm init` para iniciar um novo projeto Node.js. Isso criará um arquivo `package.json` que contém informações sobre o seu projeto.
// 3. Siga as instruções no terminal para preencher as informações do projeto, como nome, versão, descrição, ponto de entrada (entry point), etc.
// 4. Após concluir o processo, você terá um arquivo `package.json` pronto para gerenciar as dependências do seu projeto.


// ======================================================================


console.log("=== EXECUTANDO UM ARQUIVO JAVASCRIPT ===")

// Para executar um arquivo JavaScript usando o Node.js, você pode usar o comando `node` seguido do nome do arquivo. Por exemplo, se você tiver um arquivo chamado `server.js`, você pode executá-lo com o seguinte comando no terminal:

// node server.js

// Isso fará com que o Node.js execute o código contido no arquivo `server.js` e exiba qualquer saída no terminal.


// ======================================================================


console.log("=== IMPORT COM COMMONJS E ES MODULES ===")

// O Node.js suporta dois sistemas de módulos: CommonJS e ES Modules. O CommonJS é o sistema de módulos tradicional do Node.js, enquanto os ES Modules são baseados na especificação ECMAScript e são mais recentes.

// Para importar módulos usando CommonJS, você usa a função `require()`. Por exemplo:

// const http = require("http");

// Para importar módulos usando ES Modules, você usa a palavra-chave `import`. Por exemplo:

// import http from "node:http";

// A escolha entre CommonJS e ES Modules depende do seu projeto e das suas preferências. O CommonJS é amplamente utilizado em projetos Node.js existentes, enquanto os ES Modules são recomendados para novos projetos devido à sua compatibilidade com a especificação ECMAScript.


// ======================================================================
