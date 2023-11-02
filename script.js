// ELEMENTOS
var input = document.getElementById("input-entry");
var button = document.getElementById("button-entry-save");
var ul = document.getElementById("ul-text-list");

// VARIÁVEIS

var listaDeItens = [];

input.addEventListener("keydown", function (event) {
  var novoLi = document.createElement("li");

  if (event.key === "Enter") {
    listaDeItens.push({ item: input.value });
    novoLi.textContent = input.value;

    ul.appendChild(novoLi);

    input.value = "";
  }
});

button.addEventListener("click", function (event) {
  localStorage.setItem("listaDeItens", JSON.stringify(listaDeItens));
});

//-----------------------------------------------------

function minhaFuncao() {
  var listaArmazenada = localStorage.getItem("listaDeItens");

  if (listaArmazenada) {

    listaDeItens = JSON.parse(listaArmazenada);

    console.log(listaDeItens);

    listaDeItens.forEach((item) => {
        var novoLi = document.createElement("li");

        novoLi.textContent = item.item;

        ul.appendChild(novoLi);
    });
  }
}

if (document.readyState === "complete") {
  minhaFuncao();
} else {
  window.addEventListener("load", minhaFuncao);
}

//----------------------------------------------------

/*
document.addEventListener("DOMContentLoaded", function() {

    console.log("Página carregada e DOM pronto.");
});
*/

/*
// Defina uma lista de objetos
var listaDeObjetos = [
    { nome: "John", idade: 30 },
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 35 }
];

// Converta a lista em formato JSON e armazene no Local Storage
localStorage.setItem("listaDeObjetos", JSON.stringify(listaDeObjetos));
*/

/*
// Recupere a string JSON do Local Storage
var listaArmazenada = localStorage.getItem("listaDeObjetos");

// Verifique se a lista existe no Local Storage
if (listaArmazenada) {
    // Converta a string JSON de volta para um objeto JavaScript
    var listaDeObjetos = JSON.parse(listaArmazenada);

    // Agora você pode trabalhar com a lista de objetos
    console.log(listaDeObjetos);
} else {
    console.log("Nenhuma lista encontrada no Local Storage.");
}
*/

// Define um valor no Local Storage com a chave e o valor
// localStorage.setItem("chave", "Este é um valor em cache.");

// Recupera o valor do Local Storage usando a chave
/*var valor = localStorage.getItem("chave");

if (valor) {
    console.log("Valor do Local Storage: " + valor);
} else {
    console.log("Nenhum valor encontrado no Local Storage.");
}*/

/* 
// Remove um item do Local Storage com base na chave
localStorage.removeItem("chave");
*/

// var objeto = { nome: "John", idade: 30 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

/*
var objetoDoLocalStorage = localStorage.getItem("objeto");
if (objetoDoLocalStorage) {
    var objeto = JSON.parse(objetoDoLocalStorage);
    console.log("Nome: " + objeto.nome + ", Idade: " + objeto.idade);
}
*/


/*
//Com o fetch vai dar pra usar o cache de banco de dados kkk oqqqq

fetch('/seu-endpoint-de-api', {
  method: 'POST',  // ou 'GET', dependendo do seu caso
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }), // Se você está enviando dados em formato JSON
})
  .then(response => response.json())
  .then(data => {
    // Tratar a resposta do servidor (se houver)
  })
  .catch(error => {
    // Lidar com erros, se houver
  });

*/