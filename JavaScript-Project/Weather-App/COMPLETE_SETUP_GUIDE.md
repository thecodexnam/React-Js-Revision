# Complete Setup Guide - Everything You Need

## 🚀 Automated Script (Recommended)

### Run the Automated Script

1. **Open PowerShell** (as Administrator recommended)

2. **Navigate to repository root:**
   ```powershell
   cd "C:\Users\naman\React-Js Revision"
   ```

3. **Run the script:**
   ```powershell
   .\JavaScript-Project\Weather-App\automate-rename-and-deploy.ps1
   ```
   
   Or if folders haven't been renamed yet:
   ```powershell
   .\JavaScript Project\Weather App\automate-rename-and-deploy.ps1
   ```

4. **Follow the prompts:**
   - Script will rename folders automatically
   - It will ask if you want to commit
   - It will ask if you want to push to GitHub

5. **Update Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Your Project → Settings → General
   - Root Directory: `JavaScript-Project/Weather-App`
   - Save and Redeploy

---

## 📋 Manual Process (If Script Doesn't Work)

### Step 1: Rename Folders

**Option A: File Explorer**
1. Go to `C:\Users\naman\React-Js Revision`
2. Right-click `JavaScript Project` → Rename → `JavaScript-Project`
3. Open `JavaScript-Project`
4. Right-click `Weather App` → Rename → `Weather-App`

**Option B: PowerShell**
```powershell
cd "C:\Users\naman\React-Js Revision"
Rename-Item "JavaScript Project" "JavaScript-Project"
cd "JavaScript-Project"
Rename-Item "Weather App" "Weather-App"
cd ..
```

### Step 2: Commit to Git

```bash
cd "C:\Users\naman\React-Js Revision"
git add -A
git commit -m "Rename folders to remove spaces for Vercel deployment"
git push
```

### Step 3: Update Vercel

1. **Go to Vercel Dashboard:**
   - [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click your project

2. **Update Root Directory:**
   - Settings tab → General section
   - Find "Root Directory"
   - Change to: `JavaScript-Project/Weather-App`
   - Click Save

3. **Redeploy:**
   - Deployments tab
   - Click "..." → Redeploy

---

## ✅ Checklist

- [ ] Folders renamed (no spaces)
- [ ] Changes committed to git
- [ ] Changes pushed to GitHub
- [ ] Vercel Root Directory updated
- [ ] Environment variable `WEATHER_API_KEY` set
- [ ] Project redeployed
- [ ] Deployment successful
- [ ] App tested on live URL

---

## 🎯 Expected Result

**Before:**
- ❌ `JavaScript Project/Weather App` (spaces - causes error)

**After:**
- ✅ `JavaScript-Project/Weather-App` (no spaces - works!)

---

## 🆘 Troubleshooting

**Script won't run?**
- Make sure PowerShell execution policy allows scripts
- Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

**Git errors?**
- Make sure you're in the repository root
- Check that git is initialized: `git status`

**Vercel still shows error?**
- Make sure Root Directory is exactly: `JavaScript-Project/Weather-App`
- Check for typos
- Redeploy after saving changes

---

That's it! Your deployment should work now! 🎉
