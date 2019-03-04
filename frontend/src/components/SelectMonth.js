import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';


const styles = theme => ({
	  root: {
	    margin: 20,
	    display:'flex',
	    alignItems: 'center',
	    color: '#00B5A4',
	  },
	  paper: {
	    padding: theme.spacing.unit * 2,
	    textAlign: 'center',
	    color: theme.palette.text.secondary,
	    height:'100%'
	  },
	  iconButton: {
	  	fontSize: '5rem',
	  	color: '#00B5A4',
	  },
	});
class SelectMonth extends React.Component {
	
	render() {
		return (
			<div className={this.props.classes.root}>
			<IconButton className={this.props.classes.iconButton} aria-label="ArrowLeft">
				<ArrowLeft />
			</IconButton>
			<p>December 2018</p>
			<IconButton className={this.props.classes.iconButton} aria-label="ArrowRight">
				<ArrowRight />
			</IconButton>
			</div>
		)
	}
}

export default withStyles(styles)(SelectMonth);