import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  isVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-instagram-border z-50 h-16">
      <div className="max-w-[975px] mx-auto px-5 h-full flex items-center justify-center gap-6">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-instagram-bg rounded-lg font-medium text-instagram-text disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-2 px-4 py-2 bg-instagram-bg rounded-lg">
          <span className="font-semibold text-instagram-text">
            {currentPage}
          </span>
          <span className="text-instagram-secondary">/</span>
          <span className="text-instagram-secondary">{totalPages}</span>
        </div>

        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 bg-instagram-bg rounded-lg font-medium text-instagram-text disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
