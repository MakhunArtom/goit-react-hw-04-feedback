import css from './Controler.module.css';

const Controler = ({ onLiveFeedback }) => {
  return (
    <ul className={css.control__list}>
      <li className={css.control__item}>
        <button className={css.control__button} onClick={onLiveFeedback}>
          Good
        </button>
      </li>
      <li className={css.control__item}>
        <button className={css.control__button} onClick={onLiveFeedback}>
          Neutral
        </button>
      </li>
      <li className={css.control__item}>
        <button className={css.control__button} onClick={onLiveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default Controler;
