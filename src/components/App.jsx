import { useState } from 'react';
import css from './App.module.css';
import Controler from './Controler/Controler';
import StaticsList from './StaticList/StaticList';
import Notification from './Notification/Notification';
import Section from './Secttion/section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setVeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good * 100) / total);
  };

  const onHendelFeedback = e => {
    const { name } = e.target;

    if (name === 'good') {
      setGood(good + 1);
    }

    if (name === 'neutral') {
      setVeutral(neutral + 1);
    }

    if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  const totalFeedback = bad + good + neutral;
  return (
    <div className={css.widget}>
      <Section title="Please leave feedback">
        <Controler onLiveFeedback={onHendelFeedback} />
      </Section>

      {!totalFeedback ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statics">
          <StaticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            feedbackProcent={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
};
