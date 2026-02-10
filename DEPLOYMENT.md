# Deployment & Testing Checklist

## 🚀 Pre-Deployment Checklist

### ✅ Frontend (`apps/frontend`)

- [ ] **Environment Variables**:
  - `NEXT_PUBLIC_API_BASE_URL`: Production backend URL (e.g., `https://api.labs.scientistshub.com/api`).
  - `NEXT_PUBLIC_APP_BASE_URL`: Production frontend URL (e.g., `https://scientistshub.com`).
- [ ] **Build Verification**: Run `npm run build` in `apps/frontend` to ensure no errors.
- [ ] **Optimization**: Check `next.config.mjs` for image domains and optimizations.
- [ ] **Assets**: Ensure `public/` directory contains updated manifest, icons, and `sw.js`.

### ✅ Backend (`apps/backend`)

- [ ] **Environment Variables**:
  - `PORT`: Port for the server (e.g., `4000` or provided by platform).
  - `NODE_ENV`: Set to `production`.
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Valid email credentials.
  - `CONTACT_EMAIL_TO`: Recipient email for contact forms.
- [ ] **Build Verification**: Run `npm run build` in `apps/backend` (compiles TypeScript to `dist/`).
- [ ] **Start Script**: Ensure deployment platform runs `npm start` (which executes `node dist/index.js`).

---

## 🧪 Testing Guide

### Manual Testing Procedure

1. **Frontend Connectivity**:
    - Verify homepage loads without errors.
    - Check browser console for 404s or JS errors.
    - Test navigation to all main sections.

2. **Backend Connectivity**:
    - Verify backend health endpoint: `https://api.labs.scientistshub.com/api/health`.

3. **Form Submission (End-to-End)**:
    - **Contact Form**: Submit a test message. Verify success message on frontend and email receipt in inbox.
    - **Quote Form**: Submit a detailed quote request. Verify data integrity in email.

4. **Theme System**:
    - Toggle dark/light mode and ensure persistence across refreshes.

---

## 🌐 Deployment Strategies

### Frontend Deployment (Vercel/Netlify)

**Recommended: Vercel**

1. **Project Import**: Import the repository.
2. **Root Directory**: Set to `apps/frontend`.
3. **Framework Preset**: Next.js.
4. **Build Command**: `cd ../.. && npx turbo run build --filter=frontend` (or default if root is set correctly).
5. **Environment Variables**: Add production variables in Vercel settings.

### Backend Deployment (Railway/Render/Heroku)

**Recommended: Railway or Render**

1. **Project Import**: Import the repository.
2. **Root Directory**: Set to `apps/backend`.
3. **Build Command**: `npm install && npm run build`.
4. **Start Command**: `npm start`.
5. **Environment Variables**: Add production variables (SMTP, etc.) in platform settings.

---

## 🔍 Post-Deployment Verification

- [ ] **Frontend**: Load production URL.
- [ ] **Backend**: Hit `/api/health`.
- [ ] **Forms**: Send a live test email.
- [ ] **Logs**: Check production logs for any startup errors or unhandled rejections.

---

**Last Updated:** 2026-02-10
