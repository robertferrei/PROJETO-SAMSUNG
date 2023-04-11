let imagem = document.querySelector(".img-principal")
let circuloo = document.querySelector(".circulooo")

function trocaimagem(endereco){
    imagem.src = endereco
}
function trocacor(cor){
   circuloo.style.background=cor
}