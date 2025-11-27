# FeedFlix

A simple movie listing application designed as an Instagram-inspired feed. Built with React and TypeScript, this project consumes the TMDB (The Movie Database) public API to display movies in a social media feed format.

## About the Project

FeedFlix is a movie browsing application that presents films in a familiar social media feed layout. Users can interact with movie posts through likes and saves, creating a personalized collection of their favorite films.

### Key Features

- Instagram-style feed layout for movie listings
- Like functionality for individual movie posts
- Save movies to a personal collection
- Header navigation between Home and Saved posts
- Footer navigation for page browsing
- Responsive design for mobile and desktop
- Persistent data storage using localStorage

## Technologies Used

### Core Technologies

- React 18
- TypeScript
- Axios for API requests

### Styling

- Tailwind CSS 3
- Custom Instagram-inspired color palette
- Responsive utility classes

### Icons

- Lucide React
- Tree-shakeable icon components

### API

- TMDB (The Movie Database) API
- Movie data and poster images

## Project Structure

- **Header**: Navigation component for switching between Home and Saved posts
- **Feed**: Main container displaying movie posts
- **FeedPost**: Individual movie card with like, comment, share, and save actions
- **Footer**: Fixed bottom navigation for pagination controls
- **Services**: API integration and movie data management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/lgventura/feed-flix.git
cd feed-flix
```

2. Install dependencies

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features in Detail

### Home Feed

- Displays movies currently playing in theaters
- Paginated results with navigation controls
- Each post shows movie poster, title, rating, and description
- Interactive like and save buttons

### Saved Posts

- Personal collection of saved movies
- Persisted across browser sessions
- Quick access through header navigation

### Pagination

- Footer-based navigation controls
- Previous and Next buttons
- Current page indicator
- Automatic scroll to top on page change

## API Configuration

This project uses the TMDB API. The API key is configured in the service layer at:

```
src/services/movieService.ts
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learn More

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
