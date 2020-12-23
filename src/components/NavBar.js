import React from 'react'
import avatar from '../images/coverPhoto.jpg'
import { Image } from 'antd';

const NavBar = () => {

    return (
        <div className='navigation' id='nav'>
            <div className='header' >
                <Image alt="Remy Sharp" src={avatar} className='avatar' style={{ width: '50px', height: '4.5em' }} />
                <h1> Alicja Frechon</h1>
            </div>
            <nav >
                <ul className='container' >
                    <li><a href='#top'>Top</a></li>
                    <li><a href='#about'>About me</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}



export default NavBar