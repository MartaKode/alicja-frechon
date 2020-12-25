import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const AboutPage = () => {
const [expanded, setExpanded] = useState(false)
const [accordionExpanded, setAccordionExpanded] = useState(false)

const handleAboutChange = () => {
    setAccordionExpanded(!accordionExpanded)
}

    return(
        <div id='about'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'About' : 'Page' }</button>
            <Accordion onChange={() => handleAboutChange()} >
            <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >My Story</Typography>
                    <Typography >{accordionExpanded ? 'Click to hide my story' : 'Click to see more about me'}</Typography>

                </AccordionSummary>
            </Accordion>
        </div>
    )
}

export default AboutPage