async function fetchNewsDetails(newsId) {
    try {
        const response = await fetch(`/api/news/${newsId}`);
        const article = await response.json();
        displayNewsDetails(article);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les détails de l\'article.');
    }
}

function displayNewsDetails(article) {
    const container = document.getElementById('news-details');
    if (!article) {
        showError('Aucun article sélectionné.');
        return;
    }

    container.innerHTML = `
        <div class="card">
            <img src="${article.image}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
            </div>
        </div>
    `;
}

function showError(message) {
    const container = document.getElementById('news-details');
    container.innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');
    if (newsId) {
        fetchNewsDetails(newsId);
    } else {
        showError('Aucun article sélectionné.');
    }
});
