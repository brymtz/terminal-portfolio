import { useContext } from "react";
import { Wrapper } from "../../styles/output.styled";
import _ from "lodash";
import { termContext } from "../terminal";

const Echo: React.FC = () => {
    const { arg } = useContext(termContext);

    let outputStr = _.join(arg, " ");
    outputStr = _.trim(outputStr, "'");
    outputStr = _.trim(outputStr, '"');
    outputStr = _.trim(outputStr, "`");

    return <Wrapper>{outputStr}</Wrapper>
};

export default Echo;