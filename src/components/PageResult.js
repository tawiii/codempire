import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getData} from '../AC';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


class Result extends Component {

  componentDidMount() {
    if (!this.props.data.length) {
      this.props.getData();
    }
  }

  rightAnswers = 0;

  getResult = (data, answers) => {
    this.rightAnswers = 0;
    for(let key in answers) {
      data.forEach(item => {
        if (key === item.id) {
          if(item.type === 'checkbox') {
            let numPoints = 0;
            let points = 0.5;
            item.answers.forEach((n, j) => {
              if (answers[key][j]) {
                if (answers[key][j] === item.CorrectAnswer[0] || answers[key][j] === item.CorrectAnswer[1]) {
                  numPoints += points;
                } else {
                  numPoints -= points;
                }
              }
            })
            if (numPoints > 0) this.rightAnswers += numPoints
          } else {
            if(answers[key] === item.CorrectAnswer[0]) this.rightAnswers++;
          }
        }
      })
    }
  }

  render () {
    const {data, answers} = this.props;
    this.getResult(data, answers);
    const assessment = +(12/data.length*this.rightAnswers).toFixed(1);
    return (
      <div className="wrap">
        <Paper className="wrap-box result">
          <p>Number of correct answers: {this.rightAnswers}</p>
          <Divider />
          <p>Rating: {assessment} of 12</p>
        </Paper>
      </div>
    );
  }
}

export default connect((state) => ({
  data: state.data.data,
  answers: state.data.answers
}), {getData})(Result)
