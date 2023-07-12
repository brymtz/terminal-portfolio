type ErrorMessageProps = {
    command: string;
};

const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <div className="terminal-error-group">
            <span className="terminal-error">
                {`Command not found: ${props.command}`}
            </span>
            <span>
                {`Type 'menu' to view a list of available commands`}
            </span>
        </div>
    );
};

export default ErrorMessage;
