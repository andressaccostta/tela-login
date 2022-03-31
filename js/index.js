const btnCadastrar = document.getElementById('btn-cadastrar');

btnCadastrar.addEventListener('click', (evento) =>{
    evento.preventDefault();
    alert('Você sera redirecionado para a Tela de Cadastro');
    abrirTelaDeCadastro();
})


function abrirTelaDeCadastro(){
    window.open('cadastro.html', '_self');
}