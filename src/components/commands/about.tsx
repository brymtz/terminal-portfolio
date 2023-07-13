const About = () => {
    return (
        <>
            <div>
                <p>Hey, I'm {glow("Bryan")}! 👋</p>
                <p>
                You're probably wondering who I am, so I'm going to tell you a little about myself, 
                I'm a {getAge(new Date(2000, 6, 29))} year old Ecuadorian, I'm always looking for 
                opportunities that allow me to expand my knowledge and keep up to date with the 
                latest development and security trends.
                </p>
                <p>
                    I am a passionate Full Stack developer with experience in designing and developing web applications.
                    In addition to my focus on software development, I also have a strong interest in cloud infrastructure
                    and enjoy exploring the possibilities it offers to build and deploy scalable and efficient applications.
                </p>
                <p>
                    My enthusiasm for cybersecurity has led me to participate in CTFs and immerse myself
                    in the world of Red Team where I am better known as {glow("Exayfer")}. I'm passionate about
                    the challenge of protecting systems and networks, and I find it fascinating to discover
                    vulnerabilities and devise strategies to prevent them.
                </p>
                <p>
                    Some of my interests include: blockchain and cryptography, penetration testing, cloud infrastructure 
                    and security audits. My personal goal is to be part of challenging projects that allow me to improve 
                    my skills and later found a cybersecurity company in Ecuador.
                </p>
                <p>
                    Please feel free to get in touch with me to discuss any cool
                    opportunities. My contact details can be found by typing 'contact',
                    and if you would like to check out my {glow("CV")}, simply type 'cv'
                    or click{" "}
                    <a href="CV.pdf" download="Bryan Martinez - Curriculum Vitae.pdf">
                        here
                    </a>
                    .
                </p>
            </div>
        </>
    )
}

// Just a little helper function so I don't have to continually update my age
const getAge = (birthDate: Date) => {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const glow = (text: string) => {
    return <span className="terminal-glow">{text}</span>;
};

export default About;