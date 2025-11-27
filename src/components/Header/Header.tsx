import React from "react";
import { Home, Bookmark } from "lucide-react";

interface HeaderProps {
  currentPage: "home" | "saved";
  onNavigate: (page: "home" | "saved") => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-instagram-border z-50 h-16">
      <div className="max-w-[975px] mx-auto px-5 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-instagram-text">
            FeedFlix
          </h1>
          <span className="text-2xl">🎬</span>
        </div>

        <nav className="flex gap-6 items-center">
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              currentPage === "home" ? "font-semibold" : ""
            } hover:bg-instagram-bg`}
            onClick={() => onNavigate("home")}
          >
            <Home
              size={24}
              fill={currentPage === "home" ? "currentColor" : "none"}
            />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              currentPage === "saved" ? "font-semibold" : ""
            } hover:bg-instagram-bg`}
            onClick={() => onNavigate("saved")}
          >
            <Bookmark
              size={24}
              fill={currentPage === "saved" ? "currentColor" : "none"}
            />
            <span className="hidden sm:inline">Saved</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
