# Advice Generator App - Monietab Frontend Internship Solution

This is my solution to the Frontend Internship advice generator challenge.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [How I Structured the Code](#how-i-structured-the-code)
  - [What I Learned](#what-i-learned)
  - [Key Engineering Decisions](#key-engineering-decisions)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

The goal was to build a clean advice generator where users can:
- View an optimal layout across mobile and desktop screen sizes.
- See hover and focus effects on all interactive elements.
- Generate a new piece of advice every time they click the dice button.
- Experience clear loading, fetching, and error states.

### Screenshot

![Advice Generator Screenshot](./screenshot.png)

### Links

- **GitHub Repository:** [https://github.com/Tobiscus100/advice-generator](https://github.com/Tobiscus100/advice-generator)
- **Live Site:** [https://advicemain.netlify.app](https://advicemain.netlify.app)

---

## My Process

### Built With

- **React & Vite** - For building a fast, component-based user interface.
- **TypeScript** - For type safety and defining clean data contracts for the API response.
- **Tailwind CSS** - For styling, custom color variables, and responsive utility classes.
- **TanStack Query (React Query)** - For handling API requests, caching, and fetch states.
- **Semantic HTML5** - Using accessible elements (`main`, `blockquote`, `button`).

### How I Structured the Code

I wanted to make sure the codebase remained clean, modular, and easy to maintain. I separated the concerns into distinct folders:

```text
src/
├── types/
│   └── advice.ts          # TypeScript interfaces for API data
├── services/
│   └── adviceApi.ts       # Network layer and API fetch calls
├── hooks/
│   └── useAdvice.ts       # Custom hook wrapping TanStack Query
├── components/
│   ├── AdviceCard.tsx     # Main card component handling state & rendering
│   ├── AdviceDivider.tsx  # Responsive SVG divider using <picture>
│   └── DiceButton.tsx     # Interactive button with hover and active states
├── App.tsx                # QueryClient setup and layout container
├── main.tsx               # App entry point
└── index.css              # Global styles & Tailwind configuration
What I Learned
1. Handling Aggressive CDN Caching in Third-Party APIs
The Advice Slip API caches requests at the CDN layer. When a user requests fresh advice consecutively, standard fetch calls often return identical cached responses. Appending an epoch timestamp parameter forces the browser and intermediate edge caches to treat every dice roll as a distinct request:

TypeScript
export const fetchRandomAdvice = async (): Promise<AdviceSlip> => {
  const response = await fetch(`[https://api.adviceslip.com/advice?timestamp=$](https://api.adviceslip.com/advice?timestamp=$){Date.now()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch advice (Status: ${response.status})`);
  }
  const data: AdviceResponse = await response.json();
  return data.slip;
};
2. Accessible Dynamic Content with ARIA Live Regions
Screen readers require announcements when DOM nodes change dynamically without a page refresh. Wrapping the quote container in aria-live="polite" ensures assistive technologies communicate new advice without disrupting the user:

TypeScript
<div aria-live="polite" className="min-h-[100px] flex items-center justify-center">
  {isLoading ? (
    <p className="text-[#cee3e9]/50 text-xl font-bold animate-pulse">Fetching wisdom...</p>
  ) : (
    <blockquote className="text-[#cee3e9] text-[24px] md:text-[28px] font-extrabold">
      “{data?.advice}”
    </blockquote>
  )}
</div>
Key Engineering Decisions
Separation of Concerns: Business logic and data fetching are isolated into services/adviceApi.ts and hooks/useAdvice.ts, keeping UI components purely declarative.

Accessible Interaction: The dice trigger is an explicit <button> with an aria-label="Get a new piece of advice", dedicated keyboard focus rings (focus-visible:ring-4), and disabled state management during network inflight requests.

Responsive Visual Assets: The divider uses the HTML5 <picture> element with <source media="(min-width: 640px)"> to swap between mobile and desktop SVG divider assets natively without JavaScript layout listeners.

Continued Development
Add a copy-to-clipboard feature so users can share quotes.

Implement persistent history tracking via localStorage allowing users to view previous advice items generated in the current session.

Add animation transitions using Framer Motion for text entry and exit effects.

Useful Resources
TanStack Query Documentation - Clear reference for configuring cache times and manual refetch triggers.

MDN Web Docs - ARIA Live Regions - Guided accessible patterns for dynamic asynchronous content.

Tailwind CSS Documentation - Helpful for building arbitrary drop shadows and glow effects.

Author
GitHub: @Tobiscus100

Acknowledgments
Thanks to Monietab and the Frontend Mentor community for providing the challenge specifications, design assets, and styling guides.