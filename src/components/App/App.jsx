import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import css from './App.module.css';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem('feedback');

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const percentagePositive = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <section className={css.section}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          percentagePositive={percentagePositive}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </section>
  );
}
