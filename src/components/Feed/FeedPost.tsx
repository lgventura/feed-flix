import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Film,
} from "lucide-react";
import { Movie } from "../../services/movieService";
import { movieService } from "../../services/movieService";

interface FeedPostProps {
  movie: Movie;
  onLike: (movieId: number) => void;
  onSave: (movieId: number) => void;
  isLiked: boolean;
  isSaved: boolean;
}

const FeedPost: React.FC<FeedPostProps> = ({
  movie,
  onLike,
  onSave,
  isLiked,
  isSaved,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const imageUrl = movieService.getImageUrl(movie.poster_path, "w780");
  const backdropUrl = movie.backdrop_path
    ? movieService.getImageUrl(movie.backdrop_path, "w780")
    : imageUrl;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handleLikeClick = () => {
    onLike(movie.id);
  };

  const handleSaveClick = () => {
    onSave(movie.id);
  };

  return (
    <article className="bg-white border border-instagram-border rounded-lg overflow-hidden mb-6">
      <div className="flex items-center justify-between px-4 py-3.5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
            <Film size={16} className="text-white" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-instagram-text">
              TMDB Official
            </span>
            <span className="text-xs text-instagram-text">{movie.title}</span>
          </div>
        </div>
        <button className="p-2 hover:opacity-70">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="w-full max-h-[750px] overflow-hidden bg-black">
        <img
          src={backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = imageUrl;
          }}
        />
      </div>

      <div className="flex justify-between items-center px-4 py-1.5">
        <div className="flex gap-4">
          <button
            onClick={handleLikeClick}
            className={`p-2 hover:opacity-60 transition-opacity ${
              isLiked ? "animate-scale" : ""
            }`}
          >
            <Heart
              size={24}
              fill={isLiked ? "#ed4956" : "none"}
              stroke={isLiked ? "#ed4956" : "currentColor"}
            />
          </button>
          <button className="p-2 hover:opacity-60 transition-opacity">
            <MessageCircle size={24} />
          </button>
          <button className="p-2 hover:opacity-60 transition-opacity">
            <Send size={24} />
          </button>
        </div>
        <button
          onClick={handleSaveClick}
          className="p-2 hover:opacity-60 transition-opacity"
        >
          <Bookmark size={24} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="px-4 mb-2">
        <span className="text-sm font-semibold text-instagram-text">
          {isLiked ? "You " : ""}liked this
        </span>
      </div>

      <div className="px-4 mb-2 text-sm leading-[18px] text-instagram-text">
        <span className="font-semibold mr-1.5">TMDB Official</span>
        <span className="whitespace-pre-wrap break-words">
          {showFullDescription ? movie.overview : truncateText(movie.overview)}
          {movie.overview.length > 150 && (
            <button
              className="text-instagram-secondary ml-1 hover:opacity-70"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "less" : "more"}
            </button>
          )}
        </span>
      </div>

      <div className="px-4 mb-2 flex gap-4 text-[13px]">
        <span className="text-instagram-text font-medium">
          ⭐ {movie.vote_average.toFixed(1)}
        </span>
        <span className="text-instagram-secondary">
          {formatDate(movie.release_date)}
        </span>
      </div>

      <div className="px-4 pb-4">
        <time className="text-[10px] text-instagram-secondary uppercase tracking-wide">
          {formatDate(movie.release_date)}
        </time>
      </div>
    </article>
  );
};

export default FeedPost;
