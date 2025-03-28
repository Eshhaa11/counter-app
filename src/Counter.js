import react, {useState}from "react";

function Counter () {

    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);   
    const decreaseCount = () => setCount(count - 1);
    const resetCounter = () => setCount(0);
    
     return (
        <div>
          <h1>Counter App</h1>

          <button>+1</button>
          <button>-1</button>
          <button>Reset</button>
        </div>

    );
}