import { useContext, useEffect } from "react";
import {termContext} from '../terminal'
import { UsageDiv } from "../../styles/output.styled";

const Clear: React.FC = () => {
    const { arg, clearHistory } = useContext(termContext);
    useEffect(() => {
        if(arg.length < 1)
            clearHistory?.();
    }, []);
    return arg.length > 0 ? <UsageDiv>Usage: clear</UsageDiv> : <></>
};

export default Clear;

