# Murtaza Baig — AI Automation Developer Portfolio

Production portfolio showcasing autonomous AI agents, enterprise workflow automation (LangGraph, n8n, Paperclip.ai), headless browser QA automation (Playwright), and conversational AI systems.

---

## 🚀 How to Run Locally

You can run the portfolio locally using any of the following simple methods:

### Option 1: Python (Recommended — Zero dependencies)
- **On Windows (1-Click)**: Simply double-click [`run-windows.bat`](file:///home/beast/Desktop/Projects/active/Murtaza%20Portfolio/run-windows.bat) in the root folder. It will start the server and open your browser automatically.
- **On Windows (Command Prompt / PowerShell)**:
  ```cmd
  python server.py 3000
  ```
  *(or `py server.py 3000`)*
- **On macOS / Linux**:
  ```bash
  python3 server.py 3000
  ```
*(Or standard Python server: `python3 -m http.server 3000 --directory Portfolio`)*  
Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

### Option 2: Node.js / npm
```bash
npm start
```
*(Or run `npx serve Portfolio -p 3000`)*  
Then open **[http://localhost:3000](http://localhost:3000)**.

---

### Option 3: VS Code / Cursor Live Server
1. Open the project in VS Code / Cursor.
2. Right-click on `Portfolio/index.html`.
3. Select **"Open with Live Server"**.

---

## 🌐 Deployment

The project is pre-configured with clean routing for all major hosting platforms:

- **Vercel**: Pre-configured with `Portfolio/vercel.json`. Run `vercel` or connect your GitHub repository and set the Root Directory to `Portfolio`.
- **Netlify**: Pre-configured with `Portfolio/_redirects`.
- **GitHub Pages**: Supported out of the box.

---

## 📂 Project Structure

```text
├── index.html                       # Root redirect to Portfolio/
├── package.json                     # Local dev scripts (npm start, npm run serve:py)
├── README.md                        # Documentation
└── Portfolio/
    ├── index.html                   # Homepage (Hero, About, Services, Work, Process, Testimonials, Contact)
    ├── favicon.png                  # Monogram favicon
    ├── vercel.json                  # Clean URL rewrites & headers
    ├── _redirects                   # Netlify/static clean URL redirects
    ├── assets/
    │   ├── css/                     # Bootstrap 5, AOS, Magnific Popup, Main stylesheet
    │   ├── js/                      # GSAP, Swiper, jQuery, Phosphor icons, main scripts
    │   └── images/
    │       ├── shapes/              # Cutout hero banner artwork & decorative vectors
    │       ├── icons/               # UI & category icons
    │       └── thumbs/              # Project mockups, tech badges, profile pictures
    └── work/                        # Dedicated case study pages
        ├── autonomous-qa-software-testing-agent.html
        ├── ai-arabic-qirat-learning-platform.html
        ├── ai-voice-customer-support-agent.html
        └── agent-orchestration-automation-platform.html
```
