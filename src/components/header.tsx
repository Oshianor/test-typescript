import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		background: '#DA1012',
		flexGrow: 1,
	},
};

export interface Props extends WithStyles<typeof styles> { }

function Header(props: Props) {
	const { classes } = props;

	return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#DA1012" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Test
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Header);
