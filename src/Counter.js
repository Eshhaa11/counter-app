import react, {useState}from "react";

function Counter () {

    const [counter, setCounter] = useState(0);
    return (
        <div>
          <h1>Counter App</h1>

          <button>+1</button>
          <button>-1</button>
          <button>Reset</button>
        </div>

    );
}