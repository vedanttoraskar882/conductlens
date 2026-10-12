# ConductLens — Frontend Landing Page

A complete, modern, responsive frontend landing page for **ConductLens**, built with React, TypeScript, and Tailwind CSS.

## Overview

ConductLens is being developed to help HR teams connect existing operational HR signals, identify sustained team-level patterns, and decide when a proportionate, documented review is needed.

- **Founder & CEO:** Tahira Rasheed
- **Location:** Crawley, West Sussex, United Kingdom
- **Sector:** HR technology, workplace conduct risk, and employee-relations evidence
- **Target Audience:** UK organisations with 100–2,000 employees

## Sections (In Specified Order)

1. **Home** — Hero headline, status badge (`In development · Pilot enquiries`), audience scope, primary/secondary CTAs, 3 supporting badges, and an illustrative dashboard preview with synthetic data.
2. **About** — Problem statement, proposed solution, comprehensive Founder card for Tahira Rasheed (credentials, research background, leadership scope, initials monogram), and development note (no Vision or Mission).
3. **Platform** — 3 core components (including the optional Structured HR Inquiry Workflow at +25%), 8 planned MVP modules, Controlled Identity Gate architecture diagram, strict field allow-list vs excluded data matrix, user roles, roadmap releases (Release 2 & Release 3), and design commitments.
4. **How It Works** — 9-step responsive timeline, visual workflow SVG diagram, persistence criteria (3 consecutive scoring cycles), and the central governance rule: *“An indicator supports review; it does not establish misconduct.”*
5. **Market & Pricing** — Target audience, priority sectors, buyers, 4 size bands (£8, £7, £6, £5 per covered employee/year + implementation fees), commercial options (+25% inquiry add-on, £1,500 pilot with implementation waiver, £6k Y2 consultancy licence), commercial terms, illustrative examples table, and interactive pricing estimator.
6. **FAQ** — Accessible accordion covering 12 exact questions and answers.
7. **Footer** — Wordmark, tagline, navigation, Crawley location, in development status, dynamic copyright year, and interactive *Form storage notice* action.

## Frontend-Only Storage Architecture

All "Request a Pilot" CTAs open an accessible modal that saves pilot requests exclusively to the user's browser via `localStorage` under the key:
```
conductlens_pilot_requests
```

- Submissions append to the existing array without deleting previous records.
- Fields: `id`, `fullName`, `phoneNumber`, `emailAddress`, `organisationName`, and auto-generated `submittedAt` (ISO timestamp).
- Includes pre-submission notice, aria-live status alerts, focus trapping, and escape-to-close.

## Quick Start & Run Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at the local URL (e.g., `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Production build assets are compiled into the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```
