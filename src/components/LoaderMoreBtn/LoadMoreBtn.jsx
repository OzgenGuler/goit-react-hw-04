import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.load_more}>
      <button onClick={onClick} className={css.loadmore_btn}>
        Devamı İçin Tıklayın
      </button>
    </div>
  );
};

export default LoadMoreBtn;
