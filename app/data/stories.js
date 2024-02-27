function xpYears(startYear) {
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    return currYear - startYear;
}

export const stories = [
    {
        body: `¡Hola! Soy <span style="color: #00749C">Nelson Ochagavía</span>, un desarrollador web altamente cualificado con <span style="color: #3EB489">${xpYears(2018)}+ años creando experiencias</span> dinámicas y centradas en el usuario en toda la pila web.`
    },
    {
        body: `Domino los últimos frameworks de <span style="color: #f0db4f">JavaScript</span>, incluyendo <span style="color: #61dbfb">React.js</span>, <span style="color: #45ce05">Next.js</span>, <span style="color: #f0db4f">Express</span> y <span style="color: #f73c00">Sveltekit</span>, y los utilizo para construir front-ends hermosos, y back-ends robustos y eficientes.`
    }, 
    {
        body: `Mi kit de herramientas de UI/UX incluye <span style="color: #b8c2cc">Tailwindcss</span>, <span style="color: #563d7c">Bootstrap</span> y <span style="color: #f0db4f">Material UI</span>, garantizando interfaces perfectas para cualquier proyecto.`
    },
    {
        body: `Cuento con experiencia en el desarrollo de bases de datos relacionales (<span style="color: #016e88">MySQL</span>, <span style="color: #2f5e8d">PostgreSQL</span>) y no relacionales (<span style="color: #4cab3d">MongoDB</span>), lo que me permite diseñar y desarrollar soluciones escalables y seguras.`
    },
    {
        body: `Además, tengo experiencia en el uso de <span style="color: #e84e31">Git</span> para el control de versiones, el trabajo en equipo y la metodología <span style="color: #189ab6">SCRUM</span>, lo que me permite colaborar de forma eficiente con otros desarrolladores y trabajar de forma eficaz en proyectos complejos.`
    },
    {
        body: `Más allá de <span style="color: #f0db4f">JavaScript</span>, soy experto en la creación de blogs atractivos, portales web y e-commerces con <span style="color: #00749C">WordPress</span> / <span style="color: #00749C">Woocommerce</span>, facilitando la gestión de contenidos.`
    }, 
    {
        body: `Mi experiencia se extiende a entornos de escritorio, donde empleo <span style="color: #3859a3">PyQt</span> para el desarrollo de aplicaciones <span style="color: #ffde57">Python</span>, dando vida a tus ideas con un toque potente e intuitivo.`
    }, 
    {
        body: `Este diverso conjunto de habilidades me permite abordar cualquier proyecto con confianza. Soy un solucionador de problemas apasionado con un don para el código limpio y los flujos de trabajo eficientes, siempre esforzándome por superar las expectativas.`
    }
]