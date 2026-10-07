import { useState } from "react";
import "./App.css";

function App() {

    // Counter state
    const [count, setCount] = useState(0);

    // Increment
    function increment() {
        setCount(count + 1);
    }

    // Decrement
    function decrement() {
        setCount(count - 1);
    }

    // Reset
    function reset() {
        setCount(0);
    }

    return (
        <div className="container">

            <div className="counter-card">

                <h1>React Counter App</h1>

                <h2 className="count">
                    {count}
                </h2>

                <div className="buttons">

                    <button
                        className="increment"
                        onClick={increment}
                    >
                        + Increment
                    </button>

                    <button
                        className="decrement"
                        onClick={decrement}
                    >
                        - Decrement
                    </button>

                    <button
                        className="reset"
                        onClick={reset}
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>
    );
}

export default App;