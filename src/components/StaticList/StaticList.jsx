import css from './StaticsList.module.css';

const StaticsList = ({ bad, good, neutral, total, feedbackProcent }) => {
  return (
    <ul className="statics__list">
      <li className={css.statics__item}>Good: {good} </li>
      <li className={css.statics__item}>Neutral: {neutral}</li>
      <li className={css.statics__item}>Bad: {bad} </li>
      <li className={css.statics__item}>Total: {total} </li>
      <li className={css.statics__item}>
        Positive Feedback: {feedbackProcent(total)}%
      </li>
    </ul>
  );
};

export default StaticsList;
