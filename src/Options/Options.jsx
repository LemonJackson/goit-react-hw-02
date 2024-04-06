import css from './Options.module.css';

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.btn} onClick={() => updateFeedback('good')}>
          Good
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn} onClick={() => updateFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn} onClick={() => updateFeedback('bad')}>
          Bad
        </button>
      </li>
      <li className={css.item}>
        {totalFeedback > 0 && (
          <button className={css.btn} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
}
