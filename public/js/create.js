async function createArticle(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    try {
        const response = await fetch('/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, image })
        });

        if (response.ok) {
            alert('Article créé avec succès');
            window.location.href = '/index.html';
        } else {
            const errorData = await response.json();
            alert(`Erreur: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de créer l\'article.');
    }
}

document.getElementById('create-article-form').addEventListener('submit', createArticle);
