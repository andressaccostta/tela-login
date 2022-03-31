const btnVoltar = document.getElementById('btn-voltar');

btnVoltar.addEventListener('click', (evento) =>{
    evento.preventDefault();
    alert('Cadastro efetuado com sucesso!');
    voltarParaTelaInicial();
})

function voltarParaTelaInicial(){
    window.open('index.html', '_self');

}