async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}

async function displayPokemon(pokemonName, containerSelector) {
    const data = await fetchPokemonData(pokemonName);
    if (data) {
        const container = document.querySelector(containerSelector);
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        
        const pokemonNameCapitalized = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        
        cardContainer.innerHTML = `
            <div class="card">
                <div class="card-face card-front">
                    <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
                    <div class="pokemon-name">${pokemonNameCapitalized}</div>
                </div>
                <div class="card-face card-back">
                    <h3>${pokemonNameCapitalized}</h3>
                    <div class="card-back-info">
                        <div class="info-row">
                            <div class="info-label">
                                <span class="info-icon">🔥</span> Tipo:
                            </div>
                            <div class="info-value">${data.types.map(t => t.type.name).join(', ')}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">
                                <span class="info-icon">🌟</span> Habilidade: 
                            </div>
                            <div class="info-value">${data.abilities.map(a => a.ability.name).join(', ')}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">
                                <span class="info-icon">#️⃣</span> ID:
                            </div>
                            <div class="info-value">#${data.id.toString().padStart(3, '0')}</div>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-name">❤️ HP</div>
                            <div class="bar-container">
                                <div class="bar-fill" style="width: ${(data.stats[0].base_stat / 255) * 100}%"></div>
                            </div>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-name">⚔️ ATK</div>
                            <div class="bar-container">
                                <div class="bar-fill" style="width: ${(data.stats[1].base_stat / 255) * 100}%"></div>
                            </div>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-name">🛡️ DEF</div>
                            <div class="bar-container">
                                <div class="bar-fill" style="width: ${(data.stats[2].base_stat / 255) * 100}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(cardContainer);
    }
}

const pokemonList =  ['Wartortle', 'Phione', 'Piplup', 'Keldeo-Resolute', 'Dewgong', 'Tirtouga', 'Cloyster', 'Ducklett', 'Palkia', 'Primarina', 'Poliwag', 'Suicune', 'Araquanid', 'Corsola', 'Greninja'];
pokemonList.forEach(pokemon => {
    displayPokemon(pokemon, '.agua');
});
document.getElementById('menu-toggle').onclick = function() {
    document.body.classList.toggle('nav-open');
};