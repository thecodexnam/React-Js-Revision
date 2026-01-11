# EASIEST SOLUTION - Do This Now

## ⚡ Fastest Way (2 minutes)

### Option 1: Use File Explorer (Recommended - No Scripts)

1. **Open File Explorer**
2. **Go to:** `C:\Users\naman\React-Js Revision`
3. **Right-click** `JavaScript Project` folder
4. **Click "Rename"**
5. **Type:** `JavaScript-Project` and press Enter
6. **Open** the `JavaScript-Project` folder
7. **Right-click** `Weather App` folder  
8. **Click "Rename"**
9. **Type:** `Weather-App` and press Enter

**Done!** Folders renamed.

---

### Option 2: Use PowerShell (If You Prefer)

Open PowerShell and run these commands one by one:

```powershell
cd "C:\Users\naman\React-Js Revision"
Rename-Item "JavaScript Project" "JavaScript-Project"
cd "JavaScript-Project"
Rename-Item "Weather App" "Weather-App"
cd ..
```

---

## 📝 Then Commit to Git

```bash
cd "C:\Users\naman\React-Js Revision"
git add -A
git commit -m "Rename folders to remove spaces"
git push
```

---

## 🔧 Update Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Settings → General
4. Root Directory: Change to `JavaScript-Project/Weather-App`
5. Save
6. Redeploy

---

## ✅ That's It!

Very simple - just rename folders manually, commit, update Vercel, and redeploy!
