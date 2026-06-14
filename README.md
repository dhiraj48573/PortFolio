# Dhiraj Kumar — Portfolio

**Software Development Engineer | Full-Stack | DSA & System Design**

Production-grade single-page portfolio application built with React 18 + Vite + Tailwind CSS 4.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens on http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
portfolio/
├── index.html                  # Entry HTML (Google Fonts, GA4 snippet)
├── vercel.json                 # Vercel deployment config
├── vite.config.js              # Vite + Tailwind v4 plugin
├── public/
│   └── favicon.svg             # DK monogram favicon
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Layout assembly (10 sections)
│   ├── index.css               # Global styles + CSS custom properties
│   ├── data/
│   │   └── candidate.js        # Single source of truth for all content
│   └── components/
│       ├── Nav.jsx             # Sticky nav, glassmorphism, mobile hamburger
│       ├── Hero.jsx            # Two-column hero + CSS terminal animation
│       ├── SEO.jsx             # react-helmet-async meta/OG/Twitter/JSON-LD
│       ├── Metrics.jsx         # 5-metric count-up bar (Intersection Observer)
│       ├── Projects.jsx        # 3 case studies (Problem → Solution → Metrics)
│       ├── Experience.jsx      # Timeline with active pulsing dot
│       ├── Skills.jsx          # 6-group grid with tech pills
│       ├── DSA.jsx             # LeetCode/GFG stats + GitHub embeds
│       ├── Certs.jsx           # 7 certifications (desktop grid / mobile scroll)
│       ├── HireMe.jsx          # 6 services + availability badge
│       ├── Contact.jsx         # EmailJS wired form + direct contact info
│       └── Footer.jsx          # Footer + floating WhatsApp button
```

---

## Configuring EmailJS (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) (free tier: 200 emails/month).

### Step 1: Create EmailJS Account
Go to https://www.emailjs.com/ and sign up.

### Step 2: Add an Email Service
1. Dashboard → Email Services → Add New Service
2. Choose Gmail/Outlook/etc. and connect
3. Note your **Service ID**

### Step 3: Create an Email Template
1. Dashboard → Email Templates → Create New Template
2. Add these template variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{project_type}}` — selected project type
   - `{{budget}}` — selected budget range
   - `{{message}}` — message body
   - `{{reply_to}}` — reply-to email
3. Note your **Template ID**

### Step 4: Get Your Public Key
1. Dashboard → Account → API Keys
2. Copy your **Public Key**

### Step 5: Update Contact.jsx
Open [`src/components/Contact.jsx`](src/components/Contact.jsx) and replace the three placeholders at the top:

```js
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';    // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';   // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx';     // Your Public Key
```

---

## Updating the Resume PDF

1. Place your latest resume PDF in `public/`
2. Name it `Dhiraj_Kumar_Resume.pdf`
3. The "Download Resume" button in Hero automatically links to `/Dhiraj_Kumar_Resume.pdf`

---

## Google Analytics

Replace the placeholder `G-XXXXXXXXXX` in [`index.html`](index.html) with your actual GA4 measurement ID.

---

## Customizing Content

All candidate data lives in a single file: [`src/data/candidate.js`](src/data/candidate.js). Modify exported objects to update:

- **Bio, links, contact info** → `candidate`
- **Rotating hero titles** → `rotatingTitles`
- **Skills breakdown** → `skills` (6 groups)
- **Experience entries** → `experiences`
- **Projects** → `projects`
- **Certifications** → `certs`
- **DSA stats** → `dsa`
- **Freelance services** → `services`
- **Navigation links** → `navLinks`

---

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at https://vercel.com and it auto-deploys on push. The [`vercel.json`](vercel.json) file includes the correct build config for Vite.

---

## Design Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0F` | Page background |
| `--bg-surface` | `#111118` | Card backgrounds |
| `--border-subtle` | `#1E1E2E` | Borders, separators |
| `--accent-cyan` | `#00D4FF` | CTAs, highlights, links |
| `--accent-violet` | `#7B61FF` | Tags, secondary labels |
| `--success-green` | `#00E676` | Availability badge, uptime |
| `--text-primary` | `#F0F0FF` | Body text |
| `--text-secondary` | `#8B8BA0` | Muted labels |

---

## Fonts

- **JetBrains Mono** — headings, monospace, code accents, terminal
- **DM Sans** — body text, paragraphs, form elements

Both loaded from Google Fonts in `index.html`.

---

## Lighthouse Targets

- ✅ Semantic HTML with ARIA labels
- ✅ `react-helmet-async` for `<title>` and meta tags
- ✅ JSON-LD structured data for search engines
- ✅ Dark-only palette (no light mode flash)
- ✅ Intersection Observer for lazy animations
- ✅ SVG favicon (no raster images)
- ✅ `rel="noopener noreferrer"` on all external links

---

**Built by Dhiraj Kumar** · Haridwar, Uttarakhand · [dhirajsinghmichal@gmail.com](mailto:dhirajsinghmichal@gmail.com)
