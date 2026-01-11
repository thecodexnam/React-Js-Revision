# Deploying Weather App to Vercel

## ⚠️ IMPORTANT: Fix Root Directory Error First

**If you see this error:**
```
The specified Root Directory "JavaScript%20Project/Weather%20App" does not exist.
```

**Quick Fix:**
1. Vercel Dashboard → Your Project → **Settings** tab
2. Scroll to **"General"** section
3. Find **"Root Directory"** field
4. **Clear it** (leave empty) or remove it
5. Click **Save**
6. **Redeploy** your project

**Why?** Vercel is trying to find your project in a subdirectory, but it should deploy from the root of your repository (or from the Weather App folder if you create a separate repo).

---

## 🚀 Step-by-Step Deployment Guide

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Vercel CLI installed (optional, but recommended)
- Your OpenWeatherMap API key

---

## Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub
2. Push your Weather App code to the repository

### Step 2: Import Project to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect your project settings

### Step 3: Set Environment Variables

**IMPORTANT:** Do this before deploying!

1. In the project import screen, click **"Environment Variables"**
2. Add a new variable:
   - **Key:** `WEATHER_API_KEY`
   - **Value:** Your OpenWeatherMap API key (e.g., `3854f2b98e3975afdfacfaab34f63db3`)
   - **Environment:** Select all (Production, Preview, Development)
3. Click **"Save"**

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for deployment to complete
3. Your app will be live at `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Set Environment Variable

```bash
vercel env add WEATHER_API_KEY
```

When prompted:
- Enter your API key value
- Select environments (Production, Preview, Development)

Or set it for all environments at once:
```bash
vercel env add WEATHER_API_KEY production preview development
```

### Step 4: Deploy

```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

---

## 🔧 Setting Environment Variables After Deployment

If you need to add/update environment variables after deployment:

### Via Dashboard:
1. Go to your project on [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on **Settings** tab
3. Click **Environment Variables**
4. Add or edit variables
5. **Redeploy** your project for changes to take effect

### Via CLI:
```bash
vercel env add WEATHER_API_KEY
```

To list current environment variables:
```bash
vercel env ls
```

---

## 📁 Project Structure for Vercel

Your project should have this structure:

```
Weather App/
├── api/
│   └── weather.js          # Serverless function
├── index.html
├── script.js
├── style.css
├── vercel.json             # Vercel configuration
└── (other files...)
```

---

## ✅ Testing Your Deployment

1. After deployment, visit your Vercel URL
2. Try searching for a city
3. Check the browser console (F12) for any errors
4. The API key should be secure (not visible in client code)

---

## 🔍 Troubleshooting

### Issue: "API key not configured" error

**Solution:** 
- Make sure you set `WEATHER_API_KEY` in Vercel environment variables
- Redeploy after adding environment variables
- Check that the variable name matches exactly: `WEATHER_API_KEY`

### Issue: CORS errors

**Solution:**
- The `vercel.json` file should handle CORS
- Make sure `api/weather.js` exists
- Redeploy after creating the API function

### Issue: 404 on `/api/weather`

**Solution:**
- Ensure `api/weather.js` file exists in the `api/` folder
- Check that the file exports a default function
- Verify the file structure matches Vercel's requirements

### Issue: Environment variable not working

**Solution:**
- Environment variables require a redeploy to take effect
- Make sure you selected all environments (Production, Preview, Development)
- Check the variable name is exactly `WEATHER_API_KEY` (case-sensitive)

---

## 📝 Important Notes

1. **Never commit your API key** - It's in `.gitignore`
2. **Always use environment variables** - Never hardcode API keys
3. **Redeploy after changing env vars** - Changes don't apply to existing deployments
4. **Test in Preview** - Vercel creates preview deployments for testing

---

## 🎉 You're All Set!

Your weather app is now securely deployed on Vercel with:
- ✅ Secure API key handling (not exposed to clients)
- ✅ Serverless function for API proxy
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free hosting for personal projects
