import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 250,
    margin: 20,
    border: '1px solid'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 5,
    borderRadius: 0,
    background: '#00B5A4',
    color: '#fff',
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  typography: {
    margin: theme.spacing.unit * 2,
  },
  list: {
    background: '#00B5A4',
    padding: 5,
    marginRight: 5
  },
  themeColor: {
    color: '#00B5A4',
  },
    textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
    chip: {
      margin: theme.spacing.unit / 2,
    },
});


class CustomizedInputBase extends React.Component {
  state = {
    anchorEl: null
  }
  
  handleClick = event=> {
    console.log("clicked")
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
      name: null,
    });
  };

  handleChange = change => {
    console.log("changed,", change)
  }
  render() {

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <Paper className={classes.root} elevation={0} onClick={this.handleClick}>
          
          <InputBase className={classes.input} placeholder="Type to add event" />
          <IconButton className={classes.iconButton} aria-label="Plus">
            <AddIcon />
          </IconButton>
        </Paper>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
          }}
          >
          <Typography className={[classes.typography, classes.themeColor].join(' ')}>Enter your new event by typing a sentence</Typography>
          <Typography component="p" className={classes.typography}>Here are some examples</Typography>
          <Typography component="p" className={classes.typography}>
            <IconButton className={classes.list} aria-label="Plus">
            </IconButton>
            7:00 AM Doctors appointment with Dr. Jenny
          </Typography>
          <Typography component="p" className={classes.typography}>
            <IconButton className={classes.list} aria-label="Plus">
            </IconButton>
            Doctor chang 7:00am - 8:30am
          </Typography>
          <Divider light />
          <Typography component="p" className={classes.typography}>
            <IconButton className={classes.list} aria-label="Plus">
            </IconButton>
            Doctor chang 7:00am - 8:30am
          </Typography>
          <Typography component="p" className={classes.typography}>
            <IconButton className={classes.list} aria-label="Plus">
            </IconButton>
            Doctor chang 7:00am - 8:30am
          </Typography>
          <Divider light />
          <Typography component="p" className={classes.typography}>Or just create new event</Typography>
           <TextField
            id="standard-name"
            label="Name event"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
          />
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Chip
                key="angular"
                label="Feb 3"
                className={classes.chip}
              />
            </Grid>
            <Grid item xs={2}>
              <Chip
                key="angular"
                label="8AM"
                className={classes.chip}
              />
            </Grid>
            <Typography component="p" className={classes.typography}>to</Typography>
            <Grid item xs={2}>
              <Chip
                key="angular"
                label="Feb 4"
                className={classes.chip}
              />
            </Grid>
            <Grid item xs={2}>
              <Chip
                key="angular"
                label="8AM"
                className={classes.chip}
              />
            </Grid>
          </Grid>
        </Popover>
      </div>

    );
  }
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
