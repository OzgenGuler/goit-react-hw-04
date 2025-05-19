const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="load-more">
      <button onClick={onClick} className="load-more-btn">
        Devamı İçin Tıklayın
      </button>
    </div>
  );
};

export default LoadMoreBtn;
