import React from "react";

type ErrorMessageProps = {
    command: string;
};

const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <div className="terminal-error-group">
            <span className="terminal-error">
                {`Comando no encontrado: ${props.command}`}
            </span>
            <span>
                {`Escribe 'ayuda' para visualizar los comandos disponibles`}
            </span>
        </div>
    );
};

export default ErrorMessage;
