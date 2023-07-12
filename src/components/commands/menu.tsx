import "../../styles/menu.css"

const Menu = () => {
    return (
        <>
            <div>
                <p>
                    Ey! Here you have some options with you can interact. <br/>
                    Just type any of the commands below to get more info. <br />
                    You can even type a few letters and press [tab] or '.' 
                    to autocomplete.
                </p>
                <dl>
                    <dt><span className="command">about</span></dt>
                    <dd>Some information about me</dd>
                    <dt><span className="command">contact</span></dt>
                    <dd>Send an email to me</dd>
                    <dt><span className="command">cv</span></dt>
                    <dd>Download my CV</dd>
                    <dt><span className="command">clear</span></dt>
                    <dd>Clears the terminal of all output</dd>
                    <dt><span className="command">menu</span></dt>
                    <dd>Check available commands</dd>
                    <dt><span className="command">projects</span></dt>
                    <dd>View projects that I've coded</dd>
                    <dt><span className="command">skills</span></dt>
                    <dd>Discover what I'm good at</dd>
                    <dt><span className="command">social</span></dt>
                    <dd>Check out my social accounts</dd>
                </dl>
            </div>
        </>
    )
}

export default Menu;