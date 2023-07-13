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
              <a href={url} target="_blank">Visit repository</a>
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
    title: "Amortization system",
    desc: "WebApp that emulates the French and German amortization systems in the credit application",
    languaje: "PHP",
    data: "2023-05",
    url: `${url}sistemasAmortizacion`,
  },
  {
    id: 2,
    title: "Project management system",
    desc: "System developed for the HatunSoft contest which allows creating tasks, assigning it to a staff and visualizing it on a Kanban board",
    languaje: "PHP",
    data: "2023-06",
    url: `${url}SistemaGestionProyectos`,
  },
  {
    id: 3,
    title: "Management and sale of interprovincial bus tickets in Ecuador",
    desc: "Web and mobile system in which you can buy bus tickets and manage the routes and staff of the cooperatives",
    languaje: "Angular with TypeScript",
    data: "2023-05",
    url: "https://gitlab.com/busesecuador/buses-ecuador-frontend",
  },
  {
    id: 4,
    title: "Web Page Orizontel",
    desc: "Website for the company Orizontel",
    languaje: "PHP - JavaScript",
    data: "2022-08",
    url: "https://orizontel.ec/",
  },
  {
    id: 5,
    title: "MERN App Rick y Morty",
    desc: "App that shows the information of the characters of the Rick and Morty series",
    languaje: "React with JavaScript",
    data: "2023-05",
    url: `${url}MERN_App_Rick_Morty`,
  },
];

export default Projects;