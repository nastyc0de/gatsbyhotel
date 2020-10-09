import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextoInicio = styled.main`
    padding-top:4rem;
    padding-bottom:2rem;
    max-width:1200px;
    width:95%;
    margin: 0 auto;

    @media (min-width: 768px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        column-gap:3rem;
    }
    p{
        line-height:2;
    }


`;
const ContenidoNosotros = () => {
    
    const info = useStaticQuery(
        graphql`
        {
                allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}) {
                    nodes {
                    titulo
                    contenido
                    imagen {
                        fluid(maxWidth:1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
        `
    );
    const {titulo, contenido, imagen} = info.allDatoCmsPagina.nodes[0];
    return (
        <>
           <h2
                css={css`
                    text-align:center;
                    font-size:4rem;
                    margin-top:4rem;
                `}
           >{titulo}</h2>
           <TextoInicio>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
           </TextoInicio>
        </>
    )
}

export default ContenidoNosotros
