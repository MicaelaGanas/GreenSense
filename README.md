# GreenSense | Smart Insights for Small Greenhouse Farmers

GreenSense is a modern, responsive landing page designed for an agricultural technology platform. The project aims to provide small-scale greenhouse farmers with data-driven insights to improve crop health, reduce waste, and increase profits.

## 📖 Project Overview

This project is a high-fidelity frontend implementation of a SaaS landing page. It focuses on a clean, organic, yet professional user interface that builds trust with the target audience (farmers and agricultural operators).

**Key Features:**
*   **Dynamic Component Loading:** The site uses a custom JavaScript loader to inject HTML components, keeping the codebase modular and maintainable.
*   **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
*   **Interactive Elements:** Features scroll-triggered animations, hover effects, and dynamic content sliders.

## 🎨 Design System

The design philosophy balances "Organic Warmth" with "Tech Professionalism."

### Color Palette
*   **Primary Green:** `#1B4D3E` (Deep, professional forest green)
*   **Accent Gold:** `#F4A261` (Harvest gold for CTAs and highlights)
*   **Backgrounds:** Cream/Beige for warmth, clean White for data cards.
*   **Text:** Dark charcoal for readability.

### Typography
*   **Headings:** `Playfair Display` - A serif font that adds elegance and authority.
*   **Body:** `Inter` - A clean, modern sans-serif for high readability on screens.

### Visual Style
*   **Glassmorphism:** Used in the "Future" section for a modern tech feel.
*   **Card Layouts:** Clean, shadowed cards for features and benefits.
*   **Organic Shapes:** Rounded corners and wave dividers to break up the grid.

## ⚙️ Technical Implementation

### Component-Based Architecture
Instead of a monolithic HTML file, the project is broken down into reusable components. A custom JavaScript function fetches these partials at runtime:
*   `index.html` acts as the shell.
*   `components/*.html` contain specific sections (Hero, Features, Footer, etc.).

### CSS Architecture
Styles are modularized to prevent conflicts:
*   `main.css`: Handles global variables, reset, and typography.
*   `css/components/*.css`: Contains specific styles for each section (e.g., `hero.css`, `future.css`).

### Animations
*   **Scroll Reveal:** Uses `IntersectionObserver` to fade elements in as the user scrolls.
*   **Image Slideshow:** Custom CSS keyframe animations for the "Future" section.

## 🛠 Technologies Used

*   **HTML5:** Semantic structure.
*   **CSS3:** Flexbox, CSS Grid, CSS Variables, Keyframe Animations.
*   **JavaScript (ES6+):** Fetch API for components, DOM manipulation for interactivity.
*   **Font Awesome:** For UI icons.
*   **Google Fonts:** Typography integration.

## 📂 File Structure

```text
/FA2
│
├── index.html              # Main entry point (Shell)
├── README.md               # Project documentation
│
├── components/             # HTML Partials
│   ├── header.html
│   ├── hero.html
│   ├── features.html
│   ├── benefits.html
│   ├── future.html
│   └── ... (other sections)
│
├── css/
│   ├── main.css            # Global styles & variables
│   └── components/         # Component-specific styles
│       ├── hero.css
│       ├── header.css
│       ├── future.css
│       └── ...
│
└── js/
    └── script.js           # Component loader & interaction logic
