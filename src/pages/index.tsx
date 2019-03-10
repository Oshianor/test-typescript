import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';
import CreateTodo from '../components/createTodo';
import Header from '../components/header'
import Todos from '../components/todos';


const styles = (theme: Theme) =>
  createStyles({
    root: {
      background: "#FFD6DB",
      height: "100vh"
      // display: 'flex',
      // justifyContent: "center",
      // alignItems: 'center'
      // textAlign: 'center',
    }
  });

type State = {
  open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <CreateTodo />
        <Todos />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
