import React, { useEffect, useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Movie, movieService } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [likedMovies, setLikedMovies] = useState<Set<number>>(new Set());
  const [savedMovieIds, setSavedMovieIds] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState<"home" | "saved">("home");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadMovies(1);
    loadLikedMovies();
    loadSavedMovies();
  }, []);

  const loadMovies = async (pageNum: number) => {
    try {
      setLoading(true);
      const response = await movieService.getNowPlaying(pageNum);
      setMovies(response.results);
      setPage(pageNum);
      setTotalPages(response.total_pages);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadLikedMovies = () => {
    const saved = localStorage.getItem("@feedflix:likes");
    if (saved) {
      setLikedMovies(new Set(JSON.parse(saved)));
    }
  };

  const loadSavedMovies = () => {
    const saved = localStorage.getItem("@feedflix:saved");
    if (saved) {
      const savedData = JSON.parse(saved);
      setSavedMovies(savedData);
      setSavedMovieIds(new Set(savedData.map((movie: Movie) => movie.id)));
    }
  };

  const handleLike = (movieId: number) => {
    setLikedMovies((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(movieId)) {
        newLikes.delete(movieId);
      } else {
        newLikes.add(movieId);
      }
      localStorage.setItem("@feedflix:likes", JSON.stringify([...newLikes]));
      return newLikes;
    });
  };

  const handleSave = (movieId: number) => {
    setSavedMovieIds((prev) => {
      const newSaved = new Set(prev);

      if (newSaved.has(movieId)) {
        newSaved.delete(movieId);
        const updatedSavedMovies = savedMovies.filter((m) => m.id !== movieId);
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem(
          "@feedflix:saved",
          JSON.stringify(updatedSavedMovies)
        );
      } else {
        newSaved.add(movieId);
        const movieToSave = movies.find((m) => m.id === movieId);
        if (movieToSave) {
          const updatedSavedMovies = [...savedMovies, movieToSave];
          setSavedMovies(updatedSavedMovies);
          localStorage.setItem(
            "@feedflix:saved",
            JSON.stringify(updatedSavedMovies)
          );
        }
      }

      return newSaved;
    });
  };

  const handleNavigate = (page: "home" | "saved") => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      loadMovies(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      loadMovies(page - 1);
    }
  };

  const displayMovies = currentPage === "home" ? movies : savedMovies;

  if (loading) {
    return (
      <div className="min-h-screen bg-instagram-bg flex items-center justify-center">
        <h2 className="text-lg text-instagram-text">Loading feed...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-instagram-bg pb-20">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="pt-20">
        <Feed
          movies={displayMovies}
          onLike={handleLike}
          onSave={handleSave}
          likedMovies={likedMovies}
          savedMovies={savedMovieIds}
        />
      </div>

      <Footer
        currentPage={page}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        isVisible={currentPage === "home" && movies.length > 0}
      />
    </div>
  );
}

export default App;
