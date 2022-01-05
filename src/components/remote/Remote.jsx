import React from 'react'
import './Remote.css'
import { Box, Typography, makeStyles, Button } from '@material-ui/core'
import { useState } from 'react';

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

const Remote = () => {
    const classes = useStyle();
    const [toggleState, setToggleState] = useState(1);
    const [toggleStateTwo, setToggleStateTwo] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleTabTwo = (index) => {
        setToggleStateTwo(index);
    }

    return (
        <>
            <div className="main__component">
                <Box>
                    <Typography className={classes.titleStyle}>Push & Pull -- Git Remotes!</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>Time to share your 1's and 0's kids; coding just got social</Typography>
                    <Box>
                        <Typography className={`${toggleState === 1 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Clone Intro</Typography>
                        <Typography className={`${toggleState === 2 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Remote Branches</Typography>
                        <Typography className={`${toggleState === 3 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Git Fetchin'</Typography>
                        <Typography className={`${toggleState === 4 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Git Pullin'</Typography>
                        <Typography className={`${toggleState === 5 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Faking Teamwork</Typography>
                        <Typography className={`${toggleState === 6 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Git Pushin'</Typography>
                        <Typography className={`${toggleState === 7 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Diverged History</Typography>
                        <Typography className={`${toggleState === 8 ? classes.content__style__active : classes.content__style}`}>{toggleState}: Locked Main</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTab(1)} className={`${toggleState === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(2)} className={`${toggleState === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(3)} className={`${toggleState === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(4)} className={`${toggleState === 4 ? classes.button__style__active : classes.button__style}`}>4</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(5)} className={`${toggleState === 5 ? classes.button__style__active : classes.button__style}`}>5</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(6)} className={`${toggleState === 6 ? classes.button__style__active : classes.button__style}`}>6</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(7)} className={`${toggleState === 7 ? classes.button__style__active : classes.button__style}`}>7</Button>
                        <Button variant="text" onMouseOver={() => toggleTab(8)} className={`${toggleState === 8 ? classes.button__style__active : classes.button__style}`}>8</Button>
                    </Box>
                </Box> 
                <Box>
                    <Typography className={classes.titleStyle}>To Origin And Beyond -- Advanced Git Remotes!</Typography>
                    <Box className={classes.dottedStyle}></Box>
                    <Typography className={classes.headingStyle}>And you thought being a benevolent dictator would be fun...</Typography>
                    <Box>
                        <Typography className={`${toggleStateTwo === 1 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Push Main!</Typography>
                        <Typography className={`${toggleStateTwo === 2 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Merging with remotes</Typography>
                        <Typography className={`${toggleStateTwo === 3 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Remote Tracking</Typography>
                        <Typography className={`${toggleStateTwo === 4 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Git push arguments</Typography>
                        <Typography className={`${toggleStateTwo === 5 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Git push arguments -- Expanded!</Typography>
                        <Typography className={`${toggleStateTwo === 6 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Fetch arguments</Typography>
                        <Typography className={`${toggleStateTwo === 7 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Source of nothing</Typography>
                        <Typography className={`${toggleStateTwo === 8 ? classes.content__style__active : classes.content__style}`}>{toggleStateTwo}: Pull arguments</Typography>
                    </Box>
                    <Box>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(1)} className={`${toggleStateTwo === 1 ? classes.button__style__active : classes.button__style}`}>1</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(2)} className={`${toggleStateTwo === 2 ? classes.button__style__active : classes.button__style}`}>2</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(3)} className={`${toggleStateTwo === 3 ? classes.button__style__active : classes.button__style}`}>3</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(4)} className={`${toggleStateTwo === 4 ? classes.button__style__active : classes.button__style}`}>4</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(5)} className={`${toggleStateTwo === 5 ? classes.button__style__active : classes.button__style}`}>5</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(6)} className={`${toggleStateTwo === 6 ? classes.button__style__active : classes.button__style}`}>6</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(7)} className={`${toggleStateTwo === 7 ? classes.button__style__active : classes.button__style}`}>7</Button>
                        <Button variant="text" onMouseOver={() => toggleTabTwo(8)} className={`${toggleStateTwo === 8 ? classes.button__style__active : classes.button__style}`}>8</Button>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Remote
