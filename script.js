// Event listener para o formulário de busca
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  searchPrefix();
});

// Event listener para o botão de busca por prefixo
const prefixButton = document.getElementById('prefix-button');
prefixButton.addEventListener('click', e => {
  e.preventDefault();
  searchPrefix();
});

// Event listener para o botão de busca por sufixo
const suffixButton = document.getElementById('suffix-button');
suffixButton.addEventListener('click', e => {
  e.preventDefault();
  searchSuffix();
});

// Função para buscar palavras por prefixo
async function searchPrefix() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const apiUrl = `https://api.dicionario-aberto.net/prefix/${input}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    displaySearchResults(data);
  } catch (error) {
    console.error('Erro ao buscar palavras por prefixo:', error);
  }
}

// Função para buscar palavras por sufixo
async function searchSuffix() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const apiUrl = `https://api.dicionario-aberto.net/suffix/${input}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    displaySearchResults(data);
  } catch (error) {
    console.error('Erro ao buscar palavras por sufixo:', error);
  }
}

// Função para exibir os resultados da busca
function displaySearchResults(data) {
  const searchResult = document.getElementById('search-result');
  searchResult.innerHTML = '';

  data.forEach(entry => {
    const word = entry.word;
    const definition = entry.preview;

    const wordElement = document.createElement('h3');
    wordElement.textContent = word;

    const definitionElement = document.createElement('p');
    definitionElement.innerHTML = definition;

    searchResult.appendChild(wordElement);
    searchResult.appendChild(definitionElement);
  });
}
