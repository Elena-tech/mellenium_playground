Below is a **revised README.md** that reflects a **separated styles** folder and an **atomic design** structure. Adapt the paths, folder names, and file references as needed to match your exact setup.

---

# Millennium Website Playground

A **work-in-progress** recreation of the [Millennium](https://www.mlp.com/) website using **React**, **TypeScript**, **CSS Modules**, **Framer Motion**, and **react-countup**. This project follows **atomic design principles** and separates **components** from **styles** for maintainability and scalability.

> **Disclaimer:** This is **not** the official Millennium website—just a personal playground to practice front-end development skills and animations.

---

## Features

- **Atomic Design Structure**  
  - **Atoms**: Simple, reusable elements (e.g., buttons, headings).  
  - **Molecules**: Combinations of atoms (e.g., a Navbar).  
  - **Organisms**: Complex sections (e.g., Hero, Stats).  
  - **Styles** are separated into dedicated folders to keep code organized.

- **Hero Section**  
  - Dotted background animation using pure CSS keyframes.  
  - Centered text (Prata for `<h1>`, Nimbus Sans for `<p>`) with Framer Motion animations.  
  - Scroll-based button that changes shape (circle to rectangle) and disappears.

- **Stats Section**  
  - Single-column layout with large numeric values on the left, labels on the right, and horizontal dividing lines.  
  - Scroll-triggered fade/slide animations (Framer Motion).  
  - Animated count-up using `react-countup`.

- **Responsive Layout**  
  - Mobile-friendly design with media queries.  
  - Example of a (work-in-progress) hamburger menu in the **Navbar**.

- **Advanced Animations**  
  - **Framer Motion** orchestrations for hero text, stats, button states, and more.  
  - **CSS keyframes** for background effects.


## Getting Started

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/YourUsername/millennium-website-playground.git
   cd millennium-website-playground
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Run the Development Server**  
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Dependencies

- **React + TypeScript**: Core UI library with static typing.  
- **CSS Modules**: Scoped CSS for each component.  
- **Framer Motion**: Advanced animation and scroll orchestration.  
- **react-countup**: Number animations for stats.  
- **(Optional) Licensed Fonts**: Prata, Nimbus Sans, or fallback fonts from Google Fonts.

---

## Status

- **Work in Progress**:  
  - Additional sections (footer, “Make an impact,” etc.) are in progress.  
  - Navbar hamburger menu is partially implemented.  
  - Further styling and polishing needed for a closer match to the real site.

---

## Contributing

- **Pull Requests**: Welcome! Feel free to open an issue or PR if you have ideas.  
- **Feedback**: Suggestions on layout, animations, or code organization are appreciated.

---

## License

This project is licensed under the [MIT License](LICENSE).  
**Educational use only**—not affiliated with the official Millennium website.
