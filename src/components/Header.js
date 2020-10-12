import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Navbar from './Navbar';

const EnlaceHome = styled(Link)`
    color:#f1faee;
    text-align:center;
    text-decoration:none;
`;

const Header = () => {
    return (
        <header
            css={css`
                background-color:#e63946;
                padding:1rem;
            `}
        >
            <div
                css={css`
                    max-width:1200px;
                    margin: 0 auto;

                    @media (min-width: 768px){
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                    }
                `}
            >
                <EnlaceHome
                    to='/'
                >
                    <h1>Hotel</h1>
                </EnlaceHome>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header
