# Skillify

A learning management system built with React and Node.js that offers course browsing, enrollments, and educator tooling.

## Tech Stack
- Frontend: React (Vite), React Router, Clerk auth, Tailwind (via @tailwindcss/postcss)
- Backend: Node.js, Express, MongoDB, Stripe/Svix integrations
- Build/Tools: ESLint, PostCSS, Vercel deployment targets

## Prerequisites
- Node.js 18+ and npm
- MongoDB connection string
- Clerk publishable/secret keys
- Stripe keys (if payments enabled)

## Setup
1) Install dependencies
- Client: `cd client && npm install`
- Server: `cd server && npm install`

2) Environment variables
- Client (`client/.env`):
  - `VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>`
- Server (`server/.env`):
  - `MONGODB_URI=<your_mongodb_uri>`
  - `CLERK_SECRET_KEY=<your_clerk_secret>`
  - `STRIPE_SECRET_KEY=<your_stripe_secret>` (optional if payments disabled)

3) Run locally
- Client: `cd client && npm run dev`
- Server: `cd server && npm run dev`

## Scripts
- Client: `npm run dev`, `npm run build`, `npm run lint`
- Server: `npm run dev` (nodemon), `npm start`

## Project Structure
```
d:\java script\PROJECTS\learning mgmt system - Copy/
├── client/                     # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/             # Images/icons and assets map
│   │   ├── context/            # App context providers
│   │   ├── Components/
│   │   │   ├── educator/       # Educator UI components
│   │   │   └── students/       # Student-facing components
│   │   └── Pages/
│   │       ├── educator/       # Educator pages (dashboard, courses)
│   │       └── students/       # Student pages (home, course list/details)
│   ├── public/                 # Static assets (favicons, etc.)
│   ├── package.json
│   └── vite.config.js
└── server/                     # Node/Express backend
    ├── server.js               # Entry point
    ├── config/                 # Cloudinary/Mongo/Multer configs
    ├── controllers/            # Route handlers (courses, educators, users)
    ├── Middleware/             # Auth middleware
    ├── Models/                 # Mongoose models (Course, Purchase, User, etc.)
    ├── Routes/                 # Express routes
    ├── package.json
    └── vercel.json
```

## Notes
- Clerk auth is required for gated routes. Ensure keys are set before running.
- Stripe/Svix setup is optional; disable related flows if keys are absent.
