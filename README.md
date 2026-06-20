# 🚨 Flash Rescue — Disaster Management & Resilience Platform

A reassuring, accessible, and user-friendly web application designed to provide clear guidance, resource distribution, and actionable support during disaster scenarios. Built with React + Vite, Flash Rescue prioritizes calm clarity over alarm, helping people find help when they need it most.

---

## ✨ Features

- **Calm, Empathetic UI** — Designed to reduce anxiety during high-stress situations with an organic, structured layout and a grounding color palette
- **Multi-Page Architecture** — Distinct pages covering different aspects of disaster response and recovery
- **Animated Transitions** — Smooth interactions powered by Framer Motion for a polished, reassuring experience
- **Responsive Design** — Mobile-friendly layout built with Tailwind CSS
- **Modular Component System** — Clean, reusable React components replacing the legacy static site structure

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Linting | ESLint 10 |

---

## 📁 Project Structure

```
flash-rescue/
├── public/             # Static assets
├── src/                # React source code
│   └── ...             # Components, pages, and assets
├── homepage.html       # Legacy homepage
├── index.html          # App entry point
├── page2.html          # Legacy page 2
├── page3.html          # Legacy page 3
├── page 4.html         # Legacy page 4
├── design.md           # Design specification document
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json
```

---

## 🎨 Design System

Flash Rescue follows a carefully considered design philosophy — details are in [`design.md`](./design.md).

**Color Palette:**

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#F4F7F5` / `#F9F6F0` | Light sage/sand backgrounds |
| `text-primary` | `#162E27` | Deep midnight teal for body text |
| `accent-warm` | `#D4A373` | Muted ochre for non-emergency CTAs |
| `safe-green` | `#3A5F43` | Forest green for safe/secure states |
| `alert-soft` | `#E07A5F` | Soft terracotta for active warnings |
| `surface` | `#FFFFFF` | Card and form backgrounds |

**Typography:**
- Headings: *Playfair Display* or *Georgia* (Serif) — authoritative yet gentle
- Body: *Inter* or *Open Sans* (Sans-Serif) — highly readable under stress

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Rajesh-041/disaster-management.git
cd disaster-management

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. See the repository for details.

---

> *"Providing calming clarity, intuitive resource distribution, and clear calls to action during high-stress situations."*
