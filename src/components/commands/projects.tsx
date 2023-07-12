import "../../styles/projects.css"

const Projects = () => {
  return (
    <>
      <div data-testid="projects">
        {projects.map(({ id, title, desc, languaje, data,url }) => (
          <div className="project-container" key={id}>
            <div className="project-title">{`${id}. ${title}. | ${languaje} | ${data}`}</div>
            <div className="project-desc">{desc}</div>
            <div className="project-desc">
              <a href={url} target="_blank">Visitar repositorio</a>
              </div>
          </div>
        ))}
      </div>
    </>
  )
};
const url = "https://github.com/brymtz/";
export const projects = [
  {
    id: 1,
    title: "Sistemas de amortizacion",
    desc: "Sistema que emula los sistemas de amortizacion francesa y alemana en la solicitud de creditos",
    languaje: "PHP",
    data: "2023-05",
    url: `${url}sistemasAmortizacion`,
  },
  {
    id: 2,
    title: "Sistema de gestion de proyectos",
    desc: "Sistema desarrollado para el concurso HatunSoft el cual permite crear tareas, asignarla a un personal y visualizar en un tablero Kanban",
    languaje: "PHP",
    data: "2023-06",
    url: `${url}SistemaGestionProyectos`,
  },
  {
    id: 3,
    title: "Gestion y venta de boletos de buses interprovinciales en Ecuador",
    desc: "Sistema web y movil en el cual se pueden comprar boletos de buses y gestionar las rutas y personal de las cooperativas",
    languaje: "Angular con TypeScript",
    data: "2023-05",
    url: "https://gitlab.com/busesecuador/buses-ecuador-frontend",
  },
  {
    id: 4,
    title: "Web Page Orizontel",
    desc: "Pagina web para la empresa Orizontel",
    languaje: "PHP - JavaScript",
    data: "2022-08",
    url: "https://orizontel.ec/",
  },
  {
    id: 5,
    title: "MERN App Rick y Morty",
    desc: "Aplicacion que muestra la informacion de los personajes de la serie Rick y Morty",
    languaje: "React con JavaScript",
    data: "2023-05",
    url: "https://astro-paper.pages.dev/",
  },
];

export default Projects;