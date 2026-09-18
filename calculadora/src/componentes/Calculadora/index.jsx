import {  useState } from "react"
import { evaluate } from "mathjs"

export default function() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const handleClick = (value) => {
        setInput(input + value)

    }

    const handleCalculator = () => {
        try {
            if (!input) return
            setResult(evaluate(input).toString())
        } catch (e) {
            setResult("Error")
            console.log(e)
        }
    }

    const handleClear = () => {
        setInput('')
        setResult('')
    }

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1))
    }

    return (
        <div>
            <div>
                <span>{input}</span>
            </div>

            <div>
                <span>=</span>
                <span>{result}</span>
            </div>

            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>

            <div />

            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>

            <div />

            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>

            <div />

            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>

            <div />

            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={handleDelete}>DEL</button>
            <button onClick={() => handleClick('=')}>=</button>

        </div>
    )
}