import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import { useDispatch, useSelector } from "react-redux"
import { chooseTable } from "../../actions"

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
    height: 80,
    fontSize: 36
  },
  paperSelect: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    height: 80,
    fontSize: 36,
    backgroundColor: "pink"
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))

export default function TableTab() {
  const classes = useStyles()
  const [tbSel, setTbSel] = useState(0)
  const dispatch = useDispatch()
  const table_no = useSelector(state => state.table.tableNo)

  const selectTable = tableNo => {
    setTbSel(tableNo)
    dispatch(chooseTable(tableNo))
  }

  const newClass = no => {
    return parseInt(tbSel) === no ? classes.paperSelect : classes.paper
  }

  useEffect(() => {
    setTbSel(table_no)
    return function() {}
  }, [table_no])

  // if (table_no === "") {
  //   return <Redirect push to={`/login`} />
  // }

  return (
    <div>
      <h2 align="center">โต๊ะอาหารภายในร้าน</h2>
      <Typography variant="subtitle1" gutterBottom>
        Zone - A
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={newClass(1)} onClick={() => selectTable(1)}>
            1
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={newClass(2)} onClick={() => selectTable(2)}>
            2
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={newClass(3)} onClick={() => selectTable(3)}>
            3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={newClass(4)} onClick={() => selectTable(4)}>
            4
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={newClass(5)} onClick={() => selectTable(5)}>
            5
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={newClass(6)} onClick={() => selectTable(6)}>
            6
          </Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        Zone - B
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={newClass(10)} onClick={() => selectTable(10)}>
            10
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={newClass(11)} onClick={() => selectTable(11)}>
            11
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={newClass(12)} onClick={() => selectTable(12)}>
            12
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={newClass(13)} onClick={() => selectTable(13)}>
            13
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 4" }}>
          <Paper className={newClass(14)} onClick={() => selectTable(14)}>
            14
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 4" }}>
          <Paper className={newClass(15)} onClick={() => selectTable(15)}>
            15
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 4" }}>
          <Paper className={newClass(16)} onClick={() => selectTable(16)}>
            16
          </Paper>
        </div>
      </div>
    </div>
  )
}
