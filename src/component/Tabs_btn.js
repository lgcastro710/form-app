import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormBasic } from './FormBasic';
import { FormAccount } from './FormAccount';
import { FormSetUp } from './FormSetUp';
import { FromInsurance } from './FormInsurance';

function TabPanel(props) {
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
        padding:0
    },
}));

export default function SimpleTabs({value,setvalue}) {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
         
               <div className="content-form">
            <TabPanel value={value} index={0}>
                   <FormBasic></FormBasic>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormAccount></FormAccount>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FormSetUp></FormSetUp>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FromInsurance></FromInsurance>
            </TabPanel>
               </div>
        </div>
    );
}
