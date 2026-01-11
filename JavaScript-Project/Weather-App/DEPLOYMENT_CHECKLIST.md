# 🚀 Deployment Checklist

## Pre-Deployment Checklist

### ✅ Files Ready
- [x] `index.html` - Main HTML file
- [x] `script.js` - JavaScript with API proxy
- [x] `style.css` - Styling
- [x] `api/weather.js` - Vercel serverless function
- [x] `vercel.json` - Vercel configuration
- [x] `.gitignore` - Excludes sensitive files
- [x] `package.json` - Project metadata

### ✅ Security
- [ ] API key removed from `script.js` (✓ Already done)
- [ ] `.env` file is in `.gitignore` (✓ Already done)
- [ ] Ready to use environment variables

---

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `weather-app`
3. Description: "Beautiful weather app"
4. Public or Private (your choice)
5. **Don't** initialize with README
6. Click "Create repository"

---

## Step 2: Push Code to GitHub

**Option A: Use Setup Script**

**Windows:**
```bash
cd "JavaScript Project/Weather App"
setup-new-repo.bat
```

**Mac/Linux:**
```bash
cd "JavaScript Project/Weather App"
chmod +x setup-new-repo.sh
./setup-new-repo.sh
```

**Option B: Manual Commands**

```bash
cd "JavaScript Project/Weather App"
git init
git add .
git commit -m "Initial commit: Weather App"
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy on Vercel

1. **Go to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"

2. **Import Repository:**
   - Select your `weather-app` repository
   - Click "Import"

3. **Configure Project:**
   - **Root Directory:** Leave empty (don't set anything)
   - **Framework Preset:** Other (or leave as auto-detected)
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty

4. **Set Environment Variable:**
   - Click "Environment Variables"
   - Click "Add"
   - **Key:** `WEATHER_API_KEY`
   - **Value:** `3854f2b98e3975afdfacfaab34f63db3` (your API key)
   - **Environments:** Select all three (Production, Preview, Development)
   - Click "Save"

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (1-2 minutes)

---

## Step 4: Verify Deployment

- [ ] Deployment completed successfully
- [ ] Visit your Vercel URL (e.g., `https://weather-app.vercel.app`)
- [ ] Search for a city
- [ ] Weather data displays correctly
- [ ] Check browser console (F12) - no errors
- [ ] API key is not visible in client code (check Network tab)

---

## 🎉 Success!

Your weather app is now:
- ✅ Live on Vercel
- ✅ API key is secure
- ✅ Using serverless functions
- ✅ Global CDN
- ✅ HTTPS enabled
- ✅ Free hosting

---

## 📝 Next Steps

- Update README.md with your live URL
- Share your app with others
- Monitor usage in Vercel dashboard
- Set up custom domain (optional)

---

## 🆘 Troubleshooting

**Issue: Root Directory Error**
- Make sure Root Directory is **empty** in Vercel settings
- Redeploy after clearing it

**Issue: API Key Error**
- Verify `WEATHER_API_KEY` is set in Vercel environment variables
- Make sure you selected all environments
- Redeploy after adding env vars

**Issue: 404 on /api/weather**
- Verify `api/weather.js` exists
- Check Vercel function logs
- Verify `vercel.json` configuration
