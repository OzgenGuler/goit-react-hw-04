import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, isVisible, isSticky }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Lütfen bir arama terimi girin.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header
      className={`${css.searchhder} ${isSticky ? css.sticky : ""} ${
        !isVisible ? css.hidden : ""
      }`}
    >
      <form className={css.search_form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Arama Yapın"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.search_button}>
          Ara
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
