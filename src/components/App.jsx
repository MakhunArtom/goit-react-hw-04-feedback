import React, { Component } from 'react';
import css from './App.module.css';
import Controler from './Controler/Controler';
import StaticsList from './StaticList/StaticList';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;

    return Math.round((good * 100) / total);
  };

  onHendelFeedback = e => {
    this.setState(prevSteta => {
      const curentButton = e.target.textContent;

      if (curentButton === 'Good') {
        return {
          good: prevSteta.good + 1,
          total: prevSteta.total + 1,
        };
      }

      if (curentButton === 'Neutral') {
        return {
          neutral: prevSteta.neutral + 1,
          total: prevSteta.total + 1,
        };
      }
      if (curentButton === 'Bad') {
        return {
          bad: prevSteta.bad + 1,
          total: prevSteta.total + 1,
        };
      }
    });
  };

  render() {
    const { total } = this.state;

    return (
      <div className={css.widget}>
        <div className={css.widget__control}>
          <h1 className={css.control__title}>Please leave feedback</h1>
          <Controler onLiveFeedback={this.onHendelFeedback} />
        </div>

        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <div className={css.widget__statics}>
            <h2 className={css.statics__title}>Statics</h2>
            <StaticsList
              option={this.state}
              feedbackProcent={this.countPositiveFeedbackPercentage}
            />
          </div>
        )}
      </div>
    );
  }
}
