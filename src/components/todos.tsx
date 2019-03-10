import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Typography, IconButton } from '@material-ui/core';
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
// import ApolloClient from "apollo-boost";


const styles = (theme: Theme) =>
  createStyles({
    container: {
			marginTop: 10,
			display: "flex",
			flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      // flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",

      borderRadius: 4,
      width: 400,
      height: 50,
      margin: 3
    },
    text: {
      paddingLeft: 10
    },
    icon: {
      paddingRight: 10
    }
  });

export interface Props extends WithStyles<typeof styles> { }

interface State {
	text: string;
}

const ExchangeRates = () => (
  <Query
    pollInterval={5000}
    query={gql`
      {
        todos {
          _id
          title
          status
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);

      return data.todos.map(
        ({ _id, title, status }: { _id: string; title: string; status: boolean; }) => (
          <div
            key={_id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 4,
              width: 400,
              height: 50,
              margin: 3
            }}
          >
            <Typography style={{ paddingLeft: 10 }}>
              {title}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <IconButton 
              style={{ paddingRight: 10 }} 
              // onClick={this.handleStatus.bind(this, _id)} 
              >
              {
                status ?
                <Star />
              :
                <StarBorder />
              }
            </IconButton>
          </div>
        )
      );
    }}
  </Query>
);

class CreateTodo extends React.Component<Props, State> {
	state = {
		text: 'Cat in the Hat',
	};

	handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[name]: event.target.value,
		} as Pick<State, keyof State>);
  };
  
  handleStatus = () => {
    console.log(3333333);
    
  }

	render() {
		const { classes } = this.props;
		const { text } = this.state;
		return (
      <div className={classes.container}>
        <ExchangeRates />
				{/* {[1,1,1,1,1].map((i, index) => (
					<div className={classes.root}>
						<Typography className={classes.text}>
							Words we can't explain
						</Typography>
						<div style={{ flexGrow: 1 }} />
						<IconButton className={classes.icon}>
							<Star />
						</IconButton>
					</div>
				))} */}
        
      </div>
    );
	}
}

(CreateTodo as React.ComponentClass<Props>).propTypes = {
	classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(CreateTodo);
