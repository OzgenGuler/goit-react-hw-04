import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Photographer: {image.user.name}</p>
      <p>{image.description || image.alt_description}</p>
    </Modal>
  );
};

export default ImageModal;
