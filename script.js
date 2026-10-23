const inputEmail =document.querySelector("#email");
const inputSenha =document.querySelector("#senha");
const inputBotao =document.querySelector("#btn-enviar")

inputBotao.addEventListener("click", login)  //() =>{})
function login(event){
    event.preventDefault();
    console.log(inputEmail.value)
    console.log(inputSenha.value)
}
// O ID é sempre buscado com #
// Uma classe é sempre buscada por um  .

console.log(inputEmail)
console.log(inputSenha)
console.log(inputBotao)