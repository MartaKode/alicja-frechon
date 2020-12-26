import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Popover, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Image } from 'antd';
import avatar from '../images/coverPhoto.jpg'
import beach from '../images/backgrounds/brady-corps-ellyLSXQ5wg-unsplash.jpg'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        backgroundImage: `url(${beach})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow:'1px 1px 15px 0px black'
    }
}))

const AboutPage = () => {
    const [expanded, setExpanded] = useState(false)
    const [accordionExpanded, setAccordionExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)
    const classes = useStyles()

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const handleAboutChange = () => {
        setAccordionExpanded(!accordionExpanded)
    }

    return (
        <div id='about'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'About' : 'Page'}</button>
            <Accordion onChange={() => handleAboutChange()} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >My Story</Typography>
                    <Typography >{accordionExpanded ? 'Click to hide my story' : 'Click to see more about me'}</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Card className={classes.root}>
                        <div className='cardInitial'>
                            <CardHeader
                                title='Personal'
                                subheader='Trainer'
                            />

                            <Image src={avatar} />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                            </CardContent>
                        </div>
                        <CardActions disableSpacing>
                            <IconButton
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon style={{ transform: 'rotate(-90deg)' }}
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}
                                />
                                <Popover
                                    id="mouse-over-popover"
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography>{expanded ? 'Show less' : 'Show more'}</Typography>
                                </Popover>
                            </IconButton>
                        </CardActions>
                    </Card>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AboutPage