# Simple Fix - Step by Step

## The Problem
Vercel can't deploy because folder names have spaces.

## The Solution
Rename folders to use hyphens instead of spaces.

---

## 🎯 Step-by-Step (5 minutes)

### Step 1: Rename Folders Manually

**Using File Explorer (Easiest):**

1. Go to: `C:\Users\naman\React-Js Revision`

2. Find folder: `JavaScript Project`
   - Right-click it
   - Click "Rename"
   - Type: `JavaScript-Project`
   - Press Enter

3. Open the `JavaScript-Project` folder

4. Find folder: `Weather App`
   - Right-click it
   - Click "Rename"
   - Type: `Weather-App`
   - Press Enter

**That's it!** Folders are renamed.

---

### Step 2: Commit Changes

Open PowerShell or Git Bash in the repository root:

```bash
cd "C:\Users\naman\React-Js Revision"
git add -A
git commit -m "Rename folders to remove spaces"
git push
```

---

### Step 3: Update Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Click "Settings" tab
4. Scroll to "General" section
5. Find "Root Directory"
6. Click "Edit" or "Change"
7. Change the value to: `JavaScript-Project/Weather-App`
8. Click "Save"

---

### Step 4: Redeploy

1. Go to "Deployments" tab
2. Click "..." (three dots) on the latest deployment
3. Click "Redeploy"
4. Wait for deployment to complete
5. ✅ Success!

---

## ✅ Checklist

- [ ] Folders renamed (no spaces)
- [ ] Git changes committed and pushed
- [ ] Vercel Root Directory updated to: `JavaScript-Project/Weather-App`
- [ ] Project redeployed
- [ ] Deployment successful

---

## 🆘 Still Not Working?

**If you see errors:**

1. **Make sure folders are renamed correctly:**
   - Check in File Explorer
   - Should be: `JavaScript-Project\Weather-App`

2. **Make sure Vercel Root Directory matches exactly:**
   - Should be: `JavaScript-Project/Weather-App`
   - No extra spaces
   - Use forward slashes `/`

3. **Try deleting and re-importing project on Vercel:**
   - Delete current project
   - Create new project
   - Import repository
   - Set Root Directory: `JavaScript-Project/Weather-App`
   - Set Environment Variable: `WEATHER_API_KEY`
   - Deploy

---

That's it! Very simple process. 🚀
