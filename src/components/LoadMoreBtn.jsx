const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="load-more">
      <button onClick={onClick} className="load-more-btn">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
