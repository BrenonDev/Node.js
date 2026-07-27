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