exports.createPages = async({actions, graphql, reporter}) => {
    const res = await graphql(
        `{
            allDatoCmsHabitacion {
              nodes {
                slug 
              }
            }
          }`
    );
    if (res.error) {
        reporter.panic('No hubo resultados', res.error);
    }
    const habitaciones = res.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/Habitaciones.js'),
            context: {
                slug:habitacion.slug
            }
        })
    })
}