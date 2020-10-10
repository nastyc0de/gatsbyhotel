import React from "react"
import { css } from '@emotion/core';
import ContenidoInicio from "../components/ContenidoInicio"
import ImageHotel from "../components/ImageHotel"
import Layout from "../components/Layout"
import useRoom from "../hooks/useRoom"
import HabitacionPreview from "../components/HabitacionPreview";

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
        <ul>
            {habitaciones.map(habitacion => (
                <HabitacionPreview/>
            ))}
        </ul>
    </Layout>
    )
}

export default IndexPage
