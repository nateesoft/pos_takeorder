import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Grid } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Add"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const SettingItem = props => {
    const { showChk } = props
    const classes = useStyles();
    const [chipIdMax, setChipIdMax] = useState(0)
    const [chipOption, setChipOption] = useState("")
    const [chipData, setChipData] = useState([]);
    const [check, setCheck] = useState(false)

    const handleAdd = () => {
        if (chipOption !== "") {
            setChipData(chips => chips.concat({
                key: chipIdMax + 1,
                label: chipOption,
            }))
            setChipOption("")
            setChipIdMax(chipIdMax + 1)
        }
    }

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper component="ul" className={classes.root}>
            {chipData.map((data) => {
                return (
                    <li key={data.key}>
                        <Chip
                        label={data.label}
                        onDelete={handleDelete(data)}
                        className={classes.chip}
                        />
                    </li>
                );
            })}
            <Grid
                container
                spacing={2}
                style={{
                flexGrow: 1,
                marginTop: 10,
                marginBottom: 10,
                }}
            >
                <Grid item xs={6}>
                <TextField
                    id="options"
                    label="เพิ่มสินค้า"
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
            {showChk && <FormControlLabel 
                control={
                    <Checkbox
                    checked={check}
                    onClick={()=>setCheck(!check)}
                    name="checkedB"
                    color="primary"
                    />
                }
                label="Can add more extra item"
            />}
        </Paper>
    );
}

export default SettingItem
