import React, {useState} from 'react'
import './Tab.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Main from '../main/Main';
import Remote from '../remote/Remote';

const useStyle = makeStyles((theme) => ({
    modalComponent: {
        marginLeft: "18%",
        width: "70%"
    },
    dialogComponent:{
        background: "rgba(0, 0, 0, 0.8)"
    },
    headingStyle: {
        display: 'flex',
        alignItems: 'center'
    },
    roundStyle: {
        display: 'flex'
    },
    roundOne:{
        width: "14px",
        height: "14px",
        borderRadius: "100%",
        backgroundColor: "red"
    },
    roundTwo:{
        width: "14px",
        height: "14px",
        borderRadius: "100%",
        backgroundColor: "green",
        marginLeft: "5px"
    },
    roundThree:{
        width: "14px",
        height: "14px",
        borderRadius: "100%",
        backgroundColor: "yellow",
        marginLeft: "5px"
    },
    title: {
        margin: '0 auto'
    },
    titleIcon: {
        fontSize: "15px"
    },
    btnStyle:{
        display: 'flex',
        justifyContent: 'center'
    },
    btnTab: {
        backgroundColor: "gray",
        fontWeight: "400",
        "&:hover": {
            backgroundColor: "gray"
        },
        "&:last-child": {
            marginLeft: "10px"
        }
    },
    active: {
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "white"
        }
    },
    hr_style: {
        height: "2px",
        backgroundColor: "white"
    }
}));

const mainRemoteMap = {
    main: Main,
    remote: Remote
}

const Tab = ({show, Transition, setShow}) => {

    const classes = useStyle();
    const [type, setType] = useState('main');
    const Component = mainRemoteMap[type];

    return (
        <>
            <div className="tab__component">
                <Dialog
                    open={show}
                    className={classes.modalComponent}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth={true}
                    maxWidth={'md'}
                >
                    <DialogTitle>
                        <Box className={classes.headingStyle}>
                            <Box className={classes.roundStyle}>
                                <Box className={classes.roundOne}></Box>
                                <Box className={classes.roundTwo}></Box>
                                <Box className={classes.roundThree}></Box>
                            </Box>
                            <Box className={classes.title}>
                                <Typography><span><SettingsIcon className={classes.titleIcon} /></span> Select a level</Typography>
                            </Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent className={classes.dialogComponent}>
                        <Box className={classes.btnStyle}>
                            <Button variant="text" className={`${classes.btnTab} ${type === "main" ? classes.active : ""}`} onClick={() => setType("main")}>Main</Button>
                            <Button variant="text" className={`${classes.btnTab} ${type === "remote" ? classes.active : ""}`} onClick={() => setType("remote")}>Remote</Button>
                        </Box>
                        <Box className={classes.hr_style} ></Box>
                        <Component setShow={setShow} />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default Tab
