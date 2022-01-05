import React, {useState} from 'react';
import './Home.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Box, makeStyles, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import Tab from '../../components/tab/Tab';


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
        marginTop: "20px"
    },
    spanStyle: {
        padding: '4px 8px',
        background: "gray",
        margin: '0 5px'
    },
    typographyFour: {
        color: "white",
        marginTop: "20px"
    },
    typographyFive: {
        color: "white",
        marginTop: "20px",
        lineHeight: "1.8"
    },
    iconStyle: {
        color: "green",
        fontSize: "55px",
        marginLeft: "45%",
        cursor: "pointer"
    },
    linkStyle: {
        color: 'pink',
        fontWeight: "#FF33E0",
        cursor: "pointer",
        "&:hover": {
            color: 'pink',
            fontWeight: "#FF33E0"
        }
    }
}))

const Home = () => {
    const classes = useStyle()
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = useState(false);

    const openTab = () => {
        setTimeout(() => {
            setShow(true)
        },400);
    }

    const handleClick = () => {
        setOpen(false);
        openTab();
    }

    return (
        <>
            <div className="home__component">
                <Dialog
                    open={open}
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
                            Welcome to Learn Git Branching
                        </DialogContentText>
                        <Typography className={classes.typographyOne}>
                            Interested in learning Git? Well you've come to the right place! "Learn Git Branching" is the most visual and interactive way to learn Git on the web; you'll be challenged with exciting levels, given step-by-step demonstrations of powerful features, and maybe even have a bit of fun along the way.
                        </Typography>
                        <Typography className={classes.typographyTwo}>
                            After this dialog you'll see the variety of levels we have to offer. If you're a beginner, just go ahead and start with the first. If you already know some Git basics, try some of our later more challenging levels.
                        </Typography>
                        <Typography className={classes.typographyThree}>
                            You can see all the commands available with <span className={classes.spanStyle}>show commands</span> at the terminal.
                        </Typography>
                        <Typography className={classes.typographyFour}>
                            PS: Want to go straight to a sandbox next time? Try out <a className={classes.linkStyle}>this special link</a>
                        </Typography>
                        <Typography className={classes.typographyFive}>
                            PPS: GitHub has started naming the default branch <span className={classes.spanStyle}>main</span> instead of <span className={classes.spanStyle}>master</span> to migrate away from biased terminology <a className={classes.linkStyle}>(more details available here)</a>. In accordance with this industry-wide movement, we have also updated "Learn Git Branching" to use <span className={classes.spanStyle}>main</span> instead of <span className={classes.spanStyle}>master</span> in our lessons. This rename should be fairly consistent by now but if you notice any errors, feel free to submit a PR (or open an issue).
                        </Typography>
                        <Box>
                            <DoneIcon className={classes.iconStyle} onClick={handleClick} />
                        </Box>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="tab__container">
                <Tab show={show} Transition={Transition} setShow={setShow} />
            </div>
        </>
    );
}

export default Home;