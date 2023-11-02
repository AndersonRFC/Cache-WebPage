// LISTA DE ELEMENTOS
var input = document.getElementById("input-entry");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    input.value = "";
  }
});

//-----------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {

    console.log("Página carregada e DOM pronto.");
});


//----------------------------------------------------
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
