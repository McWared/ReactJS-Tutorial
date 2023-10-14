import React from "react";
import { useState } from "react";

const Message = () => {
    const [ state, setState] = useState("Hello visitor")

    return (
        <div>
            <h3>{state}</h3>
            <button onClick={(prev) => setState("Thanks for subscribing")}>
                <h1>Subscribe</h1>
            </button>
            <button onClick={(prev) => setState("Hello visitor")}>
                <h1>Toggle</h1>
            </button>
        </div>
    )
}


export default Message