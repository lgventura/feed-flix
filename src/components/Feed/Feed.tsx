import React from "react";
import { Movie } from "../../services/movieService";
import FeedPost from "./FeedPost";

interface FeedProps {
  movies: Movie[];
  onLike: (movieId: number) => void;
  onSave: (movieId: number) => void;
  likedMovies: Set<number>;
  savedMovies: Set<number>;
}

const Feed: React.FC<FeedProps> = ({
  movies,
  onLike,
  onSave,
  likedMovies,
  savedMovies,
}) => {
  if (movies.length === 0) {
    return (
      <div className="w-full min-h-screen bg-instagram-bg py-5">
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-instagram-secondary">
          <div className="text-5xl">🎬</div>
          <div className="text-lg font-semibold">No movies found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-instagram-bg py-5">
      <div className="max-w-[614px] mx-auto flex flex-col gap-6">
        {movies.map((movie) => (
          <FeedPost
            key={movie.id}
            movie={movie}
            onLike={onLike}
            onSave={onSave}
            isLiked={likedMovies.has(movie.id)}
            isSaved={savedMovies.has(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
