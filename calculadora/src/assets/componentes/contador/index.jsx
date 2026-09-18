import { useState } from "react"

function Contador () {
    const[numeroMostrado, setNumeroMostrado] = useState(0)


    return(
        <div>
            <div>
                <button onClick={s}>+</button>
            </div>
            <div>
                <p>{numeroMostrado}</p>
            </div>
            <div>
                <button onClick={z}>-</button>
            </div>

        </div>
    )
}