# Quick Guide: Rename Folders to Fix Vercel Error

## 🔧 Why Rename?

Vercel serverless functions **cannot have spaces** in paths. Your folders have spaces, which causes the error.

## ✅ Quick Fix (2 minutes)

### Step 1: Rename Folders

**Option A: Using File Explorer (Windows)**
1. Navigate to `C:\Users\naman\React-Js Revision`
2. Right-click `JavaScript Project` → Rename → Type `JavaScript-Project`
3. Open `JavaScript-Project` folder
4. Right-click `Weather App` → Rename → Type `Weather-App`

**Option B: Using PowerShell**
```powershell
cd "C:\Users\naman\React-Js Revision"
Rename-Item "JavaScript Project" "JavaScript-Project"
cd "JavaScript-Project"
Rename-Item "Weather App" "Weather-App"
cd ..
```

**Option C: Using Command Prompt**
```cmd
cd "C:\Users\naman\React-Js Revision"
ren "JavaScript Project" "JavaScript-Project"
cd "JavaScript-Project"
ren "Weather App" "Weather-App"
cd ..
```

### Step 2: Update Git

```bash
# Git will automatically detect the renames
git add -A
git commit -m "Rename folders to remove spaces for Vercel deployment"
git push
```

### Step 3: Update Vercel Root Directory

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Go to **Settings** tab
4. Find **"Root Directory"** in General section
5. Change from: `JavaScript Project/Weather App`
6. Change to: `JavaScript-Project/Weather-App`
7. Click **"Save"**

### Step 4: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. ✅ Success! No more errors!

---

## 🎯 After Renaming

**Old Path:**
- ❌ `JavaScript Project/Weather App/api/weather.js` (has spaces)

**New Path:**
- ✅ `JavaScript-Project/Weather-App/api/weather.js` (no spaces)

---

## 📝 Note

- Git tracks renames automatically, so your commit history is preserved
- All your code stays the same, just folder names change
- This is a best practice (avoid spaces in paths)

---

That's it! Your deployment will work now! 🚀
