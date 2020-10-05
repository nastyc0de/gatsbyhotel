import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Fredoka+One&display=swap" rel="stylesheet"/> 
            </Helmet>
                {/* font-family: 'Fjalla One', sans-serif;
                font-family: 'Fredoka One', cursive; */}
            <Header/>
            {props.children}
        </>
    )
}

export default Layout
