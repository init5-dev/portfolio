function xpYears(startYear) {
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    return currYear - startYear;
}

export const stories = [
    {
        body: `¡Hola! Soy Nelson Ochagavía, programador con ${xpYears(2009)} años de experiencia en el desarrollo de aplicaciones de escritorio y web.`
    },
    {
        body: `Además, durante ${xpYears(2016)} años, he trabajado en el sector de la optimización para motores de búsqueda (SEO) y el marketing en buscadores (SEM), así como otras áreas donde el desarrollo, el diseño y el marketing online se juntan.`
    }, 
    {
        body: `Si buscas un programador versado que impulse tu negocio online, ¡contáctame! O navega por este portafolio si todavía no estás convencido.`
    }
]