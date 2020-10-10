
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
        titulo: habitacion.titulo,
        id:habitacion.id,
        contenido:habitacion.contenido,
        imagen:habitacion.imagen,
        slug: habitacion.slug
    }))

}
 
export default useRoom;