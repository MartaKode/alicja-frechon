import React, {useState} from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Popover, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from '../images/coverPhoto.jpg'
import { Image } from 'antd';

const AboutPage = () => {
const [expanded, setExpanded] = useState(false)
const [accordionExpanded, setAccordionExpanded] = useState(false)
const [anchorEl, setAnchorEl] = useState(null)

const handleExpandClick = () => {
    setExpanded(!expanded)
}

const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
}

const handlePopoverClose = () => {
    setAnchorEl(null)
}

const handleAboutChange = () => {
    setAccordionExpanded(!accordionExpanded)
}

    return(
        <div id='about'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'About' : 'Page' }</button>
        </div>
    )
}

export default AboutPage

