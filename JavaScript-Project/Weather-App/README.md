# Weather App 🌤️

A beautiful, modern weather application with secure API key handling and smooth animations.

🔗 **Live Demo:** [Add your Vercel URL here after deployment]

![Weather App](https://img.shields.io/badge/Status-Live-success)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your OpenWeatherMap API key:
   ```
   WEATHER_API_KEY=your_actual_api_key_here
   PORT=3000
   ```

   Get your API key from: https://openweathermap.org/api

### 3. Run the Application

**Development:**
```bash
npm start
```

The app will be available at `http://localhost:3000`

## 🔒 Security Features

- ✅ API key stored in `.env` file (not in code)
- ✅ `.env` file is gitignored (won't be committed)
- ✅ Backend proxy keeps API key secure on server
- ✅ Client-side code doesn't expose API key

## 📦 Deployment Options

### Option 1: Deploy with Node.js Backend

**Platforms:** Heroku, Railway, Render, DigitalOcean

1. Set environment variables on your hosting platform:
   - `WEATHER_API_KEY=your_api_key`
   - `PORT=3000` (or let the platform assign it)

2. Deploy your code

**Example for Heroku:**
```bash
heroku config:set WEATHER_API_KEY=your_api_key
git push heroku main
```

### Option 2: Deploy Static Files + Serverless Function

**Platforms:** Netlify, Vercel

1. Deploy static files (HTML, CSS, JS) normally
2. Create a serverless function that acts as the API proxy
3. Set environment variables in platform dashboard

**Example for Netlify:**
- Create `netlify/functions/weather.js`
- Set `WEATHER_API_KEY` in Netlify dashboard → Site settings → Environment variables

### Option 3: Deploy as Static Site (NOT Recommended for Production)

If deploying as pure static site (GitHub Pages, etc.), the API key will be visible in the browser. For production, use Option 1 or 2.

## 📝 Important Notes

- **Never commit `.env` file to git**
- Always use `.env.example` as a template
- Keep your API key secure and don't share it
- For production, always use a backend proxy or serverless function

## 🛠️ Technologies Used

- HTML, CSS, JavaScript
- Express.js (Backend)
- OpenWeatherMap API
- Environment Variables (dotenv)
