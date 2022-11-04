import React, { Component } from 'react';
import css from './App.module.css';
import Controler from './Controler/Controler';
import StaticsList from './StaticList/StaticList';
import Notification from './Notification/Notification';
import Section from './Secttion/section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;

    return Math.round((good * 100) / total);
  };

  onHendelFeedback = e => {
    const { name } = e.target;

    this.setState(prevSteta => {
      return {
        [name]: prevSteta[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = bad + good + neutral;

    return (
      <div className={css.widget}>
        <Section title="Please leave feedback">
          <Controler onLiveFeedback={this.onHendelFeedback} />
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
              feedbackProcent={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}
