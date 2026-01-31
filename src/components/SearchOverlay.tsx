import type { FC } from "react";
import { FiX } from "react-icons/fi";
import "./SearchOverlay.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SearchOverlay: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className={`search-overlay ${isOpen ? "open" : ""}`}>
      <input type="text" placeholder="Start Typing..." autoFocus />
      <FiX className="close-icon" onClick={onClose} />
    </div>
  );
};

export default SearchOverlay;
