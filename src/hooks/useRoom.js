
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
    
    return data.allDatoCmsHabitacion.nodes.map(habitacion =>({
        nombre: habitacion.nombre,
        id:habitacion.id,
        descripcion:habitacion.descripcion,
        imagen:habitacion.imagen,
        slug: habitacion.slug
    }))

}
 
export default useRoom;