import { Component } from 'react';
import options from "./options"
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistic from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = event => {
    let key = event.target.textContent;
    this.setState(prevState => ({
      [key]: prevState[key] +1
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((item, acc) => item + acc, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    let allFeedbacks = this.countTotalFeedback();
    return (
      <>
         <Section title='Please leave feedback'
            children={<FeedbackOptions options ={options} onClick={this.onLeaveFeedback} />}
         />
         <Section title='Statistics' 
              children={allFeedbacks ? <Statistic good={good} neutral={neutral} bad={bad} total={allFeedbacks} positivePercents={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback" />}
         />
      </>
    );
  }
}

export default App;