import React from 'react';
import pnLogo from '../assets/pn-Logo.png';
<index></index>

function Header(props){
    return(
        <header id='header'>
            <img src={pnLogo} alt="PN Logo" />
            <h1>{props.batchName}</h1>
        </header>
    )
}

export default Header;