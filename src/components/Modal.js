import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class Modal extends Component {

  render () {
    const {open, handleClose} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Dialog
          open={open}
        >
          <DialogContent>
            <DialogContentText>
              Every unanswered answer is considered incorrect, you are sure that you want
              Continue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose('no')} color="primary">
              Disagree
            </Button>
            <Button onClick={() => handleClose('yes')} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default Modal;
