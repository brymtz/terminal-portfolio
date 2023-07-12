import React from "react";

const Contact = () => {
    const mail = 'devbmartinez@gmail.com';
    const enlace = `mailto:${mail}`;
    //window.open("mailto:"+"devbmartinez@gmail.com", "_self");
    return (
        <>
            <dl>
                <dt>Email</dt>
                <dd>
                    <p>Send an email to: <a href={enlace} target="_self">devbmartinez@gmail.com</a></p>
                </dd>
            </dl>
        </>
    )
}

export default Contact;