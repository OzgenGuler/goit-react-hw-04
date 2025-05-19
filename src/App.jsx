// App.jsx
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "44PYxN0tDA79HmmvuZzTIaTghYcY0x94eQ-s0_49_Is";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
      setError("Lütfen bir arama terimi girin. !!");
      return;
    } else if (newQuery === query) {
      setError("!! Aynı terimi tekrar arayamazsınız. !!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const loadMore = () => {
    handleLoadMore();
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
