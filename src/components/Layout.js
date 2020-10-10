import React from 'react';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './Header';

const Layout = (props) => {
    return (
        <>
            <Global
                styles={
                    css`
                        html{
                            font-size:62.5%;
                        }
                        body{
                            font-size:16px;
                            font-size:1.6rem;
                            line-height:1.5;
                            font-family: 'Fjalla One', sans-serif;
                        }
                        h1,h2,h3{
                            margin:0;
                            line-height:1.5;
                        }
                        h1,h2{
                            font-family: 'Fredoka One', cursive;
                        }
                        h3{
                            font-family: 'Fjalla One', sans-serif;
                        }
                        ul{
                            list-style:none;
                            margin:0;
                            padding:0;
                        }

                    `
                }
            />
            <Helmet>
                <title>Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Fredoka+One&display=swap" rel="stylesheet"/> 
            </Helmet>
            <Header/>
            {props.children}
        </>
    )
}

export default Layout
