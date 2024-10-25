import "./Modal.scss";

export default function Modal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageSrc}
          className="modal-content__photo"
          alt="Modal Photo"
        />
      </div>
    </div>
  );
}
