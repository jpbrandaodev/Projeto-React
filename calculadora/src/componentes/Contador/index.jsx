import { useState } from "react"
import './index.css'
export default function Contador() {

    const [valor, setValor] = useState(0)

    function handleDiminuir(){
        setValor(valor - 1)
    }

    function handleAumentar(){
        setValor(valor + 1)
    }



    return(
        <div className="container">
            <p>{valor}</p>
            
            <div>
                <button onClick={handleDiminuir}>-</button>
                <button obClick={handleAumentar}>+</button>
            </div>
        </div>
    )
}