import React from 'react';
import './TabOne.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Box, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TabTwo from '../tabTwo/TabTwo';
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyle = makeStyles((theme) => ({
    modalComponent: {
        marginLeft: "18%",
        width: "70%",
        scrollBehavior: "smooth"
    },
    dialogComponent:{
        background: "rgba(0, 0, 0, 0.8)"
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
    dialogContentText: {
        color: "white",
        textAlign: "center",
        padding: "17px 0",
        fontSize: "22px"
    },
    typographyOne: {
        color: "white",
        lineHeight: "1.8"
    },
    typographyTwo: {
        color: "white",
        marginTop: "20px",
        lineHeight: "1.8"
    },
    typographyThree: {
        color: "white",
        marginTop: "20px",
        lineHeight: "1.8"
    },
    typographyFour: {
        color: "white",
        marginTop: "20px",
        lineHeight: "1.8"
    },
    iconStyle: {
        marginLeft: "45%",
        padding: "20px"
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

const TabOne = ({shows, setShows}) => {
    const classes = useStyle();
    const [showTwo, setShowTwo] = useState(false);

    const openShowTwo = () => {
        setShowTwo(true);
    }

    const arrowForwardFun = () => {
        setShows(false);
        openShowTwo();
    }

    return (
        <>
            <div className="home__component">
                <Dialog
                    open={shows}
                    className={classes.modalComponent}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth={true}
                    maxWidth={'md'}
                >
                    <DialogTitle>
                        <Box className={classes.roundStyle}>
                            <Box className={classes.roundOne}></Box>
                            <Box className={classes.roundTwo}></Box>
                            <Box className={classes.roundThree}></Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent className={classes.dialogComponent}>
                        <DialogContentText className={classes.dialogContentText}>
                            Git Commits
                        </DialogContentText>
                        <Typography className={classes.typographyOne}>
                            A commit in a git repository records a snapshot of all the (tracked) files in your directory. It's like a giant copy and paste, but even better!
                        </Typography>
                        <Typography className={classes.typographyTwo}>
                            Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.
                        </Typography>
                        <Typography className={classes.typographyThree}>
                            Git also maintains a history of which commits were made when. That's why most commits have ancestor commits above them -- we designate this with arrows in our visualization. Maintaining history is great for everyone working on the project!
                        </Typography>
                        <Typography className={classes.typographyFour}>
                            It's a lot to take in, but for now you can think of commits as snapshots of the project. Commits are very lightweight and switching between them is wicked fast!
                        </Typography>
                        <Box className={classes.iconStyle}>
                            <ArrowBackIcon className={classes.iconStyleOne} />
                            <ArrowForwardIcon className={classes.iconStyleTwo} onClick={() => arrowForwardFun()} />
                        </Box>
                    </DialogContent>
                </Dialog>
            </div>
            <TabTwo showTwo={showTwo} Transition={Transition} />
        </>
    );
}

export default TabOne;