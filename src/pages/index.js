import React from "react"
import { css } from '@emotion/core';
import ContenidoInicio from "../components/ContenidoInicio"
import ImageHotel from "../components/ImageHotel"
import Layout from "../components/Layout"
import useRoom from "../hooks/useRoom"
import HabitacionPreview from "../components/HabitacionPreview";
import styled from '@emotion/styled';

const Listado = styled.ul`
    max-width:1200px;
    width:95%;
    margin: 4rem auto 0 auto;

    @media(min-width:768px){
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap:3rem;
    }
`
const IndexPage = () => {
const habitaciones = useRoom();
console.log(habitaciones);
return(
    <Layout>
        <ImageHotel/>
        <ContenidoInicio/>
        <h2
            css={css`
                text-align:center;
                margin-top:5rem;
                font-size:3rem;
            `}
        >Nuestras Habitaciones</h2>
        <Listado>
            {habitaciones.map(habitacion => (
                <HabitacionPreview
                    key={habitacion.id}
                    habitacion={habitacion}
                />
            ))
            }
        </Listado>
        
    </Layout>
    )
}

export default IndexPage
