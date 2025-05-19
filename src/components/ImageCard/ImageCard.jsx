import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.image_card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={() => openModal(image)}
      />
    </div>
  );
};
ImageCard.PropTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
