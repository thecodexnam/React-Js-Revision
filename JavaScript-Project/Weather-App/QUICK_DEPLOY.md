# Quick Deploy Guide

## ⚠️ IMPORTANT: Fix Function Name Error First

**If you see this error:**
```
Error: A Serverless Function has an invalid name: "'JavaScript Project/Weather App/api/weather.js'". 
They must be less than 128 characters long and must not contain any space.
```

**Quick Fix:** Rename folders to remove spaces:
1. Rename `JavaScript Project` → `JavaScript-Project`
2. Rename `Weather App` → `Weather-App`
3. Update Vercel Root Directory to: `JavaScript-Project/Weather-App`
4. Redeploy

See `FIX_FUNCTION_NAME_ERROR.md` for detailed instructions.

---

## 🚀 Deploy from Current Repository Location

### Step 1: Commit and Push (if needed)

```bash
# Navigate to repository root
cd "C:\Users\naman\React-Js Revision"

# Check status
git status

# If there are changes:
git add .
git commit -m "Weather App ready for Vercel deployment"
git push
```

### Step 2: Deploy on Vercel

1. **Go to:** [vercel.com/new](https://vercel.com/new)

2. **Import Repository:**
   - Select `React-Js-Revision` repository
   - Click "Import"

3. **Set Root Directory:**
   - Look for "Root Directory" field
   - Enter: `JavaScript Project/Weather App`
   - Click "Continue"

4. **Add Environment Variable:**
   - Click "Environment Variables"
   - Key: `WEATHER_API_KEY`
   - Value: `3854f2b98e3975afdfacfaab34f63db3`
   - Environments: All (✓ Production, ✓ Preview, ✓ Development)
   - Click "Save"

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes

### Step 3: Done! ✅

Your app will be live at: `https://your-project.vercel.app`

---

## 🔧 If You Already Deployed and Got Root Directory Error

1. Go to **Vercel Dashboard** → Your Project → **Settings**
2. Find **"Root Directory"** in General section
3. Click **"Edit"**
4. Enter: `JavaScript Project/Weather App`
5. Click **"Save"**
6. **Redeploy** your project

---

## 📝 Root Directory Path

**Correct Value:** `JavaScript Project/Weather App`

- Use forward slashes `/` or backslashes `\`
- Include spaces exactly as folder names
- Path is relative to repository root

---

That's it! Your Weather App will deploy successfully. 🎉
