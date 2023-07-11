import React from "react";

const Skills = () => {
    return(
        <>
        <div className="terminal-heading">Languages</div><dl>
            <dt>TypeScript</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#00DE12", textShadow: "0 0 5px #00DE12" }}>
                    #############
                </span>{" "}
                ##
            </dd>
            <dt>Go</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#00DE12", textShadow: "0 0 5px #00DE12" }}>
                    ############
                </span>
                {"  "}
                ##
            </dd>
            <dt>Kotlin</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#42D100", textShadow: "0 0 5px #42D100" }}>
                    ###########
                </span>
                {"   "}
                ##
            </dd>
            <dt>Java</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#42D100", textShadow: "0 0 5px #42D100" }}>
                    ###########
                </span>
                {"   "}
                ##
            </dd>
            <dt>C# and C++</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#99D100", textShadow: "0 0 5px #99D100" }}>
                    ########
                </span>
                {"      "}
                ##
            </dd>
            <dt>Python</dt>
            <dd>
                ##{" "}
                <span style={{ color: "#D16200", textShadow: "0 0 5px #D16200" }}>
                    #####
                </span>
                {"         "}
                ##
            </dd>
        </dl><div className="terminal-heading">Cloud &amp; Infrastructure</div><dl>
                <dt>GCP / Firebase</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#99D100", textShadow: "0 0 5px 99D100" }}>
                        #########
                    </span>
                    {"     "}
                    ##
                </dd>
                <dt>Azure</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#99D100", textShadow: "0 0 5px 99D100" }}>
                        #########
                    </span>
                    {"     "}
                    ##
                </dd>
                <dt>AWS</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#99D100", textShadow: "0 0 5px #99D100" }}>
                        ########
                    </span>
                    {"      "}
                    ##
                </dd>
                <dt>
                    Infrastructure <br />
                    <span style={{ fontSize: "smaller" }}>
                        (Docker, Kubernetes, DBs, etc.)
                    </span>
                </dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#99D100", textShadow: "0 0 5px 99D100" }}>
                        #########
                    </span>
                    {"     "}
                    ##
                </dd>
            </dl><div className="terminal-heading">Web</div><dl>
                <dt>React</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#00DE12", textShadow: "0 0 5px #00DE12" }}>
                        ############
                    </span>
                    {"  "}
                    ##
                </dd>
                <dt>Angular</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#D16200", textShadow: "0 0 5px #D16200" }}>
                        #####
                    </span>
                    {"         "}
                    ##
                </dd>
                <dt>General web development</dt>
                <dd>
                    ##{" "}
                    <span style={{ color: "#5BD100", textShadow: "0 0 5px 5BD100" }}>
                        #########
                    </span>
                    {"     "}
                    ##
                </dd>
            </dl>
            </>
    )
}

export default Skills;