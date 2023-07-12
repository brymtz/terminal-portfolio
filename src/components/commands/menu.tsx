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
                    <dt>about</dt>
                    <dd>Some information about me</dd>
                    <dt>contact</dt>
                    <dd>Send an email to me</dd>
                    <dt>cv</dt>
                    <dd>Download my CV</dd>
                    <dt>clear</dt>
                    <dd>Clears the terminal of all output</dd>
                    <dt>menu</dt>
                    <dd>Check available commands</dd>
                    <dt>projects</dt>
                    <dd>View projects that I've coded</dd>
                    <dt>skills</dt>
                    <dd>Discover what I'm good at</dd>
                    <dt>social</dt>
                    <dd>Check out my social accounts</dd>
                </dl>
            </div>
        </>
    )
}

export default Menu;