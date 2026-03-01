# Stop the Panic

A free, browser-based panic attack intervention tool. No login. No paywall. No installation.

**Live site:** [stopthepanic.app](https://stopthepanic.app) *(coming soon)*  
**Portfolio:** [chapmanvanessa.design](https://chapmanvanessa.design)  
**Designer:** Vanessa Chapman · UX Designer & Researcher · MSc Psychology 2026

---

## What it does

Stop the Panic guides a person through an acute panic attack in real time using a sequence of evidence-based interventions:

1. **You're Safe** — immediate reassurance and psychoeducation
2. **Look** — Psychological First Aid, Step 1 of 3
3. **Listen** — Psychological First Aid, Step 2 of 3
4. **Link** — Psychological First Aid, Step 3 of 3
5. **Breathe** — animated breathing orb (4-7-8, Box, Physiological sigh)
6. **Ground** — 5-4-3-2-1 sensory grounding exercise
7. **Body Scan** — progressive muscle relaxation
8. **Visualise** — guided imagery with ambient sound
9. **ACT** — acceptance and defusion (wave metaphor)
10. **CBT Anchoring** — four directive cognitive statements
11. **Affirmations** — closing carousel with affirming statements
12. **End Menu** — onward options including signposting to professional support

The design philosophy is: **one clear directive action per screen, never a question, never a form, never a wall of text.**

---

## Evidence base

Each intervention is grounded in peer-reviewed research:

- **Psychological First Aid (PFA)** — Look/Listen/Link model; ranked highest for immediate acute stabilisation
- **Slow-Paced Breathing** — Lachowicz et al. (2026): substantial immediate decrease in anxiety with JITAI delivery
- **5-4-3-2-1 Grounding** — validated sensory redirection for panic interruption
- **Progressive Muscle Relaxation** — Chin et al. (2024): acutely reduced state anxiety and fear of body sensations
- **Guided Imagery** — Kumari & Patil (2023): immediate relief and complete calmness reported
- **ACT Defusion** — Krafft et al. (2021): in-the-moment anxiety β=−0.28, worry β=−0.30
- **Brief CBT Anchoring** — Sousa (2026): verbal de-escalation and cognitive anchoring effective for crisis

Full research documentation is in `/Documentation/Stop_the_Panic_Intervention_Research.docx`.

---

## Why it's free

Stop the Panic addresses a clinically significant access gap. Panic attacks affect approximately 11% of the population annually. Existing tools are either paywalled, require app installation, or are designed for long-term management rather than acute crisis intervention.

This tool will always be free. Voluntary donations via Ko-fi help cover hosting and music licensing costs (~£25/month).

---

## Tech stack

| Package | Version | Purpose |
|---|---|---|
| React | ^18 | Component model; each screen is a component |
| Vite | ^7 | Dev server and build tool |
| React Router DOM | ^6 | Client-side routing with browser back-button support |
| Framer Motion | ^11 | Breathing orb animation, carousel, screen transitions |
| Howler.js | ^2.2 | Audio management; handles browser autoplay restrictions |
| Tailwind CSS | ^3 | Utility-first CSS mapped to design tokens |

---

## Design system

**Colours:**
- Dark Forest `#2C4A3E` — primary nav and dark backgrounds
- Sage `#84B59F` — buttons, active states, crisis footer
- Lavender `#9B8EC4` — PFA badges, affirmations accent
- Deep Purple `#5C4F8A` — music button, breathing orb
- Accent Mint `#C8E6D4` — body copy on dark backgrounds

**Typography:**
- Cambria (Georgia fallback) — display headings, 36–48pt
- Arial (Helvetica fallback) — all body copy, labels, buttons

**Photography:** All images sourced from Unsplash under the Unsplash Licence. Photographers credited on every screen.

---

## Running locally

```bash
# Clone the repository
git clone https://github.com/vanessasperspective/StopthePanic.git
cd StopthePanic/stop-the-panic

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project structure

```
stop-the-panic/
├── src/
│   ├── assets/
│   │   └── Images/          # Background photographs (Unsplash)
│   ├── components/
│   │   ├── Navbar.jsx        # Site navigation bar
│   │   ├── Footer.jsx        # Crisis footer + screen counter
│   │   └── ScreenLayout.jsx  # Full-screen background + layout wrapper
│   ├── config/
│   │   └── screens.js        # Screen metadata (image, name, credit, number)
│   ├── screens/              # One file per screen/route
│   │   ├── Safe.jsx
│   │   ├── Look.jsx
│   │   ├── Listen.jsx
│   │   └── ... (18 screens total)
│   ├── App.jsx               # Router and route definitions
│   └── index.css             # Global CSS reset and design tokens
└── index.html
```

---

## Portfolio context

This project is the centrepiece of Vanessa Chapman's UX portfolio. The full portfolio includes:

- Competitor analysis (11 apps analysed with annotated UX mockups)
- Intervention research report (27 studies assessed for acute panic relevance)
- User journey mockup (this repository)
- Usability testing report *(planned)*

---

## Photo credits

| Screen | Photographer | Unsplash |
|---|---|---|
| You're Safe | Intricate Explorer | [Link](https://unsplash.com/photos/L6-l45Y_om0) |
| Look, Ground | Hanna Lazar | [Link](https://unsplash.com/photos/NO-lCEHowSs) |
| Listen, Signposting | Tegan Conway | [Link](https://unsplash.com/photos/yvwSaA5TjoA) |
| Link | Florian Schindler | [Link](https://unsplash.com/photos/9xIY8BQ6_eg) |
| Breathe Intro | Jonathan Borba | [Link](https://unsplash.com/photos/JQK137K59_I) |
| Breathe Orb, Visualise | Daniil Silantev | [Link](https://unsplash.com/photos/bZM8iVXjFaQ) |
| Body Scan, About | Stan Jacobs | [Link](https://unsplash.com/photos/-DLso_t4BFs) |
| ACT | Polina Kuzovkova | [Link](https://unsplash.com/photos/M5TlpMtJZ7M) |
| CBT Anchoring | Willian Justen de Vasconcellos | [Link](https://unsplash.com/photos/hBEIZOrIpRs) |
| Affirmations, Donate | Atul Pandey | [Link](https://unsplash.com/photos/CuGMGLngfNI) |
| Cover, End Menu | Pascal Debrunner | [Link](https://unsplash.com/photos/vBtJYXG6yPA) |

---

## Crisis resources

If you are in crisis right now:

**Samaritans** — 116 123 (free, 24/7)  
**NHS 111** — 111  
**Emergency services** — 999