import { useContext } from "react";
import {FirstName,SecondName } from "./Parent";

const C = () => {
    const fname = useContext(FirstName);
    const sname = useContext(SecondName);
    return (
        <div>
            <h1>Using useContext () Hook</h1>
          FirstName :   {fname} <br/>
          SecondName : { sname}
        </div>
    )
}

export default C;