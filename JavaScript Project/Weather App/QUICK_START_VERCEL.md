# Quick Start: Deploy to Vercel

## 🚀 Fastest Way (5 minutes)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Vercel

**Option A: Via Web**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. **Add Environment Variable:**
   - Name: `WEATHER_API_KEY`
   - Value: `your_api_key_here`
   - Select: All environments
4. Click "Deploy"

**Option B: Via CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Set environment variable
vercel env add WEATHER_API_KEY

# Deploy
vercel --prod
```

### 3. Done! 🎉

Your app is live at `https://your-project.vercel.app`

---

## 📋 Checklist

- [ ] Code pushed to GitHub
- [ ] `WEATHER_API_KEY` set in Vercel
- [ ] `api/weather.js` file exists
- [ ] Deployment successful
- [ ] App tested on live URL

---

## ❓ Need Help?

See `VERCEL_DEPLOYMENT.md` for detailed instructions.
