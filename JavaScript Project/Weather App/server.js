// Backend server to proxy weather API requests
// This keeps your API key secure on the server

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// Weather API proxy endpoint
app.get('/api/weather', async (req, res) => {
    try {
        const { city } = req.query;
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ 
                error: 'API key not configured. Please set WEATHER_API_KEY in .env file' 
            });
        }

        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;
        
        const response = await fetch(apiURL);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Make sure to set WEATHER_API_KEY in your .env file`);
});
