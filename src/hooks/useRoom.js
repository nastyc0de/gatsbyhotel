import { useStaticQuery, graphql } from 'gatsby';

const useRoom = () => {
    const data = useStaticQuery(
        graphql`
            {
                allDatoCmsHabitacion {
                    nodes {
                    nombre
                    descripcion
                    slug
                    id
                    imagen {
                            fluid(maxWidth: 1200) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }

        `
    );
    console.log(data); 
}
 
export default useRoom;