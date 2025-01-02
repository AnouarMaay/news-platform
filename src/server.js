require('dotenv').config();
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Middleware pour autoriser les requêtes cross-origin
app.use(cors());

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Routes
app.use('/api/news', newsRoutes);

// Middleware pour gérer les erreurs (optionnel)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Erreur interne du serveur' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
