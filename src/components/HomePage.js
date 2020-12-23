import React from 'react'

// pics imported:
import pic1 from '../images/boat.jpg'
import pic2 from '../images/boat2.jpg'
import milun from '../images/milun.jpg'
import braintreeHome from '../images/braintreeHome.jpg'
import dance from '../images/dance.jpg'
import modeling from '../images/modeling.jpg'
import modeling2 from '../images/modeling2.jpg'
import modeling3 from '../images/modeling3.jpg'
import park from '../images/park.jpg'
import polskaFitness from '../images/polskaFitness.jpg'
import recent from '../images/recent.jpg'
import silownia from '../images/silownia.jpg'
import work from '../images/work.jpg'

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
// import About from './About'
// import Services from './Services'
// import Contact from './Contact'
import { Image, Popover } from 'antd';


const HomePage = () => {

    const items = [
        {
            // name: "Personal Trainer",
            // description: "Probably the most random thing you have ever seen!",
            image: pic1,
            width: 280
        },
        {
            // name: "Physical Therapist",
            // description: "Hello World!",
            image: pic2,
            width: 280
        },
        {
            // name: "Dietitian",
            // description: "Hello World!",
            image: braintreeHome,
            width: 320
        },
        {
            // name: "Aerobic Teacher",
            // description: "Hello World!",
            image: milun,
            width: 550
        },
        {
            image: dance,
            width: 280
        },
        {
            image: modeling,
            width: 330
        },
        {
            image: modeling2,
            width: 310
        },
        {
            image: modeling3,
            width: 550
        },
        {
            image: park,
            width: 320
        },
        {
            image: polskaFitness,
            width: 725
        },
        {
            image: recent,
            width: 245
        },
        {
            image: silownia,
            width: 550
        },
        {
            image: work,
            width: 725
        },
    ]

    return (
        <div  className='homePage'>

            {/* <div className='header' style={{ display: 'flex' }}>
                <Avatar alt="Remy Sharp" src={avatar} className='avatar' style={{ width: '150px', height: '150px' }} />
                <h1> Alicja Frechon</h1>
            </div> */}

            <Carousel 
                id='top'
                className='carousel'
                indicators
                animation='slide'
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>

            {/* <About />
            <Services />
            <Contact /> */}

        </div>
    )
}

function Item(props) {
    return (

        <Paper className='carouselPop' elevation={0} style={{background:'transparent'}}>
            <Popover content='Click to preview' placement='right'>
                <Image
                    src={props.item.image}
                    width={props.item.width}
                    style={{zIndex: 1000}}
                />
            </Popover>
            <div>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
        </Paper>

    )
}

export default HomePage