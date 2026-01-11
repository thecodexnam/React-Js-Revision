# Quick Setup Guide

## 🔐 Setting Up Environment Variables

### Step 1: Create .env file

Create a file named `.env` in the `Weather App` folder with the following content:

```
WEATHER_API_KEY=3854f2b98e3975afdfacfaab34f63db3
PORT=3000
```

Replace `3854f2b98e3975afdfacfaab34f63db3` with your actual OpenWeatherMap API key.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Server

```bash
npm start
```

The app will run on `http://localhost:3000`

## ⚠️ Important Security Notes

1. **Never commit `.env` file to git** - It's already in `.gitignore`
2. **For deployment**, set environment variables on your hosting platform:
   - Heroku: `heroku config:set WEATHER_API_KEY=your_key`
   - Railway: Set in dashboard under Variables
   - Render: Set in dashboard under Environment
   - Netlify/Vercel: Set in dashboard under Environment Variables

3. **The API key is now secure** - It's only on the server, not in client code!
