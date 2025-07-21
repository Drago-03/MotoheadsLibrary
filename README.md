# AutoVault - Automotive Archive Platform

A modern React + Vite application for exploring automotive history and technology.

## Features

- 🚗 Comprehensive automotive archive
- 📚 Car dictionary and terminology
- 🎥 Video library
- 🛒 Parts marketplace
- 📍 Location services
- 🛠️ Modern React + TypeScript + Vite stack

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## Project Structure

```
src/
  ├── components/     # React components
  ├── data/          # Static data
  ├── hooks/         # Custom hooks
  ├── types/         # TypeScript types
  ├── App.tsx        # Main application
  └── main.tsx       # Entry point
```

## Changes Made

- ✅ Removed splash screen for direct app loading
- ✅ Kept loading screen for smooth UX
- ✅ Configured to run on port 3000
- ✅ Fixed all build errors and warnings
- ✅ Simplified app structure
- ✅ Enhanced error handling
