import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: '#00B5A4',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'100%'
  },
  typography: {
    fontSize: 12,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  const weekDays = [
  	{ day: 'Tuesday', date: 6 },
  	{ day: 'Wednesday', date: 7 },
  	{ day: 'Thursday', date: 8 },
  	{ day: 'Friday', date: 9 },
  	{ day: 'Saturday', date: 10 },
  	{ day: 'Sunday', date: 11 }
  ];

  const rows = 12,
    column = 7;


  return (
    <div className={classes.root}>
      {
        [...Array(rows)].map((x, index)=>
          <Grid container>
            <Grid container xs={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper} square={true}>
                  <Typography className={classes.typography} component="p" align="left">
                    { index+4 } {index+4>11 ? 'PM': 'AM'}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container xs={10}>
            {
              [...Array(column -1)].map((x, i)=>
                <Grid item xs={2}>
                  <Paper className={classes.paper} square={true}>
                    <Typography component="p">
                    </Typography>
                  </Paper>
                </Grid>
              )
            }
            </Grid>
          </Grid>
        )
      }
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
