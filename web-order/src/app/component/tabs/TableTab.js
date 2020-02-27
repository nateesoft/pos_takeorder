import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: 80
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))

export default function CSSGrid() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Zone - A
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        Zone - B
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>10</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>11</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>12</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>13</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 8" }}>
          <Paper className={classes.paper}>14</Paper>
        </div>
        <div style={{ gridColumnEnd: "span 4" }}>
          <Paper className={classes.paper}>15</Paper>
        </div>
      </div>
    </div>
  )
}
