console.log("=== ARMAZENANDO DADOS ===");

//  ESTRATÉGIA PARA SALVAR DADOS

// in-memory => Memória do programa (variáveis, arrays, objetos), volátil, não persiste após o encerramento do programa
// arquivo (JSON) => Persistência em disco, não volátil, pode ser lido e escrito, mas não é eficiente para grandes volumes de dados
// database => Persistência em disco, não volátil, pode ser lido e escrito, eficiente para grandes volumes de dados, mas requer configuração e manutenção


// ======================================================================


console.log("=== SALVANDO DADOS EM MEMÓRIA ===");

// Objetos em memória são uma forma simples e rápida de armazenar dados durante a execução de um programa. No entanto, eles não persistem após o encerramento do programa, ou seja, os dados são perdidos quando o programa é fechado.

// Exemplo de como armazenar dados em memória usando um objeto JavaScript:

// 1. Criar um objeto para armazenar os dados
const database = {
    products: [],
    users: [],
};

// 2. Criar uma função para inserir dados no objeto
function insert(table, data) {
    if (Array.isArray(database[table])) {
        database[table].push(data);
    } else {
        database[table] = [data];
    }
}

// 3. Criar uma função para selecionar dados do objeto
function select(table) {
    return database[table];
}

// 4. Testar as funções
insert("products", { name: "Produto 1", price: 10 });
insert("products", { name: "Produto 2", price: 20 });
insert("users", { name: "Usuário 1", email: "email@exemplo.com" });

console.log(select("products"));
console.log(select("users"));


// ======================================================================