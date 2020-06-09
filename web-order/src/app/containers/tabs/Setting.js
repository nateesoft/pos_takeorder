import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fastfood from '@material-ui/icons/Fastfood';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SettingItem from './SettingItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>{children}</Box>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SettingPage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} style={{padding: "10px"}}>
        <TextField id="standard-basic" label="รหัสสินค้า" />
        <FormControlLabel control = { <Checkbox color="primary" /> }
          label="ต้องมีรายการอื่นในบิลก่อน" />
      </Paper>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Side Dish Free" icon={<Fastfood />} {...a11yProps(0)} />
          <Tab label="Extra" icon={<EmojiFoodBeverage />} {...a11yProps(1)} />
          <Tab label="Auto Add" icon={<LocalPharmacy />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{color: "black"}}>
        <SettingItem showChk={false} />
      </TabPanel>
      <TabPanel value={value} index={1} style={{color: "black"}}>
        <SettingItem showChk={true} />
      </TabPanel>
      <TabPanel value={value} index={2} style={{color: "black"}}>
        <SettingItem showChk={false} />
      </TabPanel>
    </div>
  );
}
