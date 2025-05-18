import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) return null;
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
