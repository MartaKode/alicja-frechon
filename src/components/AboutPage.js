import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, makeStyles, Popover, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Image } from 'antd';
import avatar from '../images/coverPhoto.jpg'
import beach from '../images/backgrounds/brady-corps-ellyLSXQ5wg-unsplash.jpg'
import background from '../images/backgrounds/annie-spratt-nWiS2rgtVts-unsplash.jpg'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        backgroundImage: `url(${beach})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow:'1px 1px 15px 0px black'
    },
    aboutAccordion:{
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
            <Accordion onChange={() => handleAboutChange()} className={classes.aboutAccordion} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>My Story</Typography>
                    <Typography className={classes.secondaryHeading} >{accordionExpanded ? 'Click to hide my story' : 'Click to see more about me'}</Typography>

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
                               className={expanded ? classes.expandOpen : classes.expand }
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
                                    className={classes.popover}
                                    classes={{
                                        paper: classes.paper,
                                    }}
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
                        <Collapse in={expanded} timeout="auto" unmountOnExit >
                            <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
          </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
          </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AboutPage