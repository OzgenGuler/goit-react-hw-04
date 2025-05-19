import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>Photographer: {image.user.name}</p>
      <p>{image.description || image.alt_description}</p>
      <button onClick={onClose} className="close-button">
        Kapat
      </button>
    </Modal>
  );
};

export default ImageModal;
