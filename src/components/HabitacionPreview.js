import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import  {Link} from 'gatsby';

const Boton = styled(Link)`
    margin-top:2rem;
    padding:1rem;
    background-color:#1d3557;
    width:100%;
    color:#fff;
    display:block;
    text-decoration:none;
    text-transform:uppercase;
    text-align:center;
    font-weight:700;
`;

const HabitacionPreview = ({habitacion}) => {
    
    const {descripcion, imagen, nombre, slug} = habitacion;
    return (
        <div
            css={css`
                border: 1px solid #a8dadc;
                margin-bottom:2rem;
            `}
        >
            <Image fluid={imagen[0].fluid}/>
            <div
                css={css`
                    padding:2rem;
                `}
            >
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <Boton to={slug}>Ver Habitación</Boton>
            </div>
        </div>
    )
}

export default HabitacionPreview
