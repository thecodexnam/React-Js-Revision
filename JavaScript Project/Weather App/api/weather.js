// Vercel Serverless Function - Weather API Proxy
// This file should be in: api/weather.js
// Vercel automatically creates endpoints from files in the 'api' folder

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { city } = req.query;
        const apiKey = process.env.WEATHER_API_KEY;

        // Check if API key is configured
        if (!apiKey) {
            console.error('WEATHER_API_KEY is not set');
            return res.status(500).json({ 
                error: 'API key not configured. Please set WEATHER_API_KEY in Vercel environment variables.' 
            });
        }

        // Check if city parameter is provided
        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        // Call OpenWeatherMap API
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;
        
        const response = await fetch(apiURL);
        const data = await response.json();

        // Forward the response from OpenWeatherMap API
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        // Return weather data
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch weather data',
            message: error.message 
        });
    }
}
