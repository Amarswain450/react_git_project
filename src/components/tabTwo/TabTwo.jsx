import React from 'react'
import './TabTwo.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    box: {
        width: "100%",
        display: "flex"
    },
    boxOne: {
        width: "50%",
        padding: "10px",
        color: "white"
    },
    boxTwo: {
        width: "50%",
        backgroundColor: "#5CBCFC",
        margin: "10px"
    },
    iconStyle: {
        marginLeft: "45%",
        padding: "20px",
    },
    iconStyleOne: {
        fontSize: "22px",
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        backgroundColor: "red",
        marginLeft: "-50px",
        cursor: "pointer"
    },
    iconStyleTwo: {
        fontSize: "22px",
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        backgroundColor: "green",
        marginLeft: "50px",
        cursor: "pointer"
    }
}));


const TabTwo = ({showTwo, Transition}) => {

    const classes = useStyle();

    return (
        <>
            <div className="tab__component">
                <Dialog
                    open={showTwo}
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
                                <Typography><span><SettingsIcon className={classes.titleIcon} /></span> Git Demonstration</Typography>
                            </Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent className={classes.dialogComponent}>
                    <Box className={classes.box}>
                        <Box className={classes.boxOne}>
                            <Typography>
                                Let's see what this looks like in practice. On the right we have a visualization of a (small) git repository. There are two commits right now -- the first initial commit, C0, and one commit after that C1 that might have some meaningful changes.
                            </Typography>
                        </Box>
                        <Box className={classes.boxTwo}>

                        </Box>
                    </Box>
                    <Box className={classes.iconStyle}>
                        <ArrowBackIcon className={classes.iconStyleOne} />
                        <ArrowForwardIcon className={classes.iconStyleTwo} />
                    </Box>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default TabTwo;
