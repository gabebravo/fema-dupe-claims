import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ClaimsList from './ClaimsList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 800,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: 'auto',
    width: '100%'
  },
}));

export default function List({ data = [], showList = false }) {
  const classes = useStyles();

  return (
    <Grid item item sm={5} xs={12} className={classes.root}>
      <Paper className={classes.paper}>
        { showList && data?.data.length > 0 ? <ClaimsList claims={data?.data}/> : <Typography>Please click on "get info" on map pin to see claims</Typography>}
      </Paper>
    </Grid>
  )
}