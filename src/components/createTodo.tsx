import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Add from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Star';
import VisibilityOff from '@material-ui/icons/StarBorder';
import Axios from 'axios';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
		margin: {
			margin: theme.spacing.unit,
		},
		textField: {
			borderRadius: 20,
			// flexBasis: 400,
		},
		border: {
		}
	});


export interface Props extends WithStyles<typeof styles> { }

interface State {
	title: string;
	status: boolean;
}

class OutlinedInputAdornments extends React.Component<Props, State> {
  state = {
    title: "",
    status: false
  };

  handleChange = (prop: "title") => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ [prop]: event.target.value } as Pick<State, typeof prop>);
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ status: !state.status }));
  };

  handleCreate = async (e: any) => {
    e.preventDefault();
    const { status, title } = this.state;
		// console.log(status, title);
		const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify({ status, title }),
      url: "http://localhost:3000",
    };
		
		try {
    await Axios(options);
			this.setState({
				title: ''
			})
		} catch (error) {
			console.log(error);
			
		}
		
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={this.handleCreate}>
          <TextField
            id="outlined"
            className={classes.textField}
            autoFocus
            required
            variant="filled"
            type="text"
            placeholder="Add Todo List"
            value={this.state.title}
            onChange={this.handleChange("title")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Add />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {!this.state.status ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </form>
      </div>
    );
  }
}

(OutlinedInputAdornments as React.ComponentClass<Props>).propTypes = {
	classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(OutlinedInputAdornments);
