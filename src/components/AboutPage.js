import React, {useState} from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Popover, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from '../images/coverPhoto.jpg'
import { Image } from 'antd';

const AboutPage = () => {
const [expanded, setExpanded] = useState(false)
const [accordionExpanded, setAccordionExpanded] = useState(false)
const [anchorEl, setAnchorEl] = useState(null)


    return(
        <div id='about'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'About' : 'Page' }</button>
        </div>
    )
}

export default AboutPage

