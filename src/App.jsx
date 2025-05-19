// App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoaderMoreBtn/LoadMoreBtn";
import css from "./App.module.css";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "44PYxN0tDA79HmmvuZzTIaTghYcY0x94eQ-s0_49_Is";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
          },
        });
        setImages((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      setError("Lütfen bir arama terimi girin.!!");
      return;
    } else if (newQuery === query) {
      alert(
        "Aynı terim yerine farklı bir şeyler aramak ister misiniz ?" +
          "\n" +
          "Mesela: 'cat' yerine 'dog' arayabilirsiniz."
      );
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  // const loadMore = () => {
  //   handleLoadMore();
  // };
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isAtTop = currentScrollPos === 0;
      if (prevScrollpos > currentScrollPos || isAtTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} isVisible={isVisible} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
