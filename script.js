

    const noticias = [
    {
        id: 1,
        titulo: "teste1",
        descricao: "Teste de noticia.",
       imagem: "https://img.odcdn.com.br/wp-content/uploads/2025/11/Pokmons-inteis-via-The-Pokmon-Company-reproduo-Olhar-Digital-1920x1080.jpg"
    },
    {
        id: 2,
        titulo: "teste2",
        descricao: "Teste de noticia.",
       imagem: "https://via.placeholder.com/300x200?text=Pokemon+Gen"
    },
    {
        id: 3,
        titulo: "teste3",
        descricao: "Teste de noticia.",
       imagem: "https://via.placeholder.com/300x200"
    }
   
];

function exibirNoticias() {
    const container = document.getElementById('noticias-container');
   
    noticias.forEach(noticia => {
        const noticiaHTML = `
            <div class="noticia-card">
                <img src="${noticia.imagem}" alt="${noticia.titulo}">
                <div class="noticia-content">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descricao}</p>                    
                </div>
            </div>
        `;
        container.innerHTML += noticiaHTML;
    });
}

document.addEventListener('DOMContentLoaded', exibirNoticias);