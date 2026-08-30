# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the "Editorial Serif + Teal" design system (spec: `docs/superpowers/specs/2026-08-31-portfolio-redesign-design.md`) across all 8 pages of the `AparnaDeshpande-IISER` Vue 3 + Vite + Tailwind v4 site — new color/type tokens, a Centered Editorial homepage, restyled shared components, and cleanup of dead code / broken CSS classes found along the way — with zero changes to visible text or image files.

**Architecture:** All work happens inside `AparnaDeshpande-IISER/`. A foundation task defines CSS custom-property tokens and font imports in `src/CSS/base.css` (Tailwind v4 CSS-first `@theme`), plus two small shared primitives (`.card`/`.eyebrow`/`.section-rule` utility classes and a `PageHeader.vue` component). Every subsequent task is a self-contained page/component cluster that consumes those tokens — no task depends on a later one.

**Tech Stack:** Vue 3 (`<script setup>` SFCs), Vite, Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first config — no `tailwind.config.js`), `@fontsource-variable/fraunces` + `@fontsource-variable/inter` (new deps), `vue3-carousel` (existing dep, untouched).

## Global Constraints

- **No content changes.** Every existing text string (bio copy, publication titles/citations, names, dates, quote text, link hrefs, alt text) must appear byte-for-byte identical after this work — including existing typos in prose (e.g. "disovery", "ditigal"). Only markup structure, CSS classes, and component wiring may change. No image files are added, removed, replaced, or re-cropped.
- Keep all 8 nav items, their labels, and their routes exactly as they are today (`/`, `/About_Me`, `/STM_Lab`, `/ResearchAreas`, `/ResearchGroup`, `/Publications`, `/Outreach`, `/Science_Ed`) — no IA regrouping.
- Publications page keeps its card-grid layout (not converted to a list/timeline).
- Light/dark theming is driven only by `prefers-color-scheme` — no toggle UI, no `dark:` class strategy.
- Tailwind v4 is configured CSS-first (`@import "tailwindcss"` in `src/CSS/base.css`) — new design tokens go into an `@theme` block there, not a new config file.
- `vite.config.js`'s `base: '/portfolio/'` and `build.outDir: 'build'` must keep working (`npm run build` is the gh-pages deploy source) — don't touch `vite.config.js`.
- Fonts are self-hosted via `@fontsource` packages (no Google Fonts / CDN `<link>` tags).
- Only fix **code-level** bugs (broken/nonsense Tailwind classes like `brounded-full`, `broder-2`, `text-bold`; dead/unused code) as cleanup — never fix wording typos in prose content.

All commands below are run from `AparnaDeshpande-IISER/` (the actual Vite project root, one level under the git repo root).

---

### Task 1: Design tokens, fonts, and shared style primitives

**Files:**
- Modify: `src/CSS/base.css`
- Modify: `src/main.js`
- Modify: `package.json` (via `npm install`)

**Interfaces:**
- Consumes: nothing.
- Produces: CSS custom properties `--color-bg`, `--color-surface`, `--color-ink`, `--color-ink-muted`, `--color-accent`, `--color-accent-soft`, `--color-line` (and their generated Tailwind utilities `bg-bg`, `text-ink`, `border-accent`, etc.); `font-serif`/`font-sans` utility overrides; utility classes `.eyebrow`, `.section-rule`, `.card`; a global `a` style. All later tasks use these.

- [ ] **Step 1: Install the font packages**

```bash
npm install @fontsource-variable/fraunces @fontsource-variable/inter
```

- [ ] **Step 2: Confirm the exact font-family names the packages register**

```bash
grep -m1 "font-family" node_modules/@fontsource-variable/fraunces/index.css
grep -m1 "font-family" node_modules/@fontsource-variable/inter/index.css
```

Expected: lines containing `font-family: 'Fraunces Variable';` and `font-family: 'Inter Variable';`. If either package prints a different family name, use that exact string in Step 3 instead of `"Fraunces Variable"` / `"Inter Variable"`.

- [ ] **Step 3: Replace `src/CSS/base.css` with:**

```css
/* base.css */

@import "tailwindcss";

@theme {
  --color-bg: #fbfaf8;
  --color-surface: #ffffff;
  --color-ink: #1f2937;
  --color-ink-muted: #6b7280;
  --color-accent: #0f766e;
  --color-accent-soft: #f0fdfa;
  --color-line: #e5e7eb;

  --font-serif: "Fraunces Variable", Georgia, serif;
  --font-sans: "Inter Variable", -apple-system, BlinkMacSystemFont, sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #14171a;
    --color-surface: #1c2024;
    --color-ink: #e5e7eb;
    --color-ink-muted: #9ca3af;
    --color-accent: #2dd4bf;
    --color-accent-soft: rgba(45, 212, 191, 0.12);
    --color-line: #2d333b;
  }
}

@layer base {
  a {
    color: var(--color-accent);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
}

@layer components {
  .eyebrow {
    @apply font-sans text-xs font-semibold uppercase tracking-widest text-accent;
  }

  .section-rule {
    @apply mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent;
  }

  .card {
    @apply rounded-xl border border-line bg-surface p-6 transition hover:border-accent/50 hover:shadow-sm;
  }
}

/* Custom scrollbar styling, themed via the tokens above */
::-webkit-scrollbar {
  width: 8px;
  background-color: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-line);
  border-radius: 6px;
}

/* Smooth transition when the OS color-scheme flips */
body, [class*="bg-"], [class*="text-"] {
  transition: background-color 0.2s, color 0.2s;
}
```

- [ ] **Step 4: Replace `src/main.js` with:**

```js
import { createApp } from 'vue'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/inter'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

- [ ] **Step 5: Verify**

```bash
npm run lint
npm run build
```

Expected: both succeed with no errors.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json src/CSS/base.css src/main.js
git commit -m "feat: add editorial serif+teal design tokens and fonts"
```

---

### Task 2: Shared `PageHeader` component

**Files:**
- Create: `src/components/PageHeader.vue`

**Interfaces:**
- Consumes: `.eyebrow`/`.section-rule` (Task 1), `font-serif`/`text-ink` tokens (Task 1).
- Produces: `PageHeader` component, prop `title: String` (required) — renders a centered serif `<h1>` with the accent underline rule beneath it. Used by Tasks 5, 6, 7, 9, 10.

- [ ] **Step 1: Create `src/components/PageHeader.vue`**

```vue
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="mt-10 text-center">
    <h1 class="font-serif text-3xl font-semibold text-ink sm:text-4xl">{{ title }}</h1>
    <div class="section-rule"></div>
  </div>
</template>
```

- [ ] **Step 2: Verify**

```bash
npm run lint
npm run build
```

Expected: both succeed (component isn't consumed yet, but must be valid on its own).

- [ ] **Step 3: Commit**

```bash
git add src/components/PageHeader.vue
git commit -m "feat: add shared PageHeader component"
```

---

### Task 3: Navigation and app shell

**Files:**
- Modify: `src/components/NavigationBar.vue`
- Modify: `src/App.vue`

**Interfaces:**
- Consumes: tokens (Task 1).
- Produces: page shell — `App.vue`'s `<main>` (`mx-auto max-w-7xl px-4 sm:px-6`) is now the container every routed view renders inside; no view should add its own `max-w-7xl mx-auto` wrapper going forward.

- [ ] **Step 1: Replace `src/components/NavigationBar.vue` with:**

```vue
<template>
  <header class="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
      <router-link to="/" class="font-serif text-lg font-semibold text-ink">
        Dr. &nbsp; Aparna Deshpande
      </router-link>

      <!-- Nav Links (desktop) -->
      <nav class="hidden items-center gap-1 sm:flex">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:text-accent"
          :class="$route.path === item.to ? 'text-accent' : ''"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Hamburger menu button (mobile) -->
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-ink sm:hidden"
        aria-controls="mobile-menu"
        :aria-expanded="isOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          v-if="!isOpen"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 8h16M4 16h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav v-if="isOpen" id="mobile-menu" class="space-y-1 border-t border-line px-4 pb-4 pt-2 sm:hidden">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="block rounded-md px-3 py-2 text-base font-medium text-ink-muted hover:text-accent"
        :class="$route.path === item.to ? 'text-accent' : ''"
        @click="isOpen = false"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);

import { useRoute } from 'vue-router';
const $route = useRoute();

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/About_Me', label: 'About Me' },
  { to: '/STM_Lab', label: 'STM Lab' },
  { to: '/ResearchAreas', label: 'Research Areas' },
  { to: '/ResearchGroup', label: 'Research Group' },
  { to: '/Publications', label: 'Publications' },
  { to: '/Outreach', label: 'Outreach' },
  { to: '/Science_Ed', label: 'Science Ed' }
];
</script>
```

- [ ] **Step 2: Replace `src/App.vue` with:**

```vue
<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="min-h-screen bg-bg font-sans text-ink">
    <NavigationBar></NavigationBar>
    <main class="mx-auto max-w-7xl px-4 sm:px-6">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
```

(This drops the previous unused `import HomePage from './components/BulletinBoard.vue';` line, which was dead code — nothing in the template referenced it.)

- [ ] **Step 3: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Open the printed local URL. Confirm: header is sticky, shows the name as a wordmark linking home, desktop nav links show an active teal-colored link for the current route, and the mobile hamburger (narrow window) opens a dropdown without overlapping other elements.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavigationBar.vue src/App.vue
git commit -m "feat: redesign nav bar and app shell"
```

---

### Task 4: Home page (Centered Editorial layout)

**Files:**
- Modify: `src/views/HomePage.vue`
- Modify: `src/components/ProfileInfo.vue`
- Modify: `src/components/BulletinBoard.vue`
- Modify: `src/components/FootQuote.vue`

**Interfaces:**
- Consumes: tokens (Task 1), app shell (Task 3).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/HomePage.vue` with:**

```vue
<script setup>
import ProfileInfo from '../components/ProfileInfo.vue';
import FootQuote from '../components/FootQuote.vue';
import BulletinBoard from '@/components/BulletinBoard.vue';
</script>

<template>
  <div class="mx-auto max-w-3xl py-10 sm:py-16">
    <div class="flex flex-col items-center text-center">
      <img
        class="h-32 w-32 rounded-full object-cover object-top shadow ring-4 ring-surface sm:h-40 sm:w-40"
        src="../assets/profile.png"
        alt="propic"
      />
      <div class="mt-6 w-full">
        <ProfileInfo></ProfileInfo>
      </div>
    </div>

    <div class="mt-12">
      <BulletinBoard></BulletinBoard>
    </div>

    <div class="mt-12">
      <FootQuote></FootQuote>
    </div>
  </div>
</template>

<style>
    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }
</style>
```

(This drops the `.img-frame img { ... }` rule — grep confirms no element in `src/` uses class `img-frame`, so it was dead CSS.)

- [ ] **Step 2: Replace `src/components/ProfileInfo.vue` with:**

```vue
<template>
  <div class="flex w-full max-w-md flex-col items-center space-y-3">
    <h1 class="font-serif text-3xl font-semibold text-ink sm:text-4xl">Dr. &nbsp; Aparna Deshpande</h1>
    <p class="eyebrow">Associate Professor<br/>IISER Pune</p>

    <div class="mt-2 flex items-center space-x-2">
      <img src="../assets/icons/mail-icon.jpg" alt="mailto" class="h-4 w-7"/>
      <span class="ml-2 font-sans text-base text-ink-muted">aparna.d@iiserpune.ac.in</span>
    </div>

    <div class="flex justify-center space-x-6 sm:mt-2">
      <a href="https://www.iiserpune.ac.in/research/department/physics/people/faculty/regular-faculty/aparna-deshpande/259" title="IISER Pune">
        <img src="../assets/icons/logo_iiser_pune.jpg" alt="IISER Logo" class="h-10 w-10 rounded-full border-2 border-line"/>
      </a>
      <a href="https://www.linkedin.com/in/aparna-deshpande-01927015/" title="LinkedIn">
        <img src="../assets/icons/logo_linkedin.jpg" alt="LinkedIn" class="h-10 w-10 rounded-full border-2 border-line p-1"/>
      </a>
      <a href="https://twitter.com/DrAparnaIISERP" title="Twitter">
        <img src="../assets/icons/logo_twitter.jpg" alt="Twitter" class="h-10 w-10 rounded-full border-2 border-line"/>
      </a>
      <a href="https://scholar.google.co.in/citations?user=f5FnqMIAAAAJ&hl=en" title="Google Scholar">
        <img src="../assets/icons/logo_google_scholar.jpg" alt="Google Scholar" class="h-10 w-10 rounded-full border-2 border-line p-1"/>
      </a>
    </div>
  </div>
</template>

<script setup>
// No JavaScript needed unless you want to add interactivity.
</script>
```

- [ ] **Step 3: Replace `src/components/BulletinBoard.vue` with:**

```vue
<template>
  <div class="flex flex-col items-start justify-center gap-8 sm:mt-12 md:flex-row">
    <!-- Bulletin Board -->
    <div class="card w-full border-t-4 border-t-accent">
      <!-- Board header -->
      <div class="mb-4 flex items-center gap-3">
        <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <h3 class="font-serif text-xl font-semibold tracking-tight text-ink">
          STM Lab News Feed
        </h3>
      </div>

      <ul class="h-50 gap-2 space-y-4 overflow-y-scroll sm:h-full sm:overflow-y-hidden">
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Vacancies for 2 PhD and 2 iPhD Students.<br/>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7452325477958021120/" class="transition hover:underline">Enquire Here !</a>
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Congratulations to Vaibhav Walve for defending his PhD thesis successfully! 
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Congratulations to Vaibhav for receiving the prestigious <a href="https://anrfonline.in/ANRF/npdf" target="_blank" rel="noopener" class="transition hover:underline">ANRF postdoctoral fellowship</a>.<br/> Vaibhav will carry out his postdoctoral research work at NCL
          under the mentorship of Dr. Kirandeep Singh at <a href="http://academic.ncl.res.in/kp.singh" target="_blank" rel="noopener" class="transition hover:underline">NCL (Pune)</a>.
        </li>
        <li class="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-ink">
          Conversation in <a href="https://www.youtube.com/watch?v=1hkg2OmUc2A&t=14s" target="_blank" rel="noopener" class="transition hover:underline">Dr. Pavan's podcast Pratidhvani Humanizing Science</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>
```

(This drops the `const bulletins = [...]` array from the old `<script setup>` — it was never referenced in the template, confirmed dead code. The four `<li>` items and their link text/hrefs are unchanged.)

- [ ] **Step 4: Replace `src/components/FootQuote.vue` with:**

```vue
<script setup></script>

<template>
  <div class="w-full text-center">
    <div class="mx-auto mt-5 max-w-xl px-4 sm:mt-5">
      <blockquote class="font-serif text-lg italic text-ink sm:text-2xl">" The test of all knowledge is experiment. "</blockquote>
      <div class="mt-4 font-sans text-sm font-medium text-ink-muted sm:text-base">- RICHARD FEYNMAN</div>
    </div>
  </div>
</template>
```

- [ ] **Step 5: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/`. Confirm: circular photo, centered name/role/email/social icons, "Lab Notes" panel below with all 4 bulletin items and working links, Feynman quote at the bottom. Diff-check text: `git diff -- src/components/ProfileInfo.vue src/components/BulletinBoard.vue src/components/FootQuote.vue src/views/HomePage.vue` and confirm every changed line is a class/tag/attribute, never a wording change.

- [ ] **Step 6: Commit**

```bash
git add src/views/HomePage.vue src/components/ProfileInfo.vue src/components/BulletinBoard.vue src/components/FootQuote.vue
git commit -m "feat: redesign home page as centered editorial layout"
```

---

### Task 5: About page

**Files:**
- Modify: `src/views/AboutView.vue`
- Modify: `src/components/PastTrajectory.vue`

**Interfaces:**
- Consumes: tokens (Task 1), `PageHeader` (Task 2).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/AboutView.vue` with:**

```vue
<template>
  <div>
    <PageHeader title="Who is Dr. Aparna Deshpande ..?"></PageHeader>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2">
      <div class="flex w-full items-center justify-center">
        <img class="rounded-xl" src="../assets/propic.png" alt="">
      </div>
      <div>
        <PastTrajectory></PastTrajectory>
      </div>
    </div>
    <hr class="my-10 h-px border-0 bg-line">
    <div class="mx-2 mt-2">
      <div class="mx-1 mt-5 text-justify text-ink sm:mx-10">
        As a physics faculty member of <a href="https://www.iiserpune.ac.in/">IISER Pune.</a>. I welcome you here. 
        The research in my lab involves exploration of surfaces and interfaces of 2D materials and strongly correlated materials using scanning tunneling microscopy (STM) and spectroscopy (STS). 
        I am also motivated by teaching and learning of physics in particular and science in general. Connecting to lay persons about what I teach and research is also very special to me.  
        The <a href="https://www.iiserpune.ac.in/engage/outreach-and-training/science-activity-centre">Smt. Indrani Balan Science Activity center</a> on our IISER campus is the hub of outreach activities and teacher training projects.
        <p>
          <br/>My teaching at IISER Pune covers UG lab courses and ditigal electronics course. During the pandemic I coordinated the introductory physics lab course where, in an unprecedented effort at IISER Pune across all disciplines, low cost physics lab kits were sent to the students to carry out experiments at home. Vivas and exams were then conducted in the online mode.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import PastTrajectory from '@/components/PastTrajectory.vue';
</script>
```

Note: "ditigal" is an existing prose typo — leave it exactly as-is, it is content, not a class name.

(The old `<style scoped> a { ... }</style>` block is dropped — its blue/purple/red link colors are superseded by the global `a` style from Task 1, so keeping a local override would just fight it.)

- [ ] **Step 2: Replace `src/components/PastTrajectory.vue` with:**

```vue
<template>
    <div class="mt-10 ml-5 mr-5">
        <ol class="relative mt-5 border-s border-line">    
          <li class="mb-5 ms-4">
              <div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-surface bg-accent"></div>
              <div class="mb-1 text-l font-normal leading-none text-ink-muted">Associate Professor</div>
              <time class="mb-1 text-sm font-normal leading-none text-ink-muted"><i>[2025 - Current]</i></time>
              <p class="mb-4 text-base font-normal text-ink-muted">
                <a href="http://iiserpune.ac.in/">IISER Pune</a>
              </p>
          </li>
          <li class="mb-5 ms-4">
              <div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-surface bg-accent"></div>
              <div class="mb-1 text-l font-normal leading-none text-ink-muted">Assistant Professor</div>
              <time class="mb-1 text-sm font-normal leading-none text-ink-muted"><i>[2011 - 2025]</i></time>
              <p class="mb-4 text-base font-normal text-ink-muted">
                <a href="http://iiserpune.ac.in/">IISER Pune</a>
              </p>
          </li>
          <li class="mb-5 ms-4">
              <div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-surface bg-accent"></div>
              <div class="mb-1 text-l font-normal leading-none text-ink-muted">Postdoctoral Research</div>
              <time class="mb-1 text-sm font-normal leading-none text-ink-muted"><i>[2007 - 2011]</i></time>
              <p class="mb-4 text-base font-normal text-ink-muted">
                  University of Arizona, Tucson, Arizona, USA (<a href="http://www.physics.arizona.edu/~leroy/">Prof. Brian LeRoy</a>), Northwestern University, Illinois, USA (<a href="https://www.hersam-group.northwestern.edu/">Prof. Mark Hersam)</a>
              </p>
          </li>
          <li class="mb-5 ms-4">
              <div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-surface bg-accent"></div>
              <div class="mb-1 text-l font-normal leading-none text-ink-muted">Ph. D</div>
              <time class="mb-1 text-sm font-normal leading-none text-ink-muted"><i>[2000 - 2007]</i></time>
              <p class="mb-4 text-base font-normal text-ink-muted">
                  Ohio University, USA, <a href="http://www.phy.ohio.edu/~hla/">Prof. Saw Hla</a>
              </p>
          </li>
        </ol>
    </div>
</template>
```

(Text and every href are unchanged, including the pre-existing stray `)` in "Prof. Mark Hersam)" — that's content, left alone.)

- [ ] **Step 3: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/About_Me`. Confirm: title + rule at top, photo + timeline side-by-side (stacked on mobile), timeline dots are teal, bio paragraph unchanged, all links still point to the same URLs.

- [ ] **Step 4: Commit**

```bash
git add src/views/AboutView.vue src/components/PastTrajectory.vue
git commit -m "feat: redesign about page"
```

---

### Task 6: STM Lab page

**Files:**
- Modify: `src/views/STMLabView.vue`
- Modify: `src/components/MyLabInfo.vue`

**Interfaces:**
- Consumes: tokens (Task 1), `PageHeader` (Task 2).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/STMLabView.vue` with:**

```vue
<template>
    <div>
      <MyLabInfo></MyLabInfo>
    </div>
</template>

<script setup>
import MyLabInfo from '@/components/MyLabInfo.vue';
</script>
```

(Drops the dead `class="max-w-7xl mx-auto"` that was on the `<template>` tag itself — with a multi-root template that attribute never applied to anything, and the app shell from Task 3 already constrains width. Also drops the duplicated `<style scoped> a {...}</style>` block, superseded by the Task 1 global link style.)

- [ ] **Step 2: Replace `src/components/MyLabInfo.vue` with:**

```vue
<template>
  <PageHeader title='"Visualizing, probing and manipulating matter at the atomic scale."'></PageHeader>
  <div class="m-10">
    <img class="rounded-xl" src="../assets/Lab.png" alt="STM Lab">
  </div>
  <div class="ml-5 mt-10 text-left font-serif text-2xl font-semibold text-ink">UHV-LT-STM</div>
  <div class="m-5 text-justify text-ink-muted sm:mt-7">
    Our STM Lab is located in the h-cross block of IISER campus. The h-cross block is specially designed to house all experimental physics labs. Utmost attention has been paid to details like uninterrupted power supply, vibration isolation areas, and custom built interiors for every lab.  The lab houses two major instruments:
  </div>
  <div class="m-5 mb-10 sm:mt-5">
      <ul class="flex list-outside list-disc flex-col gap-4 text-justify marker:text-accent">
          <li>Omicron STM operating in ultra high vacuum (UHV) and at low temperature (LT), 77 K and 4.2K (UHV-LT-STM) for dedicated STM, spectroscopy and atom and molecule manipulation experiments at 77 K and 4.2 K.</li>
          <li>Nanosurf atomic force microscope (AFM) and STM, table top models, for projects at room temperature (300 K) and in ambient environment</li>
          <li>Homebuilt 2D transfer system with Olympus Upright microscope</li>
      </ul>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
</script>
```

Note: the page title text (with its literal leading/trailing `"` characters) is passed unchanged into `PageHeader`'s `title` prop using single-quoted attribute syntax so the embedded double quotes don't need escaping. This also fixes the old `text-bold` class (not a real Tailwind utility — it silently did nothing, so the title always rendered at normal weight) by routing the title through `PageHeader`, which applies real `font-semibold` styling.

- [ ] **Step 3: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/STM_Lab`. Confirm: quoted title at top with rule, lab photo, "UHV-LT-STM" heading, and the 3-item instrument list with teal bullet markers — all text unchanged.

- [ ] **Step 4: Commit**

```bash
git add src/views/STMLabView.vue src/components/MyLabInfo.vue
git commit -m "feat: redesign STM lab page"
```

---

### Task 7: Research Areas page

**Files:**
- Modify: `src/views/ResearchView.vue`

**Interfaces:**
- Consumes: tokens (Task 1), `PageHeader` (Task 2).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/ResearchView.vue` with:**

```vue
<template>
  <div class="min-h-screen p-4">
    <div class="container mx-auto pb-20 pt-12">
        <PageHeader title="Current Research Topics"></PageHeader>
        <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(tile, idx) in topics" :key="idx" class="card group">
                <h2 class="mb-4 text-center font-serif text-xl font-semibold text-ink">{{tile.title}}</h2>
                <div class="mx-auto mb-6 h-[3px] w-24 rounded-full bg-accent transition-all duration-500 group-hover:w-36"></div>
                <p class="text-sm text-ink-muted"> {{tile.description}} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';

const topics = [
  {
    title: "Borophene",
    description: "The world of 2D materials, also known as flatland, that emerged with the disovery of graphene not too long ago, has a new entrant named BOROPHENE which is the 2D network of boron atoms. Borophene can host vacancy-mediated superstructural motifs that induce structural polymorphism."
  },
  {
    title: "Heterostructures of 2D materials",
    description: "The family of exfoliable materials like graphene, and transition metal dichalcogenides like MoS2, WS2, WSe2 and so on, are amenable to a vertical and lateral stacking in the form of single layers due to the weak Van der Waals interaction between the layers. Such an assembly yields emergent properties."
  },
  {
    title: "Charge density waves",
    description: "Charge density waves (CDWs) are a periodic modulation of electronic density concomitant with lattice distortion. The origin of CDWs in TiSe2 and VSe2 is still an open and an interesting question."
  },
  {
    title: "2D Van der Waals magnetic materials",
    description: "The isolation of a monolayer of magnetic material has opened an exciting subfield to probe stable magnetism in 2D. Understanding bulk magnetic materials also can have long standing implications in the world of spintronics."
  },
  {
    title: "Spin-polarised STM measurements",
    description: ""
  },
  {
    title: "Instrumentation :- setting up probe station",
    description: ""
  }
];
</script>
```

Note: fixes the `brounded-full` typo (not a real class — the underline rule was invisible before) into an actual `bg-accent rounded-full` rule, and adds `group` to the card wrapper so the pre-existing `group-hover:w-36` (also previously inert, since no ancestor had the `group` class) now actually works. Prose text (including "disovery") is unchanged.

- [ ] **Step 2: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/ResearchAreas`. Confirm: 6 topic cards in a grid, each with a title, a visible teal rule that widens on hover, and the description text.

- [ ] **Step 3: Commit**

```bash
git add src/views/ResearchView.vue
git commit -m "feat: redesign research areas page"
```

---

### Task 8: Research Group page

**Files:**
- Modify: `src/views/GroupView.vue`
- Delete: `src/components/GroupSlider.vue`

**Interfaces:**
- Consumes: tokens (Task 1).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Confirm `GroupSlider.vue` is unused before deleting it**

```bash
grep -rn "GroupSlider" src/
```

Expected: only the file itself (`src/components/GroupSlider.vue`) matches — no imports anywhere else. It's a duplicate of the carousel already inlined in `GroupView.vue`.

- [ ] **Step 2: Delete the dead file**

```bash
rm src/components/GroupSlider.vue
```

- [ ] **Step 3: Replace `src/views/GroupView.vue` with:**

```vue
<template>
  <div class="m-2 sm:m-5">
    <Carousel v-bind="config" class="h-64 sm:h-[500px]">
      <Slide v-for="image in images" :key="image.id" class="flex items-center justify-center">
        <div class="flex aspect-[1.3] h-64 w-full items-center justify-center rounded-lg sm:h-[500px]">
          <img
            :src="image.url"
            alt="image"
            class="h-full w-full rounded-lg object-contain"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="mx-auto max-w-6xl p-2 pt-0 sm:space-y-12 sm:p-6">
    <!-- Current Members Section -->
    <div>
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Current Members</h2>
      <div class="section-rule mb-10"></div>
      <div>
        <h3 class="mb-6 text-xl font-semibold text-ink">BSMS Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Parthiv Dixit</p>
            <p class="text-ink-muted">Jul 2025 - Present</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-6 mt-10 text-xl font-semibold text-ink">PhD Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Nikhil Singh</p>
            <p class="text-ink-muted">Jul 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Alumni Section -->
    <div>
      <h2 class="pb-2 text-center font-serif text-2xl font-semibold text-ink">Alumni</h2>
      <div class="section-rule mb-10"></div>
      <div>
        <h3 class="mb-6 text-xl font-semibold text-ink">BSMS Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a href="https://www.jyu.fi/en/people/pranjal-panwar" target="_blank" rel="noopener" class="card block">
            Pranjal Panwar
          </a>
          <a href="https://www.linkedin.com/in/subhrajit-dalai-0364a11aa/?originalSubdomain=in" target="_blank" rel="noopener" class="card block">
            Subhrajit Dalai
          </a>
          <a href="https://superpuddles-lab.ifw-dresden.de/homepage/members" target="_blank" rel="noopener" class="card block">
            Piyush Uttam Parakh
          </a>
          <a href="https://www.linkedin.com/in/hitesh-khanagwal-252271277/" target="_blank" rel="noopener" class="card block">
            Hitesh Khanagwal
          </a>
          <a href="https://www.linkedin.com/in/thasneem-a-22005aa5" target="_blank" rel="noopener" class="card block">
            Thasneem A
          </a>
          <a href="https://www.linkedin.com/in/navathej-preetha-genesh-6570015a" target="_blank" rel="noopener" class="card block">
            Navathej Ganesh
          </a>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="mb-6 text-xl font-semibold text-ink">PhD Students</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Vaibhav Walve</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Umashankar Rajput</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Imrankhan Mulani</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Sk Rejaul</p>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="mb-6 text-xl font-semibold text-ink">Post-Doc Fellows</h3>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Sumati Patil</p>
          </div>
          <div class="card">
            <p class="text-lg font-medium text-ink">Dr. Giriraj Vyas</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import img1 from '@/assets/team/1.png';

const images = [
  { id: 1, url: img1 },
];

const config = {
  height: 500,
  itemsToShow: 1,
  gap: 5,
}
</script>

<style scoped>
.carousel {
  --vc-pgn-background-color: var(--color-line);
  --vc-pgn-active-color: var(--color-accent);
  --vc-nav-background: color-mix(in srgb, var(--color-surface) 70%, transparent);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

Note: fixes the `broder-2` typo (dropped entirely — every tile now gets its border from `.card`), and drops the old `:root { background-color: #242424; }` rule inside the scoped style block. That rule was already inert (Vue's `scoped` attribute rewrites `:root` into a selector that can never match the real document root), so removing it changes nothing visually — it's dead code. All member names, dates, and alumni links are unchanged.

- [ ] **Step 4: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/ResearchGroup`. Confirm: carousel still shows the team photo with teal-tinted nav/pagination, Current Members and Alumni sections render with the same names/links as before, styled as cards.

- [ ] **Step 5: Commit**

```bash
git add -A src/views/GroupView.vue src/components/GroupSlider.vue
git commit -m "feat: redesign research group page, remove dead carousel component"
```

---

### Task 9: Publications page

**Files:**
- Modify: `src/views/PublicationsView.vue`

**Interfaces:**
- Consumes: tokens (Task 1), `PageHeader` (Task 2).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/PublicationsView.vue` with:**

```vue
<template>
  <div class="min-h-screen p-2">
    <div class="container mx-auto pb-20 pt-12">
        <PageHeader title="Key Publications"></PageHeader>
        <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div v-for="(tile, idx) in publications" :key="idx" class="card group">
                <h2 class="mb-4 text-center font-serif text-base font-semibold text-ink">{{tile.title}}</h2>
                <div class="mx-auto mb-6 h-[3px] w-24 rounded-full bg-accent transition-all duration-500 group-hover:w-36"></div>
                <p class="text-xs text-ink-muted"> {{tile.description}} </p>
            </div>
        </div>
    </div>
  </div>
</template>


<script setup>
import PageHeader from '@/components/PageHeader.vue';

const publications = [
  {
    title: "Unveiling the Correlation between Defects and High Mobility in MoS2 Monolayers",
    description: "Sudipta Majumder, Sarika Lohkna, Vaibhav Walve, Rahul Chand, Gokul M. Anilkumar, Sooyeon Hwang, G. V. Pavan Kumar, Aparna Deshpande, Prasenjit Ghosh, Atikur Rahman ACS Appl. Mater. Interfaces 19 February 2025; 17 (7): 10942–10953"
  },
  {
    title: "Universal thickness-dependent absorption in solids at the nanoscale: Anomalous enhancement in the ultrathin limit",
    description: "Bhumika Chauhan, Nikhil Singh, Subhrajit Dalai, Abhisek Saidarsan, Sayantan Patra, Sourabh Jain, Aparna Deshpande, and Ashish Arora Phys. Rev. B 114, L111404 – Published 3 August, 2026"
  },
  {
    title: "Oxidation Behavior of ZrTe2: Insights into Stability for Applications in Sensors",
    description: "Pranjal Panwar, Vaibhav Walve, Nikhil Singh, Luminita Harnagea, Aparna Deshpande, J. Phys. Chem. C, 129, 22, 10304–10312 (2025)"
  },
  {
    title: "Evolution of Atomistic Boron Clusters on Borophene Monolayers on Au(111)",
    description: "Umashankar Rajput, Md Faiz Akhtar, Giriraj Vyas, Somnath Bhowmick, Prashant Kumar, Aparna Deshpande, J. Phys. Chem. C, 129, 15, 7485–7492 (2025)"
  },
  {
    title: "Adsorption of FePc on Bi2Se3",
    description: "Rejaul Sk, Bijoy Nharangatt, Imrankhan Mulani, Priya Mahadevan, and Aparna Deshpande, J. Phys. Chem. C, 128, 41, 17651–17657 (2024)"
  },
  {
    title: "Unveiling different structural orderings in Fe 5-xGeTe2",
    description: "Vaibhav Walve, Piyush Parakh, Umashankar Rajput, Akash S. Mhase, Kirandeep Singh, and Aparna Deshpande, Phys. Rev. B 110, 075119 (2024)"
  },
  {
    title: "Liquid phase exfoliated borophene on Au(111)",
    description: "Umashankar Rajput, Md Faiz Akhtar, Vaibhav Walve, Imrankhan Mulani, Giriraj Vyas, Somnath Bhowmick, Prashant Kumar and Aparna Deshpande, J. Phys. Chem. C 128 (9), 4104-4110, (February 2024)"
  },
  {
    title: "Emergent Negative Differential Resistance with an Undisturbed Topological Surface State",
    description: "Rejaul Sk, Debayan Mondal, Imrankhan Mulani, Priya Mahadevan, and Aparna Deshpande. J. Phys. Chem. C 2022, 126, 39, 16744."
  },
  {
    title: "Perturbation of charge density waves in 1T-TiSe2",
    description: "Imrankhan Mulani, Umashankar Rajput, Luminita Harnagea, and Aparna Deshpande. Phys. Rev. B 103, 125430 (2021)"
  },
  {
    title: "Growth, properties, and applications of nanolaminate Ti3AlC2 thin films",
    description: "Abhijit Biswas, Arundhati Sengupta, Umashankar Rajput, Sachin Kumar Singh, Vivek Antad, Sk Mujaffar Hossain, Swati Parmar, Dibyata Rout, Aparna Deshpande, Sunil Nair, and Satishchandra Ogale. Phys. Rev. Applied 13, 044075(2020)."
  },
  {
    title: "Unveiling the emergence of functional materials with STM: metal phthalocyanine on surface architectures",
    description: "Rejaul Sk and Aparna Deshpande, invited review article for Molecular Systems Design & Engineering, 4, 471 (2019)."
  },
  {
    title: "Emergent Properties of Organic Molecule-Topological Insulator Hybrid Interface: Cu-Phthalocyanine on Bi2Se3",
    description: "Rejaul Sk, Imrankhan Mulani, and Aparna Deshpande. J. Phys. Chem. C 122, 40, 22996 (2018)."
  },
  {
    title: "Effect of Cyano Substitution on the Step-Edge Adsorption of Copper Phthalocyanine on Au(111)",
    description: "Rejaul Sk, Srilatha Arra, Barun Dhara, Joel S. Miller, Mukul Kabir, and Aparna Deshpande, Phys. Chem. C 122, 22, 11848 (2018)."
  },
  {
    title: "Enhancing the Intermolecular Interaction by Cyano Substitution in CuPc",
    description: "Rejaul Sk, Srilatha Arra, Barun Dhara, Joel S. Miller, Mukul Kabir, and Aparna Deshpande, Phys. Chem. C 122, 1, 429 (2018)."
  },
  {
    title: "Revisiting HOPG superlattices: Structure and conductance properties",
    description: "Sumati Patil, Sadhu Kolekar, Aparna Deshpande, Surface Science, 658, 55-60, (2017)."
  },
  {
    title: "Enhancing the thermopower and tuning the resistivity in Bi2Se3 with Fe-doping",
    description: "Rejaul Sk, Mandar Shirolkar, Barun Dhara, Sulabha Kulkarni, and Aparna Deshpande, Chemical Physics Letters, 638, 94 (2015)."
  },
  {
    title: "Self-Assembly and Photopolymerization of Sub‑2 nm One-Dimensional Organic Nanostructures on Graphene",
    description: "Aparna Deshpande, Chun-Hong Sham, Justice M. P. Alaboson, Jonathan M. Mullin, George C. Schatz, and Mark C. Hersam, J. Am. Chem. Soc., 134, 16759 (2012)."
  },
  {
    title: "Scanning probe microscopy of graphene",
    description: "Aparna Deshpande and Brian LeRoy, Physica E, 44, 743 (2012) (invited review article)."
  },
  {
    title: "Spatially resolved spectroscopy of monolayer graphene on SiO2",
    description: "Aparna Deshpande, Wenzhong Bao, Feng Miao, Chun Ning Lau, and Brian LeRoy, Phys. Rev. B, 79, 205411 (2009). Accompanying synopsis in Physics."
  },
  {
    title: "Atom-by-atom extraction using scanning tunneling microscope tip-cluster interaction",
    description: "Aparna Deshpande, Dandapani Acharya, Joel Vaughn, Saw-Wai Hla, Handan Yildirim, Abdelkader Kara, and Talat Rahman, Phys. Rev. Lett., 98, 028304 (2007)."
  },
  {
    title: "Manipulating Kondo Resonance in Two-Dimensional Molecular Self-Assembly",
    description: "Violeta Iancu, Aparna Deshpande and Saw-Wai Hla, Phys. Rev. Lett., 97, 266603 (2006)."
  }
];
</script>
```

Note: same `brounded-full` → `bg-accent rounded-full` fix plus `group`/`group-hover:w-36` fix as Task 7. All 20 publication entries' titles and descriptions are copied verbatim.

- [ ] **Step 2: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/Publications`. Confirm: "Key Publications" header, 20 cards in a 2-column grid (1-column on mobile), each with the same title/citation text as before.

- [ ] **Step 3: Commit**

```bash
git add src/views/PublicationsView.vue
git commit -m "feat: redesign publications page"
```

---

### Task 10: Outreach page

**Files:**
- Modify: `src/views/OutreachView.vue`

**Interfaces:**
- Consumes: tokens (Task 1), `PageHeader` (Task 2).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/OutreachView.vue` with:**

```vue
<template>
  <div>
    <PageHeader title="Sharing Science Beyond the Lab"></PageHeader>
    <div class="mt-10 justify-content text-ink sm:ml-15 sm:mr-15">
      Article 51A(h) in the constitution of India  lists "To develop the scientific temper, humanism, and the spirit of inquiry and reform"as one of the fundamental duties.
      In line with this IISER Pune has a dedicated International Relations and Outreach (IRO) department. Smt. Indrani Balan Science Activity Centre (SAC) is a part of IRO.
      Situated in the IISER Pune campus SAC is actively engaged in science outreach and teacher training workshops. Outside the campus SAC has also set up a community tinkering centre called "
      <a href="https://www.kalpakghar.org/" target="_blank" rel="noopener">Kalpakghar</a>" in the <a href="https://www.pcsciencepark.org/" target="_blank" rel="noopener">Pimpri Chinchwad Science Park</a>, in collaboration with the CSR initiative of Tata Technologies. 
      <br/><br/>
      SAC has a dedicated <a href="https://www.youtube.com/@IISERPuneScienceActivityCentre/featured" target="_blank" rel="noopener">YouTube channel</a> which extends our outreach beyond campus! Recently the channel crossed 100,000 subscribers and received the <a href="https://x.com/ScienceActivity" target="_blank" rel="noopener">Silver Button</a>!  
      <br/><br/>
    </div>
    <h2 class="mt-15 text-center font-serif text-2xl font-semibold text-ink">My Talks</h2>
    <div class="section-rule"></div>
    <div class="ml-1 mb-20 mt-15 grid w-full grid-cols-1 gap-5 sm:mr-10 sm:grid-cols-2 lg:grid-cols-2">
      <div v-for="(tile, idx) in talks" :key="idx" class="card flex max-w-full flex-col text-center">
        <a :href="tile.link" target="_blank" rel="noopener" class="flex flex-grow flex-col">
          <h3 class="mb-2 h-15 text-base font-semibold text-ink">
            {{ tile.title }}
          </h3>
          <p class="mt-5 text-center text-xs text-ink-muted">
            {{ tile.description }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';

const talks = [
  {
    title: "The Exciting Science of 2D Materials",
    link: "https://drive.google.com/file/d/1BHk9Et7sjb90O9z51I_Naz6exVhNA3dm/view",
    description: "This lecture was a part of Jidnyasa Virtual Lecture Series at Praj Matrix. "
  },
  {
    title: "Reaching out to atoms, molecules and surfaces using scanning tunneling microscopy",
    link: "https://www.youtube.com/watch?v=x2zSeHxMkoE",
    description: "This lecture was a part of the Science Gappa Series at Dr. Abasaheb Garware College Pune."
  }
];
</script>
```

- [ ] **Step 2: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/Outreach`. Confirm: title, unchanged paragraph text with working Kalpakghar/Science Park/YouTube/Silver Button links, "My Talks" heading with rule, and 2 talk cards linking out correctly.

- [ ] **Step 3: Commit**

```bash
git add src/views/OutreachView.vue
git commit -m "feat: redesign outreach page"
```

---

### Task 11: Science Education page

**Files:**
- Modify: `src/views/ScienceedView.vue`

**Interfaces:**
- Consumes: tokens (Task 1).
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Replace `src/views/ScienceedView.vue` with:**

```vue
<template>
  <div class="items-center justify-center text-center">
    <div class="mt-10 text-ink">
      Coordination committee member of the newly established 
        <a href="https://www.iiserpune.ac.in/research/department/science-education/research" target="_blank" rel="noopener">Department of Science Education (DSE)</a>
      at IISER Pune.
    </div>
    <div class="mt-5 text-ink">
        To apply, please check out the <a href="https://sciroi.net/job-portal/" target="_blank" rel="noopener">Faculty Application</a> link.<br/><br/>
    </div>
    <h2 class="mt-10 text-center font-serif text-xl font-semibold text-ink">My Recent Reads</h2>
    <div class="section-rule mb-10"></div>
    <ul class="mx-auto flex h-50 max-w-xl flex-col gap-4 space-y-4 sm:h-full">
        <li class="card text-left">
          <a href="https://blpress.org/books/a-mathematicians-lament/" target="_blank" rel="noopener">"A Mathematician's Lament"</a> by Paul Lockhart.
          <br/>With AI fiercely intruding teaching-learning spaces this book makes us truly introspect...even more than before..
        </li>
        <li class="card text-left">
          <a href="https://t.co/zqB7KqXyQ4" target="_blank" rel="noopener">"Horizons: A global history of science"</a> by <a href="https://t.co/l59mx23gkh" target="_blank" rel="noopener">Dr James Poskett</a>.
          <br/> A must-read for any science enthusiast, student, or practitioner.
        </li>
    </ul>
  </div>
</template>

<script setup>
</script>
```

Note: the old `<ul>` had contradictory classes (`flex inline-block justify-center` — `flex` and `inline-block` can't both apply), replaced with a plain `flex flex-col`. Both reading recommendations, their links, and the intro paragraph text are unchanged.

- [ ] **Step 2: Verify**

```bash
npm run lint
npm run build
npm run dev
```

Visit `/Science_Ed`. Confirm: DSE + Faculty Application paragraphs with working links, "My Recent Reads" heading with rule, and both book entries with working links.

- [ ] **Step 3: Commit**

```bash
git add src/views/ScienceedView.vue
git commit -m "feat: redesign science education page"
```

---

### Task 12: Full-site verification pass

**Files:** none (verification only).

**Interfaces:**
- Consumes: everything from Tasks 1–11.
- Produces: nothing (final gate).

- [ ] **Step 1: Confirm no leftover broken classes or hardcoded colors**

```bash
grep -rn "111828\|brounded-full\|broder-2\|text-bold" src/
```

Expected: no matches.

- [ ] **Step 2: Confirm the dead component is gone**

```bash
test ! -f src/components/GroupSlider.vue && echo "removed"
```

Expected: prints `removed`.

- [ ] **Step 3: Confirm no text content drifted**

```bash
git diff main -- '*.vue' | grep -E '^[+-]' | grep -vE '^(\+\+\+|---)'
```

Read through the output: every `+`/`-` line should be a class list, tag, attribute, or import — never a change to a sentence, name, date, citation, or URL. If any wording differs from the original file content read at the start of this plan, revert that specific line.

- [ ] **Step 4: Lint and build**

```bash
npm run lint
npm run build
```

Expected: both succeed with no errors or warnings.

- [ ] **Step 5: Manual visual pass**

```bash
npm run dev
```

For each of the 8 routes (`/`, `/About_Me`, `/STM_Lab`, `/ResearchAreas`, `/ResearchGroup`, `/Publications`, `/Outreach`, `/Science_Ed`):
- Check at ~375px width (mobile) and ~1280px width (desktop).
- Toggle the OS/browser color scheme between light and dark (e.g. DevTools → Rendering → "Emulate CSS prefers-color-scheme") and confirm both look intentional (readable contrast, teal accent visible, no unstyled/white flashes).
- Confirm the nav's active-page highlight matches the current route, and the mobile hamburger menu opens/closes cleanly.

This task has no code changes of its own — if Steps 1–5 all pass cleanly, there is nothing to commit.
