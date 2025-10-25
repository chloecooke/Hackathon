# DuoShield Beta v0.9

**Advanced Orbital-Threat Detection System for Satellites**

DuoShield is an innovative web-based platform that predicts and visualizes dangers for satellites in real-time. Built for the AN61 Hackathon, it combines cutting-edge 3D visualization with live space data to provide comprehensive orbital threat analysis.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)
![Three.js](https://img.shields.io/badge/Three.js-r150-black.svg)

## Features

### Dual Protection System

DuoShield merges two powerful sub-systems:

#### **AZDebrisSentinel**
- Monitors satellite conjunctions and debris risks
- Uses live data from U.S. Space Command / Space-Track
- Integrates CelesTrak (T.S. Kelso) public TLE data
- Provides SOCRATES conjunction reports
- Real-time collision risk alerts

#### **AZHelioGuard**
- Tracks solar activity and Coronal Mass Ejection (CME) events
- Integrates NOAA Space Weather Prediction Center (SWPC) data
- Uses AWS Open Data Registry for space weather datasets
- Monitors space weather conditions affecting satellite operations
- Provides solar storm forecasts and alerts

### Interactive 3D Visualization
- **Real-time 3D Space Environment**: ISS model with slow rotation at center
- **18 Animated Satellites**: Multiple satellite models moving horizontally across the viewport
- **5000+ Stars**: Full 360-degree starfield with realistic distribution
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: 60fps performance with Three.js

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js with OBJLoader, MTLLoader, GLTFLoader
- **Build Tool**: Vite 7.1.14
- **Routing**: React Router DOM
- **Styling**: Modern CSS with glassmorphism effects
- **Future**: CesiumJS for 3D globe visualization

## Data Sources

1. **[U.S. Space Command / Space-Track](https://www.space-track.org)** - Satellite Catalog and Conjunction Bulletins
2. **[SpacePolicyOnline](https://spacepolicyonline.com)** - Context and policy updates
3. **[CelesTrak (T.S. Kelso)](https://celestrak.org)** - Public TLE data and SOCRATES reports
4. **[NOAA SWPC](https://www.swpc.noaa.gov)** - Space weather forecasts, indices, and alerts
5. **[AWS Open Data Registry](https://registry.opendata.aws)** - NOAA space weather datasets

## Installation

```bash
# Clone the repository
git clone https://github.com/Michael1384/AZSpaceB.git
cd AZSpaceB

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

## How It Works

DuoShield continuously ingests real-time debris and solar data through various APIs, runs predictive analysis through the AZ Space backend engine, and visualizes threats on an interactive 3D interface. The system provides:

- **Risk Level Assessment**: Color-coded threat levels for satellite operators
- **Predictive Analytics**: Machine learning-based conjunction predictions
- **Mitigation Suggestions**: Recommended actions to avoid collisions
- **Real-time Monitoring**: Live updates from multiple data sources
- **Visual Alerts**: 3D visualization of threat zones and safe orbits

## Project Structure

```
AZSpaceB/
├── public/
│   ├── models/              # 3D satellite and ISS models
│   │   ├── iss.glb
│   │   ├── satellite1-5.obj
│   │   └── ...
│   └── AZSpaceLogo.png
├── src/
│   ├── components/
│   │   ├── ThreeBackground.tsx    # 3D scene renderer
│   │   ├── Header.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer component
│   ├── pages/                     # Route pages
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # Styling
│   └── main.tsx                   # Entry point
├── package.json
└── README.md
```

## Features Showcase

- **Transparent Glassmorphism UI**: Modern design with backdrop blur effects
- **Conditional Background Blur**: Different blur levels for home vs other pages
- **Responsive Navigation**: Active state highlighting with smooth transitions
- **Animated Components**: Pulse, shimmer, and fade animations
- **Optimized Performance**: High-performance rendering with stencil buffer disabled

## Contributing

This project was created for the ANT61 Hackathon. Contributions, issues, and feature requests are welcome!

## License

© 2025 AZ Space — Built for AN61 Hackathon Prompt

## Acknowledgments

- U.S. Space Command for satellite tracking data
- NOAA Space Weather Prediction Center for solar activity data
- T.S. Kelso and CelesTrak for orbital element data
- Three.js community for 3D rendering capabilities
- NASA for 3D model references

## Contact

**Michael1384** - [@Michael1384](https://github.com/Michael1384)

Project Link: [https://github.com/Michael1384/AZSpaceB](https://github.com/Michael1384/AZSpaceB)

---

 **Star this repository if you find it useful!**
