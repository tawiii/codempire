import React, { Component } from 'react';
import {getData, getResult} from '../AC';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Modal from './Modal';
import Paper from '@material-ui/core/Paper';
import Loading from './Loading';


class PageQuestions extends Component {

  state = {
    answers: {},
    open: false
  };

  componentDidMount() {
    this.props.getData();
  }

  handleChangeText = (id, answers) => event => {
    const value = event.target.value;
    this.setState({
      answers: {
        ...this.state.answers,
        [id]: value === answers ? '0' : null
      }
    }, () => {
      if(value.length) return
        delete this.state.answers[id]
    })
  };

  handleChangeRadio = id => event => {
    this.setState({
      answers: {
        ...this.state.answers,
        [id]: event.target.value
      }
    });
  };

  handleChangeCheckbox = id => event => {
    const value = event.target.value;
    const checked = event.target.checked;
      this.setState({
        answers: {
          ...this.state.answers,
          [id]: {
            ...this.state.answers[id],
            [value]: value
          }
        }
      }, () => {
        if(checked) return
          delete this.state.answers[id][value]
        if (Object.keys(this.state.answers[id]).length) return
          delete this.state.answers[id]
      });
  };

  handleSubmit = () => {
    const {answers} = this.state;
    const {data, history, getResult} = this.props;
    if (Object.keys(answers).length === data.length) {
      getResult(answers);
      history.push(`/result`);
    } else {this.setState({open: true})}
  }

  handleClose = (answer) => {
    this.setState({open: false});
    if(answer === 'yes') {
      this.props.getResult(this.state.answers);
      this.props.history.push(`/result`);
    }
  };

  render () {
    const {data, isLoading} = this.props;
    const {open} = this.state;
    if(isLoading) return <Loading />
    return (
      <div className="wrap">
        {open && <Modal
          handleClose = {this.handleClose}
          open = {open}
        />}
        <h1>Questions about the story:</h1>
        <form noValidate autoComplete="off">
          {
            data.map(obj => {
              return (
                <Paper className="wrap-box" key={obj.id}>
                  <p>{obj.question}</p>
                  {
                    obj.answers.map((item, i) => {
                      return (
                        <div key={i}>
                          {
                            (obj.type === 'text') ?
                              <TextField
                                label="Answer"
                                variant="outlined"
                                onChange={this.handleChangeText(obj.id, obj.answers[0])}
                              /> :
                            (obj.type === 'checkbox') ?
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={this.state.answers[obj.id] && this.state.answers[obj.id][i] === i}
                                    onChange={this.handleChangeCheckbox(obj.id)}
                                    value={`${i}`}
                                    color="primary"
                                  />
                                }
                                label={item}
                              /> :
                            (obj.type === 'radio') ?
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={this.state.answers[obj.id] === `${i}`}
                                  onChange={this.handleChangeRadio(obj.id)}
                                  value={`${i}`}
                                  color="primary"
                                />
                              }
                              label={item}
                            /> :
                            <FormControl>
                              <NativeSelect
                                onChange={this.handleChangeRadio(obj.id)}
                              >
                              <option value="0">{obj.selectAnswer[0]}</option>
                              <option value="1">{obj.selectAnswer[1]}</option>
                              <option value="2">{obj.selectAnswer[2]}</option>
                              </NativeSelect>
                            </FormControl>
                          }
                        </div>
                      )
                    })
                  }
                </Paper>
              )
            })
          }
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleSubmit}
          >
            Reply
          </Button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  data: state.data.data,
  isLoading: state.data.isLoading
}), {getData, getResult})(withRouter(PageQuestions))
