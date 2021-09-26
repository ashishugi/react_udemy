
import Login from "./Login/Login";
import Counter from "./Counter/Counter";
import CounterHooks from "./Counter_Hooks/CounterHooks";
import Parent from "../components/UseContext/Parent";
const App = () => {
    return (
        <div>
            HI this is App component
            <Login/>
            <Counter/>
            <CounterHooks/>
            <Parent/>
        </div>
    )
}

export default App;