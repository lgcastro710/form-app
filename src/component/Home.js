import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme/theme";
import { Navbar } from "./Navbar";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabsBtn from "./Tabs_btn";
import { useState } from "react";

export const Home = () => {

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] =useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


        return (
            <>
<ThemeProvider theme={theme}>
      <CssBaseline />
          <Navbar />
            {/* <div className="content-principal"> */}
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Basic Info" {...a11yProps(0)} />
                    <Tab label="Account Numbers" {...a11yProps(1)} />
                    <Tab label="Set Up Info" {...a11yProps(2)} />
                    <Tab label="Insurance Info" {...a11yProps(3)} />
                    <Tab label="Web Access" {...a11yProps(4)} />
                    <Tab label="Docs control" {...a11yProps(5)} />
                    <Tab label="Payment Info" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
                <TabsBtn value={value} setValue={setValue}></TabsBtn>
            {/* </div> */}
          </ThemeProvider>
            </>
        );
    }

