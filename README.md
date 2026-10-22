# SOLARVERSE — An Immersive Solar System Explorer

> *"Your Journey Through Our Cosmic Neighborhood"*

**SOLARVERSE** is a production-quality, full-stack educational digital space museum and interactive 3D solar system explorer. Powered by real observational data from **NASA**, the **European Space Agency (ESA)**, and the **International Astronomical Union (IAU)**, SOLARVERSE is built for school and college students, astronomy enthusiasts, and stargazers of all ages.

---

## 🌌 Key Highlights & Features

### 1. Signature Interactive 3D Solar System Explorer
- Built with **Three.js** and **React Three Fiber / Drei**.
- Full orbital simulation of the **Sun and all 8 major planets** (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune).
- Individual planetary characteristics: distinct orbital inclinations, rotation velocities, axial tilts, and Saturn's ring system.
- Full camera controls: **Orbit (Rotate)**, **Zoom**, **Pan**, and a **Reset Camera** button.
- **Interactive Selection**: Click or tap any planet to focus the camera and bring up an interactive HUD card with immediate physical telemetry and a direct link to its comprehensive profile.
- **Real-Time Orbit Controls**: Toggle orbit path lines, pause/resume simulation, adjust orbital speed ($0.2\times$ to $3\times$), and toggle legible 3D labels.
- **Dual Scale Modes**:
  - **Visual Explorer**: Proportionally adjusted scale optimized for screen exploration.
  - **Scientific Scale**: Detailed geometric disclosure explaining real planetary distances and diameters.
- **Robust 2D Canvas Fallback**: Full-featured SVG/Canvas alternative with orbital animation, planet clicks, and HUD telemetry for devices without WebGL acceleration or on low-battery mode.

### 2. Comprehensive 22-Section Profiles for All 8 Planets
Every planet route (`/planets/mercury` through `/planets/neptune`) features an exhaustive educational dossier:
1. Overview and introduction
2. Discovery and nomenclature history
3. Formation and geological history
4. Position in the Solar System
5. Mean radius and diameter
6. Mass and surface gravity
7. Mean distance from the Sun (AU and km/miles)
8. Rotation period and day length (sidereal vs solar day explained)
9. Orbital period and velocity
10. Axial tilt and seasonal variation
11. Atmospheric composition and barometric pressure breakdown
12. Temperature extremes and measurement methodology
13. Surface geology, composition, and notable landmarks (e.g. Olympus Mons, Caloris Basin, Maxwell Montes, Great Red Spot)
14. Natural satellites (confirmed vs provisional) and ring systems
15. Magnetic field and multi-layered internal structure (Crust, Mantle, Core)
16. Weather and atmospheric phenomena (super-rotation, dust storms, diamond rain)
17. Robotic exploration history and major missions
18. Astrobiology & possibility of life (strictly distinguishing evidence from hypothesis)
19. Verified interesting facts
20. Side-by-side comparison with Planet Earth
21. Frequently asked questions accordion
22. Authoritative references and primary data links

### 3. Celestial Objects Directory
Dedicated exploration section covering:
- **Dwarf Planets**: Pluto, Ceres, Eris, Haumea, and Makemake. Includes an in-depth explainer on the **2006 IAU Resolution 5A** and why Pluto was reclassified.
- **Natural Satellites**: Earth's Moon (Luna), Europa (subsurface ocean), Ganymede (intrinsic magnetic field), Io (active sulfur volcanism), Callisto, Titan (liquid methane lakes), Enceladus (cryovolcanic plumes), Triton (retrograde captured KBO), Phobos, and Deimos.
- **Circumstellar Regions & Objects**: The Asteroid Belt, Kuiper Belt, Oort Cloud, 1P/Halley's Comet, and planetary rings.

### 4. Interactive Learning Utilities
- **Side-by-Side Planet Comparison Tool** (`/compare`): Select 2 to 4 planets and compare diameter, mass, surface gravity, temperature, distance, orbital year, and moons with normalized comparative visual charts.
- **Astronomy Mastery Quiz** (`/quiz`): Beginner, Intermediate, and Advanced difficulty modes with multiple-choice questions, immediate feedback, scientific explanations, and certification score badges.
- **Planetary Age Calculator** (`/calculators`): Computes your biological age across planets based on orbital periods, with a next-birthday countdown in Earth days.
- **Surface Weight Comparison Calculator** (`/calculators`): Computes gravitational force on your body across the Sun, planets, and moons ($W = m \cdot g$), with clear physics explanations distinguishing mass from weight.
- **Distance & Light Travel Converter** (`/calculators`): Convert Astronomical Units into kilometers, miles, and radio signal light-time (seconds, minutes, hours).
- **Astrophysics Glossary A–Z** (`/glossary`): Searchable compendium of astrophysical terms with pronunciations, short definitions, detailed context, and governing mathematical formulas.
- **Global Search Modal** (`Cmd+K` / `Ctrl+K`): Instant debounced fuzzy search across planets, celestial bodies, missions, and glossary terms with arrow-key keyboard navigation.
- **Guided Cosmic Tour**: 7-station interactive voyage from the Sun outward to the Oort Cloud with Next, Previous, and Skip controls.
- **Space Now / NASA Telemetry** (`/space-now`): Proxied NASA Astronomy Picture of the Day (APOD) with graceful fallback to verified archives and active mission telemetry (Voyager 1, Europa Clipper, JWST, Perseverance).
- **Persistent Favorites & History** (`/favorites`): Saved bookmarks and recent browsing history stored safely in `localStorage`.
- **Live Unit Switcher**: Toggle between **Metric** (km, °C, kg, m/s²) and **Imperial** (miles, °F, lbs, ft/s²) globally.

---

## 🛠 Technology Stack

### Frontend
- **React 18** + **TypeScript**
- **Vite 6** (lightning-fast HMR and optimized bundler)
- **Tailwind CSS 3** (custom deep-space color tokens, glassmorphism, responsive grids)
- **Three.js** + **@react-three/fiber** + **@react-three/drei** (WebGL 3D Solar System)
- **React Router v6** (declarative client-side routing)
- **Lucide React** (accessible, modern icon system)

### Backend
- **Node.js** (v20+ / v24+)
- **Express.js** + **TypeScript**
- **Prisma ORM 5** (type-safe database queries and migrations)
- **SQLite** (frictionless zero-config development database)
- **PostgreSQL Ready** (seamless switch via Prisma datasource)
- **Zod** (strict schema validation for all endpoints)
- **Cors** + **Dotenv**
- **Vitest** + **Supertest** (automated test runner and API integration suite)

---

## 📁 Project Directory Structure

```
SolarVerse/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma        # Complete Prisma relational database schema
│   │   ├── seed.ts              # Database seeding script with verified space data
│   │   └── dev.db               # SQLite database instance
│   ├── src/
│   │   ├── config/              # Prisma client and connection health check
│   │   ├── controllers/         # Express request handlers
│   │   ├── data/                # Verified astronomical fallback dataset
│   │   ├── middleware/          # Centralized error handler and logging
│   │   ├── routes/              # REST API routes
│   │   ├── services/            # SpaceService business logic layer
│   │   ├── types/               # Backend data types
│   │   ├── validators/          # Zod validation schemas
│   │   └── server.ts            # Server entrypoint
│   ├── tests/
│   │   ├── api.test.ts          # Supertest REST API integration tests
│   │   ├── calculations.test.ts # Unit tests for scientific conversions
│   │   └── quiz.test.ts         # Unit tests for quiz scoring and questions
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── frontend/
│   ├── public/                  # Static assets & favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/              # SolarSystemCanvas & Fallback2DView
│   │   │   ├── calculators/     # AgeCalculator & WeightCalculator
│   │   │   ├── common/          # Navbar, Footer, SearchModal, FavoriteButton
│   │   │   ├── compare/         # ComparisonTool
│   │   │   ├── home/            # Hero, Overview, Grid, Discoveries, Timeline
│   │   │   ├── planet/          # PlanetHeader, PlanetTabs, AtmosphereChart
│   │   │   ├── quiz/            # QuizEngine
│   │   │   └── tour/            # GuidedTourModal
│   │   ├── context/             # PreferencesContext (units, favorites, history)
│   │   ├── pages/               # Routed view pages
│   │   ├── services/            # SpaceApi client layer
│   │   ├── types/               # Shared TypeScript models
│   │   ├── utils/               # Scientific conversion mathematics
│   │   ├── App.tsx              # Root router configuration
│   │   ├── main.tsx             # React DOM entrypoint
│   │   └── index.css            # Tailwind directives and custom scrollbars
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── .env.example
├── .gitignore
├── package.json                 # Root monorepo workspace scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd SolarVerse
   ```

2. **Install all dependencies** across workspaces:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   In `backend/.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   DATABASE_URL="file:./dev.db"
   NASA_API_KEY=DEMO_KEY
   FRONTEND_URL=http://localhost:5173
   ```

4. **Initialize and Seed the Database**:
   ```bash
   npm run db:push
   npm run db:seed
   ```
   *Expected output: Seeded 8 planets, 19 celestial objects, 9 missions, 12 glossary terms, 14 quiz questions, 8 space facts, and 4 scientific sources.*

---

## 💻 Running the Application

### Option A: Run Both Frontend and Backend Concurrently (Recommended)
From the root directory:
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

### Option B: Run Workspaces Individually
- **Backend API Server**:
  ```bash
  npm run dev:backend
  ```
- **Frontend Vite Dev Server**:
  ```bash
  npm run dev:frontend
  ```

---

## 🧪 Testing and Quality Assurance

Run the automated test suite powered by Vitest and Supertest:
```bash
npm test
```
All **18 automated tests** will execute and report output:
- `tests/calculations.test.ts`: Validates scientific conversions, orbital period formulas, and surface gravity math.
- `tests/api.test.ts`: Tests all REST endpoints, 404 handling, planet schema completeness, and APOD proxying.
- `tests/quiz.test.ts`: Tests quiz option counts, explanations, and score ranking mechanics.

---

## 🐘 Switching to PostgreSQL (Optional)

SOLARVERSE is built using Prisma ORM. While SQLite is pre-configured for zero-friction local development, you can switch to PostgreSQL at any time:

1. Open `backend/prisma/schema.prisma` and update the datasource provider:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Update `backend/.env` with your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/solarverse?schema=public"
   ```
3. Generate the Prisma client and push the schema:
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health check and current timestamp |
| `GET` | `/api/planets` | List all 8 major planets in heliocentric order |
| `GET` | `/api/planets/:slug` | Detailed scientific profile for a planet |
| `GET` | `/api/celestial-objects` | List dwarf planets, moons, asteroids, and comets |
| `GET` | `/api/celestial-objects/:slug`| Profile for a specific celestial body |
| `GET` | `/api/missions` | Historical and ongoing space exploration missions |
| `GET` | `/api/glossary` | A–Z Astrophysics and planetary geology glossary |
| `GET` | `/api/quiz/questions` | Quiz questions filtered by `difficulty` and `limit` |
| `GET` | `/api/facts/random` | Retrieve a randomized verified space fact |
| `GET` | `/api/search?q=:query` | Global debounced search across all models |
| `GET` | `/api/space/apod` | Proxied NASA Astronomy Picture of the Day with fallback |

---

## 🔬 Scientific Data Sources & Citations

1. **NASA Goddard Space Flight Center**: [Planetary Fact Sheets](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) (Physical, orbital, and atmospheric data).
2. **NASA Science Mission Directorate**: [Solar System Exploration](https://science.nasa.gov/solar-system/).
3. **International Astronomical Union (IAU)**: [Resolution 5A on the Definition of a Planet](https://www.iau.org/news/pressreleases/detail/iau0603/).
4. **European Space Agency (ESA)**: [Science & Exploration Archives](https://www.esa.int/Science_Exploration).
5. **NASA Jet Propulsion Laboratory (JPL)**: [Horizons Ephemeris System](https://ssd.jpl.nasa.gov/horizons/).

---

## 📸 Adding Screenshots
When documenting your deployment:
1. Capture screenshots of:
   - Homepage with cinematic 3D Solar System Explorer.
   - Mars or Saturn detailed profile page with tabs open.
   - Interactive Planet Comparison Tool with comparative bar charts.
   - Astronomy Mastery Quiz with score card.
   - 2D Canvas Fallback mode.
2. Save images to `docs/screenshots/` and link them here:
   ```markdown
   ![SOLARVERSE 3D Explorer](docs/screenshots/hero_3d.png)
   ```

---

## 📄 License & Educational Disclaimer
Distributed under the **MIT License**. Planetary images courtesy of NASA, ESA, JPL-Caltech, and STScI. Content is curated strictly for educational and non-commercial scientific research.
