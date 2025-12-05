 document.querySelectorAll('.card-container').forEach(cardContainer => {
            
            cardContainer.addEventListener('mouseover', () => {
                cardContainer.querySelector('.card').style.transform = 'rotateY(180deg)';
            });
            cardContainer.addEventListener('mouseleave', () => {
                cardContainer.querySelector('.card').style.transform = 'rotateY(0deg)';
            });
        });


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
        cardContainer.setAttribute('data-info', `Tipo: ${data.types.map(t => t.type.name).join(', ')} | Habilidade: ${data.abilities.map(a => a.ability.name).join(', ')} | ID: #${data.id.toString().padStart(3, '0')}`);
        cardContainer.innerHTML = `
            <div class="card">
                <div class="card-face card-front">
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                </div>
                <div class="card-face card-back">
                    <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                    <div class="card-back-info">
                        <div class="info-row">
                            <div class="info-label">
                                <span class="info-icon">🔥</span> Tipo:
                            </div>
                            <div class="info-value">${data.types.map(t => t.type.name).join(', ')}</div>
                        </div>
                        <div class="info-row">
                            <div class="info-label">
                                <span class="info-icon">⚡</span> Habilidade:
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
                            <div class="stat-name">💪 HP</div>
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
const pokemonList = ['Charmander', 'Arcanine', 'Flareon','Ponyta','Torkoal','Litleo', 'Darumaka','Lampent','Chimchar','Fennekin','Blacephalon','Fletchling'];
pokemonList.forEach(pokemon => {
    displayPokemon(pokemon, '.fogo');
});







