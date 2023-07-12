import "../../styles/projects.css"

const Social = () => {
    return (
        <>
            <div className="project-container"> 
                <p>Here are my social links</p>
                {social.map(({ id, title, url }) => (
                    <div className="project-title" key={title}>
                        <p>{`${id}`} <a href={url} target="_blank">{title}</a> </p>
                        
                    </div>
                ))}
            </div>
        </>
    )
}

const social = [
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com/brymtz",
    },
    {
        id: 2,
        title: "Linkedin",
        url: "https://linkedin.com/in/bryanmtz",
    },
];

export default Social;
