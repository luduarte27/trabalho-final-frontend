let idNome = document.getElementById("nome");
let idEmail = document.getElementById("email")                                
let idTelefone = document.getElementById("telefone")                               
let idMensagem = document.getElementById("floating-text-area")   
let idFeminino = document.getElementById("feminino")     
let idMasculino = document.getElementById("masculino")
let idOutro = document.getElementById("outro")                     


function limpar(){
    alert("Agradecemos seu feedback")
    idNome.value = "";
    idEmail.value = "";
    idTelefone.value = "";
    idMensagem.value = "";
    idFeminino.checked= false;
    idMasculino.checked = false;
    idOutro.checked = false;
}