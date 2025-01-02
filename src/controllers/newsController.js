const axios = require('axios');
const DUMMY_JSON_URL = 'http://localhost:5000/posts';

const newsController = {
    async getAllNews(req, res) {
        try {
            const response = await axios.get(DUMMY_JSON_URL);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des articles.' });
        }
    },

    async getNewsById(req, res) {
        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${req.params.id}`);
            res.json(response.data);
        } catch (error) {
            res.status(404).json({ message: 'Article non trouvé.' });
        }
    },

    async createNews(req, res) {
        try {
            const { title, description, image } = req.body;
            if (!title || !description || !image) {
                return res.status(400).json({ message: 'Tous les champs sont requis.' });
            }
    
            // Simuler un ID unique
            const newArticle = {
                id: Date.now(),
                title,
                description,
                image,
            };
    
            // Ajouter l'article à une base JSON simulée (si elle est implémentée)
            // Par exemple, si vous avez un fichier `db.json`, ajoutez l'article ici.
    
            res.status(201).json(newArticle);
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur lors de la création.' });
        }
    }
    
};

module.exports = newsController;
