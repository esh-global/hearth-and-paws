# Hearth & Paws — Website Setup Guide

## What's in this folder

```
hearth-and-paws/
├── index.html          ← The entire website (single page)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactivity, forms, star ratings
├── reviews.json        ← Approved reviews (you edit this file)
├── netlify.toml        ← Netlify config
└── README.md           ← This file
```

---

## HOW TO PUBLISH (step by step)

### STEP 1 — Create a free GitHub account
1. Go to https://github.com and sign up (free)
2. Verify your email

### STEP 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `hearth-and-paws`
3. Set to **Public**
4. Click **Create repository**

### STEP 3 — Upload your files
1. On the new repo page, click **uploading an existing file**
2. Drag and drop the entire `hearth-and-paws` folder contents:
   - index.html
   - netlify.toml
   - reviews.json
   - The `css/` folder (with style.css inside)
   - The `js/` folder (with main.js inside)
3. Scroll down, click **Commit changes**

### STEP 4 — Create a free Netlify account
1. Go to https://netlify.com and sign up (free)
2. Choose **Sign up with GitHub** — easiest option

### STEP 5 — Deploy your site
1. In Netlify dashboard, click **Add new site** → **Import an existing project**
2. Choose **GitHub**
3. Select your `hearth-and-paws` repository
4. Leave all settings as default
5. Click **Deploy site**

### STEP 6 — Your site is live! 🎉
Netlify gives you a URL like: `https://hearth-and-paws-abc123.netlify.app`

**To get a custom name (still free):**
1. In Netlify → **Site settings** → **Change site name**
2. Name it something like `hearthandpaws` → becomes `https://hearthandpaws.netlify.app`

---

## HOW FORMS WORK (Netlify Forms — free)

Booking requests, contact messages, and review submissions are all handled automatically by Netlify.

To see your submissions:
1. Go to your Netlify dashboard
2. Click your site → **Forms** tab
3. You'll see three form inboxes:
   - `booking-request` — all booking requests
   - `review-submission` — all review submissions (pending approval)
   - `contact-inquiry` — general messages

**To get email notifications:**
1. Netlify → Site → **Forms** → **Form notifications**
2. Add your email → you'll get notified instantly when someone submits

---

## HOW TO APPROVE AND PUBLISH REVIEWS

Reviews are submitted via the form → you receive them via email/Netlify dashboard.

To add an approved review to the public site:

1. Open `reviews.json` in your GitHub repository
2. Click the **pencil icon** (Edit)
3. Add a new entry following this format:

```json
{
  "reviewer_name": "Client Name",
  "service_used": "Overnight House Sitting",
  "pet_names": "Fluffy",
  "overall_rating": 5,
  "review_text": "Their written review text goes here."
}
```

4. Click **Commit changes**
5. Netlify automatically re-deploys in ~30 seconds
6. The review appears on your live site ✓

---

## HOW TO UPDATE YOUR PRICING

Open `index.html`, find the service card you want to update, and change the price line:
```html
<div class="service-price">From $85 / night</div>
```

Commit the change on GitHub → Netlify auto-updates your site.

---

## FREE TIER LIMITS (Netlify)

| Feature | Free Limit |
|---|---|
| Form submissions | 100/month |
| Bandwidth | 100GB/month |
| Deployments | Unlimited |
| Custom domain | Yes (free) |

100 form submissions/month is plenty to start. If you grow beyond that, Netlify's paid plan is $19/month.

---

## WANT A CUSTOM DOMAIN? (e.g. hearthandpaws.com)

1. Buy a domain at https://namecheap.com (~$12/year for .com)
2. In Netlify → **Domain settings** → **Add custom domain**
3. Follow Netlify's DNS instructions (takes ~24 hours to propagate)
4. Netlify provides free SSL (https://) automatically ✓

---

## NEED HELP?

Email: erika.s.huang@gmail.com
Netlify docs: https://docs.netlify.com
GitHub docs: https://docs.github.com
