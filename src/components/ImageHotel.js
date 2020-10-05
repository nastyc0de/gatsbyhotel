import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBG = styled(BackgroundImage)`
    height: 700px;
`
const Text = styled.div`
    background-image: linear-gradient(to top, rgba(69, 123, 157,.55), rgba(69, 123, 157,.55));
    color:#f1faee;
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items:center;
    justify-content:center;

    h1{
        font-size:4rem;
        margin:0%;

        @media (min-width:992px){
            font-size:5rem;
        }
    }
    p{
        font-size:2rem;
        @media (min-width:992px){
            font-size:3rem;
        }
    }
`
const ImageHotel = () => {
    const {image} = useStaticQuery(
        graphql`
            query{
                image:file(relativePath:{eq:"1hotel.png"}){
                    sharp:childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }         
                }
            }
        `
    )
    console.log(image)
    return (
        <ImageBG tag='section' fluid={image.sharp.fluid} fadeIn="soft">
            <Text>
                <h1>Bienvenido al hotel</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </Text>
        </ImageBG>
    )
}

export default ImageHotel;
