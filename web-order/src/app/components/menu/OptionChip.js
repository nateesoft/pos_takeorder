import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import TagFacesIcon from "@material-ui/icons/TagFaces"
import SaveIcon from "@material-ui/icons/Add"
import { TextField, Button, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { addNewSpecialText } from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "orange"
  }
}))

export default function OptionChip() {
  const classes = useStyles()
  const [chipIdMax, setChipIdMax] = useState(0)
  const [chipData, setChipData] = useState([])
  const [chipOption, setChipOption] = useState("")
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (chipOption !== "") {
      const options = {
        key: chipIdMax + 1,
        label: chipOption
      }
      setChipData(chips => chips.concat(options))
      setChipOption("")
      setChipIdMax(chipIdMax + 1)
      dispatch(addNewSpecialText({
        special_text: chipData
      }))
    }
  }

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <div>
      {chipData.map(data => {
        let icon

        if (data.label === "React") {
          icon = <TagFacesIcon />
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
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
          backgroundColor: "#eeeeee"
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
    </div>
  )
}
