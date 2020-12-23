import React from 'react'

import bells from '../images/katerina-jerabkova-nV7WA07ikI4-unsplash.jpg'
import diet from '../images/bill-oxford-aIlAhLdwk2g-unsplash.jpg'
import thirst from '../images/boxed-water-is-better-Z6xw00fvAy4-unsplash.jpg'
import yogaHome from '../images/maryjoy-caballero-IKAO7n6aMX4-unsplash.jpg'
import groupExercise from '../images/bruce-mars-gJtDg6WfMlQ-unsplash.jpg'
import planner from '../images/jess-bailey-94Ld_MtIUf0-unsplash.jpg'

const Services = () => {



    return (
        <div id='services' style={{ display: 'flex', flexDirection: 'column' }}>
            <h1> Services Offered</h1>

            <div>
                <h3>Gym Service</h3>
                <img src={bells} alt='gym' style={{ width: '35%', float: 'left' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
            </div>

            <div>
                <h3>Diet</h3>
                <img src={diet} alt='gym' style={{ width: '35%', float: 'right' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
            </div>

            <div>
                <h3>At the convenience of your home -- private sessions</h3>
                <img src={yogaHome} alt='gym' style={{ width: '35%', float: 'left' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
                </div>

            <div>
                <h3>Exercise outdoors</h3>
                <img src={thirst} alt='gym' style={{ width: '20%', float: 'right' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
            </div>

            <div>
                <h3>Bring your friends!  Group session up to 5 people</h3>
                <img src={groupExercise} alt='gym' style={{ width: '35%', float: 'left' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
                </div>

            <div>
               <h3> Diet, exercise, life-style planner</h3>
               <img src={planner} alt='gym' style={{ width: '25%', float: 'right' }} />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. </p>
                <h4> price : $$</h4>
                </div>
        </div>
    )
}



export default Services