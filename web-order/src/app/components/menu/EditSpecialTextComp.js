import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import SaveIcon from "@material-ui/icons/Add"
import { TextField, Button, Grid } from "@material-ui/core"
import { useDispatch, connect } from "react-redux"
import { addNewSpecialText, clearSpecialText } from "../../actions"
import MessageUtil from '../../utils/alertMsg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "orange",
  },
}))

const EditSpecialTextComp = props => {
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const [chipIdMax, setChipIdMax] = useState(0)
  const [chipData, setChipData] = useState([])
  const [chipOption, setChipOption] = useState("")
  const dispatch = useDispatch()
  const { item, loadOrderSpecial } = props

  useEffect(() => {
    setMsgError('')
    loadOrderSpecial(item.uid)
    return () => {
      setChipData([])
    }
  }, [item.uid, loadOrderSpecial])

  const handleAdd = () => {
    if (chipOption !== "") {
      const options = {
        key: chipIdMax + 1,
        label: chipOption,
      }
      setChipData(chips => chips.concat(options))
      setChipOption("")
      setChipIdMax(chipIdMax + 1)
      dispatch(addNewSpecialText(options))
    }
  }

  const handleDelete = chipToDelete => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
    dispatch(clearSpecialText(chipToDelete))
  }

  return (
    <div>
      {chipData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        )
      })}
      <Grid
        container
        spacing={2}
        style={{
          flexGrow: 1,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Grid item xs={6}>
          <TextField
            id="options"
            label="เพิ่มข้อความ"
            variant="outlined"
            style={{ width: 250 }}
            value={chipOption}
            onChange={evt => setChipOption(evt.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={() => handleAdd()}
          >
            OK
          </Button>
        </Grid>
      </Grid>
      {msgError && <MessageUtil message={msgError} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loadOrderSpecial: uid => dispatch({
      type: 'LOAD_ORDER_SPECIAL',
      payload: {
        uid: uid,
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSpecialTextComp)
