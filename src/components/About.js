import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: '100%',
        width: '100%',
        display: 'flex',
        // backgroundImage: `url(${beach})`,
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        boxShadow:'1px 1px 15px 0px black'
    },
    media: {
        height: '63vh',
        width: '40%',
        // paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
    heading: {
        fontSize: theme.typography.pxToRem(35),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '100%',
        alignSelf: 'center',
    },
    aboutAccordion:{
        // backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

const About = () => {

    const [expanded, setExpanded] = useState(false)
    const [accordionExpanded, setAccordionExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const classes = useStyles()
    const open = Boolean(anchorEl)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleAboutChange = () => {
        setAccordionExpanded(!accordionExpanded)
    }

    return (
        <div id='about'>
            About Section
        </div>
    )
}



export default About