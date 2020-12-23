import React, { useState } from 'react'

const About = () => {
    const [expanded, setExpanded] = useState(false)
    const [accordionExpanded, setAccordionExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

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
    
        </div>
    )
}



export default About