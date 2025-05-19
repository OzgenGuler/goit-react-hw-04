import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      {image && (
        <div className={css.modalContainer}>
          {}
          <img
            className={css.modalImage}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className={css.modalInfo}>
            <h2 className={css.imageTitle}>
              {image.alt_description || "Untitled"}
            </h2>
            {image.user && (
              <div className={css.author}>
                <img
                  className={css.avatar}
                  src={image.user.profile_image?.medium}
                  alt={image.user.name}
                />
                <p className={css.authorName}>{image.user.name}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
