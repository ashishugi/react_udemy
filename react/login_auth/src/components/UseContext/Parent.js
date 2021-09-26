import { createContext } from "react";
import A from "./A"


const FirstName = createContext();
const SecondName = createContext();
const Parent = () => {
    return (
        <div>
            Parent component
           <div>
            <FirstName.Provider value="This is the first name value">
                <SecondName.Provider value="This is the second name value">
                    <A/>
                </SecondName.Provider>
            </FirstName.Provider>
           </div>
        </div>
    )
}

export default Parent;
export {FirstName,SecondName};