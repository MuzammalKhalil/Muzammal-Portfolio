# Muzammal | Senior Frontend Developer Portfolio

A professional, high-performance, single-page portfolio website engineered for **Muzammal**, Senior Frontend Developer & Modern Web Specialist with **5+ Years of Experience**.

Built strictly in accordance with the **Intern Assessment Brief & Portfolio Challenge Guidelines**.

---

## 🌟 Key Highlights & Assessment Compliance

* ☀️ **Strict Light Theme Only:** Built specifically for a clean, editorial light mode experience with high-contrast slate and brand blue accents. No dark-mode toggles or dark-first design.
* ⚡ **High Performance & Modern Stack:** Powered by **React 18**, **Vite**, and **Tailwind CSS**.
* 📱 **100% Fully Responsive:** Tested seamlessly from mobile (320px+) to 4K desktop screens.
* 🛠️ **Deep Skills Showcase:** Categorized technical proficiency across React, Next.js, JavaScript, Tailwind CSS, WordPress, WPBakery, Wix Studio, and Web Vitals.
* 💼 **Featured Projects & Interactive Case Studies:** Includes 4 production-grade projects with interactive modal breakdowns detailing the **Problem, Role, Approach, and Measurable Outcome**.
* 🤖 **Transparent AI Workflow Section:** Features an explicit breakdown of responsible AI utilization and code ownership as required by Section F of the challenge brief.
* 📞 **Functional Contact Form & Copy-to-Clipboard:** Includes responsive contact interactions, copy email feedback, and professional networking links.
* 📝 **Complete Design Decision Log:** Provided in [`DESIGN_DECISION_LOG.md`](./DESIGN_DECISION_LOG.md).

---

## 🚀 Tech Stack

* **Core Framework:** React 18 (SPA)
* **Build Tool:** Vite 8
* **Styling System:** Tailwind CSS 3.4
* **Typography:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
* **Icons:** Lucide React & Custom SVG Vector Icons
* **Deployment Ready:** Vercel / Netlify / GitHub Pages

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Create Production Build
```bash
npm run build
```
The optimized static production files will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 📂 Project Structure

```
Muzammal Portfolio/
├── dist/                      # Production build output
├── public/                    # Static assets
├── src/
│   ├── components/            # Modular React components
│   │   ├── Navbar.jsx         # Sticky navigation with mobile menu
│   │   ├── Hero.jsx           # Value proposition & metrics
│   │   ├── About.jsx          # Personal journey & philosophy
│   │   ├── Skills.jsx         # Categorized tech competencies
│   │   ├── Projects.jsx       # Filterable showcase
│   │   ├── ProjectModal.jsx   # Detailed case study dialog
│   │   ├── Process.jsx        # Engineering & AI agent methodology
│   │   ├── Experience.jsx     # 5+ years career timeline & education
│   │   ├── Contact.jsx        # Functional form & copy email
│   │   ├── Footer.jsx         # Brand credits & back to top
│   │   └── Icons.jsx          # Clean SVG brand icons
│   ├── data/
│   │   └── portfolioData.js   # Centralized data for easy editing!
│   ├── App.jsx                # Single page orchestrator
│   ├── main.jsx               # React DOM entry
│   └── index.css              # Tailwind base & utilities
├── DESIGN_DECISION_LOG.md     # Official assessment decision log
├── tailwind.config.js         # Theme color definitions
├── vite.config.js             # Vite configuration
└── package.json               # Scripts & dependencies
```

---

## ✏️ How to Customize Your Information

All your personal details, email, social links, skills, and projects are centralized in one single file:
👉 **`src/data/portfolioData.js`**

* **Change Email & Socials:** Update `personalInfo.email`, `personalInfo.socials.linkedin`, etc.
* **Update Projects:** Replace dummy links (`demoUrl`, `githubUrl`, `image`) with your real project URLs and screenshots.
* **Add or Edit Experience:** Update `experienceData` array anytime.

---

## 🌐 Free 1-Click Deployment (Vercel / Netlify)

### Option A: Vercel (Recommended)
1. Push this repository to your **GitHub** account.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure the build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**. Your site will be live on a public URL in 30 seconds!

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist` folder into [Netlify Drop](https://app.netlify.com/drop).

---

## 📄 License
Created for Muzammal's Professional Portfolio Assessment. All rights reserved.
