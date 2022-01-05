import React from 'react'
import './Main.css'
import { Box, Typography, makeStyles, Button } from '@material-ui/core'
import { useState } from 'react';
import TabOne from '../tabOne/TabOne';

const useStyle = makeStyles((theme) => ({
    titleStyle: {
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        fontSize: "18px"
    },
    dottedStyle: {
        borderBottom: '1px dotted white'
    },
    headingStyle: {
        color: "white",
        fontSize: "12px",
        padding: "5px 0",
        wordSpacing: "5px"
    },
    content__style__active: {
        color: "white",
        fontSize: "12px",
        padding: "5px 0",
        wordSpacing: "5px",
        display: "block"
    },
    content__style: {
        display: "none"
    },
    button__style__active: {
        backgroundColor: "white",
        marginLeft: "20px",
        margin: "10px 0",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.7)",
        "&:hover": {
            backgroundColor: "gray"
        }
    },
    button__style: {
        backgroundColor: "white",
        marginLeft: "20px",
        margin: "10px 0",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.7)",
        "&:hover": {
            backgroundColor: "white"
        }
    }
}));

const Main = ({setShow}) => {
    const classes = useStyle();
    const [toggleState, setToggleState] = useState(1);
    const [toggleStateTwo, setToggleStateTwo] = useState(1);
    const [toggleStateThree, setToggleStateThree] = useState(1);
    const [toggleStateFour, setToggleStateFour] = useState(1);
    const [toggleStateFive, setToggleStateFive] = useState(1);
    const [shows, setShows] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleTabTwo = (index) => {
        setToggleStateTwo(index);
    }

    const toggleTabThree = (index) => {
        setToggleStateThree(index);
    }

    const toggleTabFour = (index) => {
        setToggleStateFour(index);
    }

    const toggleTabFive = (index) => {
        setToggleStateFive(index);
    }

    const openTab = () => {
        setTimeout(() => {
            setShows(true)
        },400);
    }

    const clickHander = () => {
        setShow(false);
        openTab();
    }

    return (
        <>
            <div className="main__component">
                <Box>
                    <Typography className={classes.titleStyle}>Introduction Sequence</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>A nicely paced introduction to the majority of git commands</Typography>
                    <Box>
                        <Typography className={`${toggleState === 1 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Introduction to Git Commits</Typography>
                        <Typography className={`${toggleState === 2 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Branching in Git</Typography>
                        <Typography className={`${toggleState === 3 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Merging in Git</Typography>
                        <Typography className={`${toggleState === 4 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Rebase Introduction</Typography>
                    </Box>
                    <Box>
                        <Button 
                            variant="text" 
                            onMouseOver={() => toggleTab(1)} 
                            className={`${toggleState === 1 ? classes.button__style__active : classes.button__style}`}
                            onClick={() => clickHander()}
                        >
                            1
                        </Button>
                        <Button variant="text" onMouseOver={() => toggleTab(2)} className={`${toggleState === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(3)} className={`${toggleState === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(4)} className={`${toggleState === 4 ? classes.button__style__active : classes.button__style}`}>4</Button>
                    </Box>
                </Box> 
                <Box>
                    <Typography className={classes.titleStyle}>Ramping Up</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>The next serving of 100% git awesomes-ness. Hope you're hungry</Typography>
                    <Box>
                        <Typography className={`${toggleStateTwo === 1 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Detach yo' HEAD</Typography>
                        <Typography className={`${toggleStateTwo === 2 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Relative Refs (^)</Typography>
                        <Typography className={`${toggleStateTwo === 3 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Relative Refs #2 (~)</Typography>
                        <Typography className={`${toggleStateTwo === 4 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Reversing Changes in Git</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(1)} className={`${toggleStateTwo === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(2)} className={`${toggleStateTwo === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(3)} className={`${toggleStateTwo === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(4)} className={`${toggleStateTwo === 4 ? classes.button__style__active : classes.button__style}`}>4</Button>
                    </Box>
                </Box>
                <Box>
                    <Typography className={classes.titleStyle}>Moving Work Around</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>"Git" comfortable with modifying the source tree :P</Typography>
                    <Box>
                        <Typography className={`${toggleStateThree === 1 ? classes.content__style__active : classes.content__style}`}>{toggleStateThree}: Cherry-pick Intro</Typography>
                        <Typography className={`${toggleStateThree === 2 ? classes.content__style__active : classes.content__style}`}>{toggleStateThree}: Interactive Rebase Intro</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTabThree(1)} className={`${toggleStateThree === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTabThree(2)} className={`${toggleStateThree === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                    </Box>
                </Box>
                <Box>
                    <Typography className={classes.titleStyle}>A Mixed Bag</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>A mixed bag of Git techniques, tricks, and tips</Typography>
                    <Box>
                        <Typography className={`${toggleStateFour === 1 ? classes.content__style__active : classes.content__style}`}>{toggleStateFour}: Grabbing Just 1 Commit</Typography>
                        <Typography className={`${toggleStateFour === 2 ? classes.content__style__active : classes.content__style}`}>{toggleStateFour}: Juggling Commits</Typography>
                        <Typography className={`${toggleStateFour === 3 ? classes.content__style__active : classes.content__style}`}>{toggleStateFour}: Juggling Commits #2</Typography>
                        <Typography className={`${toggleStateFour === 4 ? classes.content__style__active : classes.content__style}`}>{toggleStateFour}: Git Tags</Typography>
                        <Typography className={`${toggleStateFour === 5 ? classes.content__style__active : classes.content__style}`}>{toggleStateFour}: Git Describe</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTabFour(1)} className={`${toggleStateFour === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFour(2)} className={`${toggleStateFour === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFour(3)} className={`${toggleStateFour === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFour(4)} className={`${toggleStateFour === 4 ? classes.button__style__active : classes.button__style}`}>4</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFour(5)} className={`${toggleStateFour === 5 ? classes.button__style__active : classes.button__style}`}>5</Button>
                    </Box>
                </Box>
                <Box>
                    <Typography className={classes.titleStyle}>Advanced Topics</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>For the truly brave!</Typography>
                    <Box>
                        <Typography className={`${toggleStateFive === 1 ? classes.content__style__active : classes.content__style}`}>{toggleStateFive}: Rebasing over 9000 times</Typography>
                        <Typography className={`${toggleStateFive === 2 ? classes.content__style__active : classes.content__style}`}>{toggleStateFive}: Multiple parents</Typography>
                        <Typography className={`${toggleStateFive === 3 ? classes.content__style__active : classes.content__style}`}>{toggleStateFive}: Branch Spaghetti</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTabFive(1)} className={`${toggleStateFive === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFive(2)} className={`${toggleStateFive === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTabFive(3)} className={`${toggleStateFive === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                    </Box>
                </Box>
            </div>
            <TabOne shows={shows} setShows={setShows} />
        </>
    )
}

export default Main
