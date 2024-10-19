// Elementos de texto e botões
const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const rioButton = document.getElementById('rio-button');
const storyImage = document.getElementById('story-image');

// Função para avançar a história com imagem
function updateStory(text, options, imageUrl = '') {
    storyText.textContent = text;
    storyContainer.innerHTML = '';
    storyContainer.appendChild(storyText);

    // Exibe ou oculta a imagem, dependendo do conteúdo
    if (imageUrl) {
        storyImage.src = imageUrl;
        storyImage.style.display = 'block';
        storyContainer.appendChild(storyImage);
    } else {
        storyImage.style.display = 'none';
    }

    // Adiciona os botões
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('story-button');
        button.addEventListener('click', option.action);
        storyContainer.appendChild(button);
    });
}

// Primeira escolha: Rio de Janeiro
rioButton.addEventListener('click', function() {
    updateStory("Você começa sua jornada no Rio de Janeiro, subindo o Pico da Tijuca ao amanhecer para encontrar a primeira pista.", [
        { text: "Procurar a pista no topo do pico", action: function() {
            updateStory("No topo do Pico da Tijuca, você encontra uma antiga inscrição apontando que a próxima pista está localizada no Amazonas.", [
                { text: "Seguir para o Amazonas", action: function() {
                    updateStory("No Amazonas, a busca pela cidade perdida se intensifica. Você se depara com um rio bifurcado.", [
                        { text: "Seguir pelo rio à esquerda", action: function() {
                            updateStory("Retornando e escolhendo o rio à esquerda, você finalmente encontra a cachoeira escondida e as inscrições que levam à cidade perdida.", [
                                { text: "Explorar a cidade perdida", action: function() {
                                    updateStory("Parabéns! Você encontrou a cidade perdida e completou sua aventura.", [], 'images/cidade-perdida.jpg');
                                }}
                            ], 'images/cachoeira.jpg');
                        }},
                        { text: "Seguir pelo rio à direita", action: function() {
                            updateStory("O rio à direita termina em uma área pantanosa. Apesar de belas vistas, não há sinais da cidade perdida aqui.", [
                                { text: "Retornar e tentar o outro rio", action: function() {
                                    updateStory("Retornando e escolhendo o rio à esquerda, você finalmente encontra a cachoeira escondida e as inscrições que levam à cidade perdida.", [
                                        { text: "Explorar a cidade perdida", action: function() {
                                            updateStory("Parabéns! Você encontrou a cidade perdida e completou sua aventura.", [], 'images/cidade-perdida.jpg');
                                        }}
                                    ], 'images/cachoeira.jpg');
                                }}
                            ], 'images/pantano.jpg');
                        }}
                    ], 'images/amazonas-rio.jpg');
                }}
            ], 'images/pico-tijuca.jpg');
        }},
        { text: "Desistir e voltar para casa", action: function() {
            updateStory("Você decidiu desistir da aventura e voltar para casa. Fim de jogo.", [], 'images/desistir.jpg');
        }}
    ], 'images/rio-de-janeiro.jpg');
});
