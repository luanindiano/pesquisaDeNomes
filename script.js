// Funcao principal para realizar uma acao apos apertar o botao
function pesquisar(){
// captura a tag HTML corresponente aos IDs
let section = document.getElementById("resultados-pesquisa")
let campoPesquisa = document.getElementById("campo-pesquisa").value
// Verifica se o campo foi digitado
if (!campoPesquisa){
    section.innerHTML = "<p>Nenhuma referência foi encontrada. Por favor, digite algum sobrenome</p>"
    return
}
// Transforma o texto em minusculo
campoPesquisa = campoPesquisa.toLowerCase()
// Apenas declarando variavel fora do loop
let resultados = ""
let sobrenome = ""
// Loop para percorrer a base de dados, localizar a correspondencia
for (let dados of pessoasConhecidas){
    sobrenome = dados.sobrenome.toLowerCase()
    if(sobrenome.includes(campoPesquisa)){
        resultados += `
        <div class="conteudo">
            <div class="imagem">
                <img src="${dados.imagem}" alt="">
            </div>
            <h3>${dados.nome}</h3>
            <p><strong>Sobrenome Pesquisado:</strong> ${dados.sobrenome}</p>
            <p><strong>Super Poder:</strong> ${dados.superPoder}</p>
            <p>${dados.descricao}</p>
            <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento}</p>
        </div>`
    }   
}
// Caso o loop nao encontre ele retorna a mensagem
if (!resultados){
    resultados = "<p>Nenhuma referência foi encontrada. A referência ainda não existe</p>"
}
// Traz para o HTML e exibicao a correspondencia da base de dados
section.innerHTML = resultados
}





