import React from "react"
import ContenidoInicio from "../components/ContenidoInicio"
import Layout from "../components/Layout"
import useRoom from "../hooks/useRoom"

useRoom();
const IndexPage = () => (
<Layout>
    <ContenidoInicio/>
</Layout>
)

export default IndexPage
