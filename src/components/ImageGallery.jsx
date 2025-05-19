import ImageCard from "./ImageCard";

const ImageGallery = ({ images, openModal }) => {
  if (!images.length) return null;
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} className="image-gallery-item">
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
