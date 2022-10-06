import { useState } from "react"

const Likes = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
        
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
    
    return (
      <div className="likes">
        <button onClick={increaseCount}>⬆️</button>
        <button onClick={decreaseCount}>⬇️</button>
        <span className="answers__count">{count}</span>
      </div>
    );
}

export default Likes