// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();
        displayNews(data);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// Fonction pour afficher les articles
function displayNews(news) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    if (!news || news.length === 0) {
        container.innerHTML = '<p>Aucun article disponible.</p>';
        return;
    }

    news.forEach(article => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="/news.html?id=${article.id}" class="btn btn-primary">Lire plus</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fonction pour afficher les erreurs
function showError(message) {
    const container = document.getElementById('news-container');
    container.innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
}

// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);
