# 🏢 TwinKampus: The Campus Twin

TwinKampus is a solo-driven Digital Twin project that creates an interactive, web-based 3D replica of a real-world campus or environment. This project combines AutoCAD modeling with a React and Three.js frontend to visualize building structures in the browser—perfect for portfolios and hands-on experience in 3D modeling, web development, and interactive visualization.

---

## 🚀 Project Overview

This self-paced project walks you through building:

* 🧱 Simplified 3D models using AutoCAD or Fusion 360
* 🌐 A responsive React-based website
* 🔮 A browser-based 3D viewer using Three.js

It reflects best practices in modern Digital Twin architecture—lightweight, immersive, and ideal for skill-building.

---

## 🛠 Tech Stack

| Category          | Tools / Tech                              |
| ----------------- | ----------------------------------------- |
| 3D Modeling       | AutoCAD (or Fusion 360 / Blender)         |
| Web Framework     | React.js (with JSX, components, routing)  |
| 3D Rendering      | Three.js (with GLTFLoader, OrbitControls) |
| Deployment        | GitHub Pages / Vercel                     |
| Development Tools | Node.js, VS Code, Git, GitHub             |

---

## 📸 Preview

![3D Campus Viewer Preview](./preview.png)

> Note: Replace this image with an actual screenshot once the project is ready.

---

## 📦 Features

* 📀 Accurate 3D campus models using primitives and real-world scale
* 🧱 Intuitive UI with zoom, rotate, and pan capabilities
* 🖱 Mouse-interactive camera controls using OrbitControls
* 💡 Dynamic lighting and material rendering
* 🏷 Labeling and tooltips for buildings
* 🌐 One-click deployment on GitHub Pages or Vercel

---

## 🧠 Setup Instructions

### 🔧 Step 1: Install Requirements

* [AutoCAD Student Version](https://www.autodesk.com/education/edu-software/overview)
* [Node.js + npm](https://nodejs.org/)
* [VS Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [React App Setup](https://reactjs.org/docs/create-a-new-react-app.html)

### 📦 Step 2: Clone & Install

```bash
git clone https://github.com/yourusername/TwinKampus.git
cd TwinKampus
npm install
```

### 🏄 Step 3: Run Locally

```bash
npm start
```

---

## 🧱 Model Export & Integration

* Export AutoCAD/Fusion 360 models as `.glb` or `.obj`
* Place exported models in the `/public/models` folder
* Load models using `GLTFLoader` or `OBJLoader` in your Three.js scene

---

## 🌍 Deployment

### Deploy on GitHub Pages

```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

### Deploy on Vercel

* Login to [Vercel](https://vercel.com/)
* Connect your GitHub repository
* Deploy directly via the Vercel dashboard

---

## 📖 Tutorials Followed

* AutoCAD 3D Beginner Series (YouTube)
* React Beginner Crash Course – [Traversy Media](https://youtu.be/w7ejDZ8SWv8)
* Three.js Journey – [Three.js Docs](https://threejs.org/docs/)

---

## 🗓 Project Status

* ✅ 3D Model of Main Campus Building Complete
* ✅ Three.js Scene Setup
* ✅ OrbitControls, Lighting, and Labels
* 🚧 Additional UI (Mini-map, Search)
* 🚀 Deployment on Vercel

---

## 📋 Learnings & Challenges

### 📌 Learnings

* Converting CAD files to browser-compatible formats
* Integrating GLTF models with React components
* Optimizing render performance in Three.js

### ⚠️ Challenges

* Handling large model sizes efficiently
* Aligning coordinate systems between CAD and Three.js

---

## 👨‍💼 Author

**Pushpender Yaduvanshi**
[GitHub](https://github.com/rpyaduvanshi950) • [LinkedIn](https://linkedin.com/in/rpyaduvanshi950)]
---

## ⭐️ Star This Repo

If you found this project helpful, consider giving it a ⭐ on GitHub!
