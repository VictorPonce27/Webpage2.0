import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DashBoard from '@material-ui/icons/Dashboard'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function navBar(classes, value, handleChange) {
  if(sessionStorage.admin !== "0") {
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab aria-current href='#/Portal' label="Home"/>
          <Tab aria-current href='#/UserProfile' label="User"/>
          <Tab aria-current href='#/Game' label="Game"/>
          <Tab aria-current href='#Admin' label="Admin"/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <DashBoard fontSize='large' />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountBoxIcon fontSize='large' />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VideogameAssetIcon fontSize='large' />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SupervisedUserCircleIcon fontSize='large' />
        </TabPanel>
      </div>
    );
  }
  else {
    return(

      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab aria-current href='#/Portal' label="Home"/>
          <Tab aria-current href='#/UserProfile' label="User"/>
          <Tab aria-current href='#/Game' label="Game"/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <DashBoard fontSize='large' />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccountBoxIcon fontSize='large' />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VideogameAssetIcon fontSize='large' />
        </TabPanel>
      </div>
    );
  }
}

export default function VerticalTabs(Props) {

  
  const classes = useStyles();
  const [value, setValue] = React.useState(Props.tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    navBar(classes, value, handleChange)
  );
}