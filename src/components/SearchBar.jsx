import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefult();
    if (query.trim() === "") {
      toast.error("Lütfen bir arama terimi girin.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className="search-header">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Arama Yapın"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Ara
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
