import React from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/Layout';

export const query = graphql`
    query($slug:String!){
        allDatoCmsHabitacion(filter:{slug:{eq:$slug}}) {
            nodes {
                nombre
                descripcion
            imagen{
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }

`

const Habitaciones = ({data:{allDatoCmsHabitacion:{nodes}}}) => {
    const {nombre, descripcion, imagen} = nodes[0];

    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width:1200px;
                    width:95%;
                `}
            >
                <h1
                    css={css`
                        text-align:center;
                        margin-top:4rem;
                    `}
                >{nombre}</h1>
                <p>{descripcion}</p>
                <Image
                    fluid={imagen[0].fluid}
                />
            </main>
        </Layout>
    )
}

export default Habitaciones
