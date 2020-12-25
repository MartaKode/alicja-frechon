import React, {useState} from 'react';

const AboutPage = () => {
const [expanded, setExpanded] = useState(false)

    return(
        <div id='about'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'About' : 'Page' }</button>
        </div>
    )
}

export default AboutPage