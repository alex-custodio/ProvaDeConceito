fetch('artists.json')
.then(response => response.json())
.then(data => {
    const tagImage = document.getElementById('userImage')
    const listaMusicas = document.getElementById('songs');
    const tagNome = document.getElementById('userName');
    let exibindoKurt = true; // variável para controlar a exibição
    function exibirArtistas(){
        listaMusicas.innerHTML = ''
        const itensExibicao = exibindoKurt ? data.kurt : data.freddie;
        tagNome.textContent = itensExibicao.nome;
        tagImage.src = itensExibicao.imagem;
        itensExibicao.musicas.forEach(elemento => {
            const li = document.createElement('li');
            li.textContent = elemento;
            listaMusicas.appendChild(li);
        });
    }
    function alternarExibicao() {
        exibindoKurt = !exibindoKurt;
        tagNome.textContent = '';
        exibirArtistas();
    }
    exibirArtistas()


    const botao = document.getElementById('alternar-exibicao');
    botao.addEventListener('click', alternarExibicao);
});