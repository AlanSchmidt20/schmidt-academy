import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  "./NavBar.css"


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="navbar" sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <img src="../../public/images/logo.png" className="navbar--logo"/>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="navbar--tabs">
          <Tab label="HOME" className="tab--item" {...a11yProps(0)} />
          <Tab label="ABOUT US" {...a11yProps(1)} />
          <Tab label="SERVICES" {...a11yProps(3)} />
          <Tab label="PROGRAM" {...a11yProps(3)} />
          <Tab label="STAFF" {...a11yProps(4)} />
          <Tab label="TESTIMONIALS" {...a11yProps(5)} />
          <Tab label="CONTACT" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </Box>
  );
}

export default NavBar
