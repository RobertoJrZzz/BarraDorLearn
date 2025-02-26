// Função para exibir os links de forma sequencial
function toggleLinks(headerId, linksId) {
    var header = document.getElementById(headerId);
    var links = document.getElementById(linksId);

    // Se os links estiverem ocultos, vamos mostrar um por um
    if (links.style.display === 'none' || links.style.display === '') {
        links.style.display = 'flex';  // Torna os links visíveis
        var listagem2 = links.getElementsByClassName('listagem2');
        
        // Inicializa todos os links como invisíveis
        for (let i = 0; i < listagem2.length; i++) {
            listagem2[i].style.display = 'none';
        }

        // Aqui vamos usar um loop para exibir os links um por vez
        for (let i = 0; i < listagem2.length; i++) {
            setTimeout(function() {
                listagem2[i].style.display = 'block';  // Exibe o link um por um
            }, i * 500);  // Delay de 500ms entre cada link
        }
    } else {
        // Se já estiverem visíveis, ocultamos os links
        links.style.display = 'none';
        var listagem2 = links.getElementsByClassName('listagem2');
        
        // Oculta todos os links quando eles são fechados
        for (let i = 0; i < listagem2.length; i++) {
            listagem2[i].style.display = 'none';
        }
    }
}

// Adiciona eventos de clique para "IMPRESSORAS" e "DESKTOP"
document.getElementById('impressoras-header').addEventListener('click', function() {
    toggleLinks('impressoras-header', 'impressoras-links');
});

document.getElementById('desktop-header').addEventListener('click', function() {
    toggleLinks('desktop-header', 'desktop-links');
});
